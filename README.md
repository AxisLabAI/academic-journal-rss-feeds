# Academic journal RSS feeds

An open directory of scholarly journal RSS, Atom and RDF candidates, with publisher research, source citations and reproducible endpoint observations.

English · [简体中文](README.zh-CN.md) · [日本語](README.ja.md)

[Journal list](docs/CATALOG.md) · [Publisher research](docs/PUBLISHERS.md) · [Endpoint results](docs/ENDPOINT-AUDIT.md) · [Methodology](docs/METHODOLOGY.md)

Maintained by [AxisLabAI](https://github.com/AxisLabAI), initiated through [ZiNote](https://zinote.app). This is a discovery directory, not a complete global census or a publisher-endorsed service.

## What we measured

Snapshot: 2026-10-04. We checked every distinct URL in a historical ZiNote candidate registry.

<!-- research-summary:start -->

| Metric | Count / status |
| --- | ---: |
| Historical candidate URLs | 2024 |
| Feed XML with entries in this check | 1709 |
| Other outcomes requiring investigation | 315 |
| Full identity and freshness review | Not completed |
| Global official RSS / self-build-required journals | Unknown, not zero |

<!-- research-summary:end -->

A recognizable feed containing entries is evidence of a response, not proof of official origin, correct journal identity, recent content or continued availability. Registry entries remain `needs-review` until their evidence is reviewed. The dated network observations are a separate layer.

## Major publishers and official RSS

The [12-publisher research table](docs/PUBLISHERS.md) covers Elsevier, Springer Nature, Taylor & Francis, Wiley, Sage, Oxford, Cambridge, MDPI, Frontiers, IEEE, ACS and ACM. Each row includes reported scale, official RSS evidence, scope and links. This is a representative starting set, not a ranking or an exhaustive list.

| Primary evidence | Finding | Limitation |
| --- | --- | --- |
| [ScienceDirect support](https://www.elsevier.support/sciencedirect/answer/whats-the-difference-between-a-sciencedirect-alert-and-rss-feed) | Journal-issue and book-series RSS alerts are documented across the platform | Policy, not a measured healthy-feed count |
| [ACS RSS table](https://pubs.acs.org/pages/rss) | 91 named titles, each with ASAP and TOC options, 182 options total | Not 182 journals or 91 verified healthy feeds |
| [Frontiers official article](https://www.frontiersin.org/news/2022/06/30/frontiers-social-media-and-rss) | 125 RSS-labelled links: 124 RSS paths and 1 journal-homepage link | A 2022 article, not current coverage of all 228 directory titles |
| [STM Global Brief 2021](https://stm-assoc.org/document/stm-global-brief-2021-economics-and-market-size-2/) | Over 48,000 active peer-reviewed scholarly journals; p. 15 cites September 2021 Ulrichsweb data | Historical benchmark, not a 2026 census or an RSS denominator |

Publisher portfolios, platform collections and active journals are different populations. Do not sum incompatible figures. Nature and BMC are not added again on top of Springer Nature.

**How many journals need a custom feed? Not yet established.** A missing link, 403, timeout or old URL returning 404 does not prove that no official feed exists. Journal-level identity, official-feed discovery, failure diagnosis and permitted alternative sources must be reviewed. Unknown values are `null`, not zero and not “journal total minus found feeds”.

## New to RSS?

RSS is a machine-readable update list. A reader checks it and brings new article links into one place. It does not unlock paywalled full text.

1. Start with a few journals related to your project, guided by your supervisor or relevant papers.
2. Find the journal in the catalog and inspect the dated endpoint result.
3. Compare the candidate URL with the official journal page before adding it to a reader.
4. Confirm that article dates are recent and links lead to the correct journal.

Publishers, journals and articles are different units. Publisher size is not a quality score. [Chinese beginner guide](docs/BEGINNERS.zh-CN.md).

## Downloads and review states

| Download | Contents | Intended use |
| --- | --- | --- |
| [JSON](data/feeds.json) / [CSV](dist/feeds.csv) | All historical candidates and registry states | Canonical discovery data |
| [Full OPML](dist/feeds.opml) | All candidates, including unresolved and HTTP URLs | Discovery, not unchecked bulk subscription |
| [Responsive candidates OPML](dist/responsive-candidates.opml) | Candidates returning entries during this check | Still needs identity and freshness review |
| [Audit CSV](dist/endpoint-audit.csv) / [raw JSON](research/endpoint-audit-2026-10-04.json) | Outcomes, HTTP codes, formats, item counts and timestamps | Per-URL diagnosis |
| [Research summary](dist/research-summary.json) | Counts, unknowns and host-group observations | Host groups are not ownership or coverage |
| [Publisher evidence](research/publishers-2026-10-04.json) | Sources, dates, units and limitations | Source-backed research |

ISSN-L deduplication is not complete, so URL counts are not unique journal counts.

| Registry state | Meaning |
| --- | --- |
| `needs-review` | Identity, validity or availability needs review |
| `active` | Official journal identity, parseable feed and at least one entry documented on the date |
| `unavailable` | Reviewed current failure; may be recoverable |
| `deprecated` | Reviewed retirement or replacement evidence |

`feed-with-entries` is a network observation, not an automatic `active` transition. Registry `last_checked: null` means no completed registry-level review, not that no request occurred. Freshness needs a separate check. [Schema and full method](docs/METHODOLOGY.md).

## Reproduce and contribute

Node.js 20+ builds offline artifacts; the optional network check uses the Python 3 standard library. No package installation is required.

```bash
git clone https://github.com/AxisLabAI/academic-journal-rss-feeds.git
cd academic-journal-rss-feeds
npm run build
npm test
git diff --exit-code -- dist docs README.md README.zh-CN.md README.ja.md
```

CI checks consistency, not live publisher availability. For a new network audit use `python3 scripts/audit_endpoints.py --date YYYY-MM-DD`; existing snapshots cannot be overwritten. The build pins the published 2026-10-04 snapshot. Update that reference deliberately for a new release and read [request limits](docs/METHODOLOGY.md) first.

Completed: three-language documentation, official-source research for 12 publishers/platforms, a complete 2,024-URL check and publication of failed observations.

Remaining: ISSN-L normalization, official identity and freshness review, a dated active-journal denominator, confirmed native-feed gaps, and regional/independent publisher coverage.

English, Chinese and Japanese contributions are welcome. Submit a journal, official evidence page, public URL and date. See [CONTRIBUTING.md](CONTRIBUTING.md). Respect terms, copyright, access controls and rate limits. Never submit article bodies, abstracts, user data or credentials.

Code: [MIT](LICENSE). Maintainer-contributed factual metadata: [CC0 1.0](DATA-LICENSE.md), to the extent of their rights. Publisher content is not licensed by this repository.
