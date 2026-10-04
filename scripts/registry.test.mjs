import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
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

