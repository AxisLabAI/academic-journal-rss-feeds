import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {isIP} from 'node:net';
const feeds=JSON.parse(fs.readFileSync('data/feeds.json'));
test('records are allowlisted public metadata with unique identifiers and URLs',()=>{
 const ids=new Set(),urls=new Set();
 for(const f of feeds){
  assert.deepEqual(Object.keys(f).sort(),['id','name','feed_url','host','status','last_checked','provenance'].sort());
  assert.match(f.id,/^[a-f0-9]{16}$/); assert(!ids.has(f.id));ids.add(f.id);
  assert(f.name.trim());assert(!/[\r\n]/.test(f.name));
  const u=new URL(f.feed_url);assert(['https:','http:'].includes(u.protocol));
  assert(!u.username&&!u.password&&!u.hash);assert(!isIP(u.hostname));
  assert(u.hostname.includes('.')&&!u.hostname.endsWith('.local')&&!u.hostname.endsWith('.internal'));
  assert(!urls.has(u.href));urls.add(u.href);assert.equal(f.host,u.hostname);
  assert(![...u.searchParams.keys()].some(k=>/token|secret|password|api.?key|authorization/i.test(k)));
  assert(['needs-review','active','unavailable','deprecated'].includes(f.status));
  assert(f.last_checked===null||/^\d{4}-\d{2}-\d{2}$/.test(f.last_checked));
  if(f.status==='active')assert(f.last_checked,'Active requires current evidence, reviewed manually');
  assert.equal(f.provenance,'zinote-historical-url-snapshot');
 }
});
test('generated artifacts match source',()=>{
 const s=JSON.parse(fs.readFileSync('dist/status.json'));assert.equal(s.candidate_records,feeds.length);
 assert.equal(Object.values(s.statuses).reduce((a,b)=>a+b,0),feeds.length);
 const opml=fs.readFileSync('dist/feeds.opml','utf8');assert.equal((opml.match(/<outline /g)||[]).length,feeds.length);
 const cat=fs.readFileSync('docs/CATALOG.md','utf8');for(const f of feeds)assert(cat.includes(f.feed_url));
});

test("research snapshot is complete, bound to source bytes and arithmetically consistent",()=>{
 const a=JSON.parse(fs.readFileSync("research/endpoint-audit-2026-10-04.json"));
 const s=JSON.parse(fs.readFileSync("dist/research-summary.json"));
 assert(a.finished_at);assert.equal(a.results.length,feeds.length);
 assert.equal(new Set(a.results.map(r=>r.id)).size,feeds.length);
 assert.equal(a.registry_sha256,crypto.createHash("sha256").update(fs.readFileSync("data/feeds.json")).digest("hex"));
 const ids=new Map(feeds.map(f=>[f.id,f]));
 for(const r of a.results){assert.equal(r.url,ids.get(r.id).feed_url);assert(!Number.isNaN(Date.parse(r.checked_at)));if(r.outcome==="feed-with-entries"){assert(r.entries>0);assert(["rss","rdf","atom"].includes(r.format));}}
 assert.equal(s.feed_with_entries,a.results.filter(r=>r.outcome==="feed-with-entries").length);
 assert.equal(s.feed_with_entries+s.other_outcomes,feeds.length);
 assert.equal(Object.values(s.outcomes).reduce((a,b)=>a+b,0),feeds.length);
 for(const k of ["global_active_journal_total","global_official_rss_total","global_self_build_required_total"])assert.equal(s[k],null);
 assert.equal(s.identity_and_freshness_verified,false);
 const opml=fs.readFileSync("dist/responsive-candidates.opml","utf8");assert.equal((opml.match(/<outline /g)||[]).length,s.feed_with_entries);
 assert.equal(JSON.parse(fs.readFileSync("dist/status.json")).campaign_milestone,undefined);
});

test("publisher observations preserve source units and unknown totals",()=>{
 const p=JSON.parse(fs.readFileSync("research/publishers-2026-10-04.json"));
 assert.equal(p.publishers.length,12);assert.equal(new Set(p.publishers.map(r=>r.id)).size,12);
 for(const r of p.publishers){assert(new URL(r.count_source));assert(new URL(r.rss_source));assert(r.count_scope);assert.equal(r.official_rss_total,null);assert.equal(r.self_build_required_total,null);}
 const acs=JSON.parse(fs.readFileSync("research/acs-rss-journals.json"));
 assert.equal(new Set(acs.journals).size,91);assert.equal(acs.journal_count,91);assert.equal(acs.feed_option_count,182);assert.equal(acs.live_endpoints_verified,false);
 const frontiers=JSON.parse(fs.readFileSync("research/official-rss-lists.json")).find(r=>r.publisher==="frontiers").links;
 assert.equal(new Set(frontiers.map(r=>r.url)).size,125);assert.equal(frontiers.filter(r=>new URL(r.url).pathname.endsWith("/rss")).length,124);
 assert.equal(p.publishers.find(r=>r.id==="frontiers").listed_count,124);
});

test("three README languages have synchronized generated summaries and local links resolve",()=>{
 const s=JSON.parse(fs.readFileSync("dist/research-summary.json"));
 for(const file of ["README.md","README.zh-CN.md","README.ja.md"]){
  const text=fs.readFileSync(file,"utf8");const block=text.match(/<!-- research-summary:start -->([\s\S]*?)<!-- research-summary:end -->/)[1];
  for(const n of [s.candidate_urls,s.feed_with_entries,s.other_outcomes])assert(block.includes(String(n)));
  for(const m of text.matchAll(/\]\(([^)]+)\)/g)){if(!m[1].includes("://")&&!m[1].startsWith("#"))assert(fs.existsSync(m[1]),file+": missing "+m[1]);}
 }
});
