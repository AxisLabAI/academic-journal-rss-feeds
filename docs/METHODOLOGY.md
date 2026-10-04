# Methodology / 统计方法 / 調査方法

## Scope and units

The 2026-10-04 release combines three independent evidence layers:

1. A purposive review of 12 major publishers/platforms using official pages. These are not an exhaustive population or a ranking.
2. Counts of explicitly advertised RSS options in two official lists, retaining the source date and unit.
3. One bounded HTTP/XML observation of each of 2,024 distinct historical candidate URLs.

The URL set is not a random sample of all journals. It may contain old titles, duplicate journal identities, incorrectly labelled content or redirected feeds. No ISSN-L normalization or active-journal census is complete. Do not infer global coverage from its success rate.

A portfolio count, platform count, journal count, feed-option count and working-URL count are different units. A journal can have several feeds; a platform can host multiple publishers. Corporate parent/brand overlap must be removed before any future census.

## What the global numbers mean

The [STM Global Brief 2021](https://stm-assoc.org/document/stm-global-brief-2021-economics-and-market-size-2/), page 15, cites over 48,000 active peer-reviewed scholarly journals in all languages from Ulrichsweb, accessed 2021-09-19. It is a historical benchmark, not an independently recounted 2026 total.

Current global active-journal total, official-RSS journal total, and self-build-required journal total are **unknown** in this release. Unknown is represented by JSON `null`, not 0. No publisher totals are summed into an incompatible global denominator.

The earlier 2,006 / 20,000 campaign milestone is not a research result and is excluded from current statistical artifacts. The app's displayed count is also a separate product dataset.

## Official-list observations

- ACS: rendered official RSS table, 91 unique journal-name rows; each offers ASAP and TOC, so there are 182 options. Names are saved in `research/acs-rss-journals.json`. This is an observed listing, not 182 unique journals or verified endpoint availability. The HTML-only extractor found zero anchors; that extraction failure is explicitly not interpreted as absence of RSS.
- Frontiers: official article dated 2022-06-30; 125 distinct links labelled RSS were extracted. 124 have paths ending in `/rss`. The Electronics link points to `https://www.frontiersin.org/journals/electronics`, not an RSS path. Do not invent a corrected URL or use 228 minus 124 as the number requiring self-build.
- Original link observations and page-body SHA-256 hashes are retained in `research/official-rss-lists.json`. Hashes identify retrieved bytes; remote pages can change. We do not republish complete publisher pages.
- Policy evidence describes advertised functionality, not a numerical census. Historical policy evidence is labelled separately.

## Endpoint audit: 2026-10-04

Input: exact bytes of `data/feeds.json`; their SHA-256 appears in the audit JSON. All 2,024 IDs have one outcome.

The audit uses Python standard-library HTTP and XML handling, 12 workers, a per-host lock, a 0.15 second post-request pause, an 8 second socket timeout, at most four request hops, and a 2 MiB response limit. Host buckets are interleaved. The public User-Agent identifies this repository. Each redirect is checked for HTTP(S), missing credentials and publicly resolving destinations. TLS verification remains enabled.

A 429 stops subsequent requests to that host. No credentialed requests, CAPTCHA solving, proxy rotation or access-control bypass is performed. The script is a one-off observation tool, not permission to crawl; operators must review applicable site policies and rate limits before reuse.

The check accepts RSS, Atom or RDF root names and counts item/entry elements. It is not full schema validation. DTD/entity declarations are rejected; this may exclude otherwise valid XML. Bodies are not persisted. Stored fields include URL, observation start time, outcome, HTTP status, format, entry count, feed-level title and final response URL when available.

| Outcome | Interpretation |
| --- | --- |
| `feed-with-entries` | Recognizable feed XML and at least one item/entry in this response |
| `empty-feed` | Recognizable feed root but no entries |
| `access-blocked` | HTTP 401 or 403; no conclusion about feed existence |
| `rate-limited` | HTTP 429; stop requesting that host |
| `host-rate-limited-not-attempted` | Not attempted because that host was already rate-limited |
| `not-found` | This candidate URL returned 404 or 410; a replacement may exist |
| `http-error` | Another HTTP error |
| `timeout` | Socket/request timeout |
| `tls-or-network-error` | Transport/DNS/TLS failure reported as URLError |
| `network-or-safety-error` | DNS, public-address guard or another local request error; deliberately not interpreted as absence |
| `not-feed-xml` | Unparseable XML or an unrecognized root |
| `html-or-disallowed-doctype` | DOCTYPE/entity rejection, potentially HTML or otherwise excluded XML |
| `oversize` | Exceeds the configured byte limit |
| `redirect-limit` | Exceeds the request-hop limit |

The result is 1,709 responses with feed entries and 315 other outcomes. **No journal identity, official origin, article-date freshness, full-text availability, uptime, or publisher-wide coverage is established by that split.** Network location, local DNS/proxy behavior and time can change results. Failures are observations from this environment, not permanent service verdicts.

Host-based sample groups are exact hostname matches from a published mapping; they are neither complete publisher portfolios nor ownership determinations.

## When is a custom feed justified?

Use these review states for a future journal-level gap study:

| State | Required evidence / next action |
| --- | --- |
| Official feed found | Official journal page links the exact endpoint; verify content and identity |
| Discovery unresolved | Search the official journal home, issue/TOC page and official help; retain unknown |
| Access or transport unresolved | Diagnose conservatively; do not bypass restrictions |
| Official native feed absent or retired | Record explicit publisher evidence or documented journal-level review; check permitted alternatives |
| Custom source approved | Record permitted API/metadata source, scope, license/terms and refresh limits before implementation |

No completed journal-level “custom source approved” census exists in this release. We therefore report the number requiring self-build as unknown, not zero. A custom feed is also not the only fallback: official email alerts or an institution's library service may suffice.

## Data contract and reproducibility

`data/feeds.json` is the canonical candidate list. Fields:

| Field | Meaning |
| --- | --- |
| `id` | First 16 hexadecimal characters of the feed URL's SHA-256 |
| `name` | Historical source title, pending identity normalization |
| `feed_url` | Public candidate URL |
| `host` | Parsed hostname, not a verified publisher |
| `status` | Registry review state; separate from network outcome |
| `last_checked` | Completed registry-review date or null |
| `provenance` | Source family: zinote-historical-url-snapshot |

`npm run build` regenerates exports, publisher notes, endpoint lists and README summary blocks from the pinned source files. `npm test` checks IDs, counts, scopes, unknown values, XML export counts and documentation consistency without network access.

For another date run `python3 scripts/audit_endpoints.py --date YYYY-MM-DD`. It refuses to replace an existing snapshot. Update the explicitly pinned audit in the builder and tests when publishing new research. Remote responses are not deterministic; rebuilding from a saved audit is.

`collect_official_lists.py` is the initial link-extraction recipe. Re-running it writes a dated new file and does not overwrite the published evidence. The ACS rendered-table transcription remains a separately documented observation.

## 中文口径摘要

本次回答三个不同问题：出版社官网如何描述规模、官方在哪里列出 RSS、候选地址今天返回什么。三者不能混为一谈。

- 2,024 是不同候选 URL，不是全球期刊总数，也未完成刊名去重。
- 1,709 是本次返回带条目订阅 XML 的地址，不是已完成官方身份与时效核验的期刊数。
- 315 条其他结果需要排查，不能等同于 315 本无官方 RSS，更不能等同于需要自建。
- 全球当前总量、官方 RSS 总量和需自建总量尚未可靠定量，均标记未知。
- RSS 提供更新，不保证全文、即时推送或永久可用。目录开放不等于出版社内容可任意再分发。

## 日本語の要点

出版社の公表規模、公式ページの RSS 記載、候補 URL の今回の応答は別の情報です。2,024 は URL 数、1,709 はエントリー付き XML が返った数、315 はその他の結果です。誌名の同一性・公式性・鮮度を全件確認した数ではありません。現在の世界総数と独自フィードが必要な総数は未確定です。失敗した URL 数を独自生成が必要な学術誌数に置き換えません。
