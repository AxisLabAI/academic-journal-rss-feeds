# 学术期刊 RSS 开源目录

整理学术期刊 RSS、Atom、RDF 候选地址，同时公开出版社调查、数据来源和逐条检测记录。

[English](README.md) · 简体中文 · [日本語](README.ja.md)

[期刊清单](docs/CATALOG.md) · [出版社调查](docs/PUBLISHERS.md) · [逐条检测](docs/ENDPOINT-AUDIT.md) · [统计方法](docs/METHODOLOGY.md) · [新手指南](docs/BEGINNERS.zh-CN.md)

由 [AxisLabAI](https://github.com/AxisLabAI) 维护，起步于 [ZiNote](https://zinote.app)。我们希望让研究者更容易找到期刊更新入口，并看懂每条记录的证据。不声称世界最全，也不代表出版社背书。

## 这次实际统计了什么

核查日期：2026-10-04。检测范围是 ZiNote 历史候选清单中的不同 URL，不是全球期刊的随机样本。

<!-- research-summary:start -->

| 指标 | 数量 / 状态 |
| --- | ---: |
| 历史候选地址 | 2024 |
| 本次返回带条目的 RSS/Atom/RDF | 1709 |
| 其他结果，需要排查 | 315 |
| 完整身份与时效人工核验 | 尚未完成 |
| 全球官方 RSS / 需自建期刊总数 | 未知，不是 0 |

<!-- research-summary:end -->

返回带条目的 XML，只能说明该地址本次返回了可识别的订阅内容。它不能证明期刊名称匹配、来自官方、内容够新或以后一直可用。完成证据审查前，主清单仍保留 `needs-review`。联网检测另行记录。

## 主流出版社有多少本期刊？官方 RSS 有多少？

本次选取 Elsevier、Springer Nature、Taylor & Francis、Wiley、Sage、Oxford、Cambridge、MDPI、Frontiers、IEEE、ACS、ACM 共 12 家常见机构或平台。完整规模、RSS 证据、来源链接和口径差异见[出版社调查表](docs/PUBLISHERS.md)。这不是完整名单，也不是质量排名。

| 可核实的例子 | 能说明什么 | 不能说明什么 |
| --- | --- | --- |
| [ScienceDirect 官方帮助](https://www.elsevier.support/sciencedirect/answer/whats-the-difference-between-a-sciencedirect-alert-and-rss-feed) | 平台说明所有期刊期次和丛书提醒支持 RSS | 不等于逐刊测出了全部可用地址 |
| [ACS 官方 RSS 表](https://pubs.acs.org/pages/rss) | 91 个刊名，每刊新文章、目录两类选项，共 182 个选项 | 不是 182 本期刊，也不是 91 本已验证可用 |
| [Frontiers 官方文章](https://www.frontiersin.org/news/2022/06/30/frontiers-social-media-and-rss) | 125 个 RSS 标签链接，其中 124 个是 RSS 路径，1 个指向期刊主页 | 不能拿 2022 年清单代表当前 228 个目录条目的覆盖率 |
| [STM 2021 报告，第 15 页](https://stm-assoc.org/document/stm-global-brief-2021-economics-and-market-size-2/) | 引用 2021 年 9 月 Ulrichsweb 数据：全球超过 4.8 万本活跃同行评审学术期刊 | 不是 2026 年精确总数，也不是 RSS 覆盖率的分母 |

出版社旗下期刊、平台收录期刊和当前活跃期刊不是同一口径。Nature、BMC 已属于 Springer Nature，不能重复相加。目录是否含新刊、存档等问题保留在来源备注中。

**需要自建的有多少？目前尚不能可靠定量。** 没找到入口、403、超时、旧地址 404，都不等于该期刊没有官方 RSS。需要逐刊确认身份、查找官方入口、排查失败原因，再评估允许使用的替代来源。仓库用 `null` 表示未知，不用 0 代替，也不以“期刊总数减已发现 RSS 数”推算。

## 第一次使用 RSS

RSS 可以理解为期刊提供的更新目录。阅读器定期查看目录，把新文章链接集中到一起。它不能让收费论文自动变成免费全文。

1. 根据课题、导师建议或近期读过的论文，先选少量相关期刊。
2. 在清单中找刊名，对照检测日期和结果。
3. 回到期刊官网确认地址与身份，再添加到阅读器。
4. 检查最近文章的日期、标题及跳转链接是否正确。

出版社是出版机构，期刊是刊物，论文是具体文章。出版社规模不等于期刊质量。[阅读新手指南](docs/BEGINNERS.zh-CN.md)。

## 下载与状态

| 文件 | 包含内容 | 使用边界 |
| --- | --- | --- |
| [JSON](data/feeds.json) / [CSV](dist/feeds.csv) | 全部历史候选记录及主清单状态 | 发现入口，不代表全部验证通过 |
| [完整 OPML](dist/feeds.opml) | 全部候选，含待排查和 HTTP 地址 | 不建议未经检查整批订阅 |
| [本次可读取候选 OPML](dist/responsive-candidates.opml) | 本次返回条目的候选地址 | 仍需确认身份与内容时效 |
| [检测 CSV](dist/endpoint-audit.csv) / [原始 JSON](research/endpoint-audit-2026-10-04.json) | 结果、HTTP 状态、格式、条目数、日期 | 逐条诊断 |
| [统计 JSON](dist/research-summary.json) | 计数、未知项、候选主机分组 | 主机分组不等于出版社所有权 |
| [出版社证据 JSON](research/publishers-2026-10-04.json) | 来源、日期、单位、范围与限制 | 可复核的统计依据 |

尚未完成 ISSN-L 去重，因此 URL 数不能称为唯一期刊数。

| 主清单状态 | 含义 |
| --- | --- |
| `needs-review` | 身份、有效性或可用性待核验 |
| `active` | 已记录官方期刊身份证据、可解析 feed 和至少一条内容 |
| `unavailable` | 已审查的当前不可用情况，可能可修复 |
| `deprecated` | 有停用或替代证据 |

地址检测不会自动把记录改成 `active`。`last_checked: null` 表示尚未完成主清单级别审查，不表示没发过网络请求。时效仍需另查。[字段和完整方法](docs/METHODOLOGY.md)。

## 复现与协作

需要 Node.js 20+；可选联网检测使用 Python 3 标准库，无需安装依赖。

```bash
git clone https://github.com/AxisLabAI/academic-journal-rss-feeds.git
cd academic-journal-rss-feeds
npm run build
npm test
git diff --exit-code -- dist docs README.md README.zh-CN.md README.ja.md
```

CI 只做离线一致性检查。新检测命令为 `python3 scripts/audit_endpoints.py --date YYYY-MM-DD`，会拒绝覆盖已有日期文件。构建当前固定使用 2026-10-04 快照，发布新调查时再明确更新。先阅读[统计与请求限制](docs/METHODOLOGY.md)。

已完成：三语文档、12 家机构官方来源调查、2,024 条地址检测、失败记录公开。

待完成：ISSN-L 身份归一、逐刊官方性与时效核验、当前活跃期刊分母、原生 RSS 缺口确认，以及更多地区性和独立期刊。

欢迎提交刊名、官方证据页、公开订阅 URL 和日期，详见[贡献说明](CONTRIBUTING.md)。请遵守版权、网站条款和限速要求，不绕过登录或反爬限制，不提交全文、摘要、用户数据与密钥。

代码采用 [MIT](LICENSE)。维护者有权贡献的事实元数据采用 [CC0 1.0](DATA-LICENSE.md)。出版社内容不因此获得重新分发许可。
