#!/usr/bin/env python3
"""Extract explicit RSS anchors from official publisher lists; no inferred URLs."""
import json,hashlib,datetime
from pathlib import Path
from html.parser import HTMLParser
from urllib.request import Request,urlopen
from urllib.parse import urljoin,urlsplit,parse_qs
class Links(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.a=None
 def handle_starttag(self,t,attrs):
  if t=='a':self.a=[dict(attrs).get('href',''),'']
 def handle_data(self,s):
  if self.a:self.a[1]+=s
 def handle_endtag(self,t):
  if t=='a' and self.a:self.links.append(self.a);self.a=None
sources=[
 ('acs','https://pubs.acs.org/pages/rss'),
 ('frontiers','https://www.frontiersin.org/news/2022/06/30/frontiers-social-media-and-rss'),
]
out=[]
destination=Path("research/official-rss-lists-"+datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")+".json")
if destination.exists(): raise SystemExit("Refusing to overwrite "+str(destination))
for publisher,url in sources:
 r={'publisher':publisher,'source_url':url,'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'links':[]}
 try:
  with urlopen(Request(url,headers={'User-Agent':'AcademicJournalRSSAudit/0.2 (+https://github.com/AxisLabAI/academic-journal-rss-feeds)'}),timeout=20) as response:body=response.read(4*1024*1024)
  p=Links();p.feed(body.decode('utf8',errors='replace'))
  for href,label in p.links:
   absolute=urljoin(url,href);u=urlsplit(absolute)
   if publisher=='acs' and (('/feed/' in u.path) or ('showFeed' in u.path)):
    r['links'].append({'url':absolute,'label':' '.join(label.split())})
   if publisher=='frontiers' and ('rss' in u.path.lower() or label.strip()=='RSS'):
    r['links'].append({'url':absolute,'label':' '.join(label.split())})
  r['links']=list({x['url']:x for x in r['links']}.values())
  r['page_sha256']=hashlib.sha256(body).hexdigest();r['outcome']='retrieved'
 except Exception as e:r['outcome']=type(e).__name__
 out.append(r)
destination.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(json.dumps([{k:v for k,v in r.items() if k!='links'}|{'links':len(r['links'])} for r in out],indent=2))
