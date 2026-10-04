// Explicit one-time import. Reads only the two approved public metadata fields.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {isIP} from 'node:net';
const input=process.argv[2];if(!input)throw new Error('Usage: node scripts/import-snapshot.mjs /path/to/approved-snapshot.json');
if(fs.existsSync('data/feeds.json'))throw new Error('Refusing to overwrite the registry; review future imports as separate changes.');
const inputRows=JSON.parse(fs.readFileSync(input,'utf8'));
const seen=new Set();const rows=[];
for(const r of inputRows){
 const u=new URL(r.rss_url);
 if(!['https:','http:'].includes(u.protocol)||u.username||u.password||u.hash||isIP(u.hostname)||!u.hostname.includes('.')||u.hostname.endsWith('.local')||u.hostname.endsWith('.internal'))throw new Error('Unsafe URL in source');
 if([...u.searchParams.keys()].some(k=>/token|secret|password|api.?key|authorization/i.test(k)))throw new Error('Sensitive query parameter');
 if(seen.has(u.href))continue;seen.add(u.href);
 rows.push({id:createHash('sha256').update(u.href).digest('hex').slice(0,16),name:String(r.name).trim().replace(/[\r\n]+/g,' '),feed_url:u.href,host:u.hostname,status:'needs-review',last_checked:null,provenance:'zinote-historical-url-snapshot'});
}
rows.sort((a,b)=>a.name.localeCompare(b.name,'en')||a.id.localeCompare(b.id,'en'));
fs.mkdirSync('data',{recursive:true});fs.writeFileSync('data/feeds.json',JSON.stringify(rows,null,2)+'\n');
console.log({imported:rows.length});

