#!/usr/bin/env python3
"""Bounded public endpoint audit; never saves feed bodies or article content."""
import concurrent.futures as cf
import argparse
import datetime as dt
import hashlib
import ipaddress
import json
import socket
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from collections import Counter, defaultdict

ROOT=Path(__file__).resolve().parents[1]
LIMIT=2*1024*1024
locks=defaultdict(threading.Lock)
stopped=set()
guard=threading.Lock()
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*args,**kwargs): return None
def validate(url):
    u=urllib.parse.urlsplit(url)
    if u.scheme not in ('https','http') or not u.hostname or u.username or u.password: raise ValueError('unsafe_url')
    for a in socket.getaddrinfo(u.hostname,u.port or (443 if u.scheme=='https' else 80),type=socket.SOCK_STREAM):
        if not ipaddress.ip_address(a[4][0]).is_global: raise ValueError('non_public_destination')
def local(tag): return tag.rsplit('}',1)[-1].lower()
def check(record):
    result={'id':record['id'],'checked_at':dt.datetime.now(dt.timezone.utc).isoformat(),'url':record['feed_url'],'outcome':'unknown','http_status':None,'format':None,'entries':None,'feed_title':None,'final_url':None}
    current=record['feed_url']
    try:
        for _ in range(4):
            host=urllib.parse.urlsplit(current).hostname
            with locks[host]:
                with guard:
                    if host in stopped:
                        result['outcome']='host-rate-limited-not-attempted';return result
                validate(current)
                request=urllib.request.Request(current,headers={'User-Agent':'AcademicJournalRSSAudit/0.2 (+https://github.com/AxisLabAI/academic-journal-rss-feeds)','Accept':'application/rss+xml,application/atom+xml,application/rdf+xml,application/xml,text/xml;q=0.9','Accept-Encoding':'identity'})
                try:
                    with urllib.request.build_opener(NoRedirect).open(request,timeout=8) as response:
                        result['http_status']=response.status;result['final_url']=response.geturl()
                        body=response.read(LIMIT+1)
                except urllib.error.HTTPError as error:
                    result['http_status']=error.code
                    if error.code in (301,302,303,307,308) and error.headers.get('Location'):
                        current=urllib.parse.urljoin(current,error.headers['Location']);continue
                    if error.code==429:
                        with guard: stopped.add(host)
                        result['outcome']='rate-limited'
                    elif error.code in (401,403):result['outcome']='access-blocked'
                    elif error.code in (404,410):result['outcome']='not-found'
                    else:result['outcome']='http-error'
                    return result
                finally: time.sleep(0.15)
            if len(body)>LIMIT: result['outcome']='oversize';return result
            if b'<!ENTITY' in body.upper() or b'<!DOCTYPE' in body.upper():
                result['outcome']='html-or-disallowed-doctype';return result
            try: tree=ET.fromstring(body)
            except ET.ParseError: result['outcome']='not-feed-xml';return result
            kind=local(tree.tag)
            if kind not in ('rss','feed','rdf'):result['outcome']='not-feed-xml';return result
            entries=sum(local(e.tag) in ('entry','item') for e in tree.iter())
            result['format']={'rss':'rss','feed':'atom','rdf':'rdf'}[kind];result['entries']=entries
            channel=next((e for e in tree if local(e.tag)=='channel'),tree)
            title=next((e for e in channel if local(e.tag)=='title'),None)
            if title is not None:result['feed_title']=' '.join(''.join(title.itertext()).split())[:240]
            result['outcome']='feed-with-entries' if entries else 'empty-feed'
            return result
        result['outcome']='redirect-limit'
    except (TimeoutError,socket.timeout):result['outcome']='timeout'
    except urllib.error.URLError as error:
        result['outcome']='tls-or-network-error'
    except Exception as error:
        result['outcome']='network-or-safety-error'
    return result
def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date",default=dt.datetime.now(dt.timezone.utc).date().isoformat())
    args=parser.parse_args()
    day=dt.date.fromisoformat(args.date).isoformat()
    out=ROOT/("research/endpoint-audit-"+day+".json")
    if out.exists(): raise SystemExit("Refusing to overwrite an existing audit snapshot: "+str(out))
    records=json.loads((ROOT/'data/feeds.json').read_text())
    # Interleave hosts so one large platform cannot occupy all workers.
    buckets=defaultdict(list)
    for r in records:buckets[r['host']].append(r)
    ordered=[]
    while any(buckets.values()):
        for host in sorted(buckets):
            if buckets[host]:ordered.append(buckets[host].pop(0))
    out.parent.mkdir(exist_ok=True)
    results=[]; started=dt.datetime.now(dt.timezone.utc).isoformat()
    with cf.ThreadPoolExecutor(max_workers=12) as pool:
        for f in cf.as_completed([pool.submit(check,r) for r in ordered]):
            results.append(f.result())
            if len(results)%100==0:
                print(json.dumps({'completed':len(results),'outcomes':dict(Counter(r['outcome'] for r in results))}),flush=True)
                out.write_text(json.dumps({'started_at':started,'scope':'2024 historical candidate URLs; not a global journal census','results':sorted(results,key=lambda r:r['id'])},ensure_ascii=False,indent=2)+'\n')
    out.write_text(json.dumps({'started_at':started,'finished_at':dt.datetime.now(dt.timezone.utc).isoformat(),'scope':'2024 historical candidate URLs; not a global journal census','registry_sha256':hashlib.sha256((ROOT/'data/feeds.json').read_bytes()).hexdigest(),'results':sorted(results,key=lambda r:r['id'])},ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'finished':len(results),'outcomes':dict(Counter(r['outcome'] for r in results))}),flush=True)
if __name__=='__main__':main()
