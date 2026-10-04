# Academic Journal RSS Feeds

**An open directory of scholarly journal RSS, Atom and RDF feed candidates — built for researchers, RSS readers and research tools.**

English · [简体中文](README.zh-CN.md) · [日本語](README.ja.md)

[Browse the journal list](docs/CATALOG.md) · [JSON](data/feeds.json) · [CSV](dist/feeds.csv) · [OPML](dist/feeds.opml) · [Status](dist/status.json) · [Contribute](CONTRIBUTING.md)

Maintained by [AxisLabAI](https://github.com/AxisLabAI), initiated through [ZiNote](https://zinote.app). Our aim is to build a comprehensive, community-maintained directory of academic journal feeds. **“The world's most complete” is an ambition, not a verified ranking or a claim of complete coverage.**

## Project status

Snapshot: **2026-10-04**. Counts describe different stages and must not be treated as interchangeable.

| Metric | Count | Meaning |
| --- | ---: | --- |
| Day4 campaign milestone | 2,006 / 20,000 · 10.03% | Maintainer-reported project progress; not an audited count of working feeds |
| Imported candidate records | 2,024 | Distinct feed URLs from a historical ZiNote URL snapshot |
| Needs review | 2,024 | Identity, format and current availability need verification |
| Currently verified in this repository | 0 | No fresh network verification is claimed at launch |
| HTTPS / HTTP candidates | 1,963 / 61 | HTTP URLs are preserved for review, not silently upgraded |

The live ZiNote app catalog, historical source snapshot and campaign milestone have different scopes. A larger app count does not establish the number of public, verified RSS endpoints. Machine-readable counts are generated in [status.json](dist/status.json).

## Journal list and coverage

Browse the [full journal feed catalog](docs/CATALOG.md) for every journal name, URL, host, status and last-check date. The registry intentionally retains uncertain and potentially misclassified historical entries for review; inclusion is not a claim that a URL is an official, journal-specific, working feed.

| Candidate host | Records | Initial state |
| --- | ---: | --- |
| rss.sciencedirect.com | 641 | needs-review |
| www.nature.com | 144 | needs-review |
| www.frontiersin.org | 94 | needs-review |
| Other hosts | 1,145 | needs-review |
| **Total** | **2,024** | **Awaiting current verification** |

Host counts are not publisher counts: one publisher may use several hosts, and a host may contain multiple content types. No impact-factor rankings or journal quartile datasets are distributed.

## Quick start

### Researchers and RSS readers

1. Find a journal in the [catalog](docs/CATALOG.md).
2. Check its status and try the feed URL in your RSS reader.
3. Report an incorrect, moved or unavailable source through an issue.

The [OPML export](dist/feeds.opml) contains **all unverified candidates**, including HTTP entries. It is a bulk discovery file, not a recommended ready-to-subscribe bundle. Prefer adding selected feeds after checking them.

### Developers

Download the canonical JSON:

```bash
curl -fL https://raw.githubusercontent.com/AxisLabAI/academic-journal-rss-feeds/main/data/feeds.json -o feeds.json
```

Filter by journal name without installing dependencies:

```javascript
const response = await fetch(
  'https://raw.githubusercontent.com/AxisLabAI/academic-journal-rss-feeds/main/data/feeds.json'
);
if (!response.ok) throw new Error('Could not load registry');
const feeds = await response.json();
console.log(feeds.filter(feed => /nature/i.test(feed.name)));
```

Do not automatically fetch every URL at high concurrency. Respect publishers' terms, caching requirements and rate limits. Apply your own public-network and redirect checks before server-side fetching.

## Data contract

Canonical source: `data/feeds.json`, a JSON array.

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | First 16 hex characters of SHA-256 of the normalized feed URL; changes when URL changes |
| `name` | string | Source journal title; may require normalization |
| `feed_url` | string | Public candidate RSS/Atom/RDF URL; format not inferred from extension |
| `host` | string | Hostname extracted from the URL, not a verified publisher identity |
| `status` | enum | `needs-review`, `active`, `unavailable`, `deprecated` |
| `last_checked` | date or null | UTC verification date; null means no current evidence |
| `provenance` | string | Source family, initially `zinote-historical-url-snapshot` |

### Status definitions

| Status | Meaning |
| --- | --- |
| `needs-review` | Discovered/imported; identity, validity or availability is unconfirmed |
| `active` | Official identity, parseable RSS/Atom/RDF and at least one entry checked on the recorded date |
| `unavailable` | Reviewed evidence indicates the feed cannot currently be used; may be recoverable |
| `deprecated` | Reviewed evidence indicates retirement or replacement |

A successful HTTP response alone is not validation. A historical fetch timestamp is not current evidence. This release contains no `active` entries and no uptime guarantees.

## Provenance and safety

The initial import uses only journal names and public feed URLs from a historical ZiNote snapshot. Internal database IDs, operational timestamps, impact factors, credentials, user records, article bodies and abstracts are excluded. The import date is not a verification date.

The directory is independent of publisher endorsement. Links can redirect or become unavailable; review them before use. This project does not bypass access controls or redistribute journal content.

## Repository layout

```text
data/feeds.json          Canonical public metadata
docs/CATALOG.md         Generated full journal/status list
dist/feeds.csv          Spreadsheet-friendly export
dist/feeds.opml         Unverified bulk candidate export
dist/status.json        Generated counts and campaign context
scripts/                Import, build and local validation
README.zh-CN.md         Chinese guide
README.ja.md            Japanese guide
```

## Development and quality checks

Requires Node.js 20 or newer. No third-party runtime packages are required.

```bash
git clone https://github.com/AxisLabAI/academic-journal-rss-feeds.git
cd academic-journal-rss-feeds
npm run build
npm test
git diff --exit-code -- dist docs/CATALOG.md
```

CI checks field allowlists, URL syntax, duplicate URLs/IDs, status metadata and reproducible exports. **These are offline consistency checks, not live feed health checks.**

## Roadmap

- [x] Publish a multilingual directory with explicit review states
- [x] Export JSON, CSV and OPML with reproducible builds
- [ ] Verify official journal identity and current RSS/Atom/RDF payloads
- [ ] Repair HTTP-only, redirected and stale URLs
- [ ] Add evidence-backed publisher, ISSN and subject metadata
- [ ] Expand toward 20,000 journals with community contributions

## Contributing

Submit a journal, repair a URL or report a broken feed. Issues and pull requests in English, Chinese and Japanese are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for evidence requirements. For accidentally exposed secrets, do not reproduce them in a public issue; use the repository's private vulnerability reporting if available.

## License

Code: [MIT](LICENSE). Project-contributed factual metadata: [CC0 1.0](DATA-LICENSE.md), to the extent of the maintainers' rights. Publisher feed payloads, journal covers, abstracts and articles are **not** licensed by this repository.

