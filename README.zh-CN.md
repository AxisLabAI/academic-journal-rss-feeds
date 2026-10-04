# 学术期刊 RSS 订阅源开放目录

**面向研究者、RSS 阅读器与科研工具的 RSS / Atom / RDF 期刊订阅源候选目录。**

[English](README.md) · 简体中文 · [日本語](README.ja.md)

[完整期刊列表](docs/CATALOG.md) · [JSON](data/feeds.json) · [CSV](dist/feeds.csv) · [OPML](dist/feeds.opml) · [状态统计](dist/status.json) · [贡献指南](CONTRIBUTING.md)

由 [AxisLabAI](https://github.com/AxisLabAI) 维护，源于 [ZiNote](https://zinote.app) 的期刊发现工作。我们的目标是建设一个覆盖广、可追溯、由社区共同维护的学术期刊订阅源目录。“世界最全”是长期愿景，不是已经验证的排名或全覆盖承诺。

## 当前进度

统计说明日期：**2026-10-04**。

| 指标 | 数量 | 口径 |
| --- | ---: | --- |
| Day4 阶段里程碑 | 2,006 / 20,000，10.03% | 维护者提供的项目进度，不等于当前可用源数量 |
| 历史候选记录 | 2,024 | 导入历史快照中的不同订阅 URL |
| 待核验 | 2,024 | 期刊身份、格式及实时可用性尚待核实 |
| 本仓库本次验证通过 | 0 | 首次发布不声称完成在线验证 |
| HTTPS / HTTP | 1,963 / 61 | 保留 HTTP 候选以供修复，不擅自改写协议 |

App 实时目录、历史快照和阶段里程碑属于不同口径。App 中显示的期刊数不能直接等同于公开且验证通过的 RSS 地址数量。准确的机器可读统计见 [status.json](dist/status.json)。

## 期刊列表

[完整列表](docs/CATALOG.md) 包含每条记录的期刊名称、订阅 URL、域名、状态和最后检查日期。历史记录可能包含分类不准确、非期刊专属或已失效地址；收录不代表官方身份或可用性已确认。

| 候选域名 | 记录数 | 状态 |
| --- | ---: | --- |
| rss.sciencedirect.com | 641 | 待核验 |
| www.nature.com | 144 | 待核验 |
| www.frontiersin.org | 94 | 待核验 |
| 其他域名 | 1,145 | 待核验 |

域名数不等于出版商数；本仓库不分发影响因子、期刊分区或排行榜数据。

## 如何使用

研究者可以在列表中找到期刊，确认状态后，把 URL 添加到自己的 RSS 阅读器。发现错误或失效时，欢迎提交 Issue。

[OPML 文件](dist/feeds.opml) 包含全部未核验候选及 HTTP 地址，适合批量研究，不是“全部可用”的推荐订阅包。建议先挑选并检查需要的源。

开发者可下载标准 JSON：

```bash
curl -fL https://raw.githubusercontent.com/AxisLabAI/academic-journal-rss-feeds/main/data/feeds.json -o feeds.json
```

获取后按 `name` 搜索，使用 `feed_url`，并检查 `status` 与 `last_checked`。不要默认高并发抓取全部地址；遵守出版商条款、缓存要求和限流，并自行检查服务器端访问的目标和重定向。

## 字段与状态

| 字段 | 含义 |
| --- | --- |
| `id` | 标准化 URL 的 SHA-256 前 16 位；URL 变化时 ID 变化 |
| `name` | 来源中的期刊名称，可能需要规范化 |
| `feed_url` | 候选 RSS / Atom / RDF 地址，不凭后缀推断格式 |
| `host` | URL 域名，不等于已确认的出版商 |
| `status` | 明确的核验状态 |
| `last_checked` | UTC 核验日期；空值表示没有当前证据 |
| `provenance` | 数据来源标识 |

| 状态 | 含义 |
| --- | --- |
| `needs-review` | 已发现或导入，身份、格式或可用性待核验 |
| `active` | 已确认官方期刊身份、有效 RSS/Atom/RDF 和至少一条内容；仅代表检查当时 |
| `unavailable` | 经审查暂不可用，可能恢复 |
| `deprecated` | 经审查已废弃或被替代 |

HTTP 200 或历史抓取时间不能替代验证。本次发布没有已验证记录，也不保证持续可用。

## 数据来源与边界

初始数据仅提取历史 ZiNote 快照中的期刊名称和公开订阅地址。不包含数据库内部 ID、运行时间记录、用户信息、密钥、影响因子、论文全文或摘要。导入日期不是核验日期；收录也不表示获得出版商背书。

## 维护与贡献

`data/feeds.json` 是唯一数据源；`docs/CATALOG.md`、CSV、OPML 和统计文件由脚本生成。英文入口为 README.md，日文入口为 README.ja.md。

需要 Node.js 20 或更新版本，无第三方运行时依赖：

```bash
npm run build
npm test
git diff --exit-code -- dist docs/CATALOG.md
```

CI 检查字段白名单、URL 格式、重复记录、状态和可复现构建，不代表在线健康检查。欢迎用中文、英文或日文提交期刊、修复链接、报告失效；核验要求见[贡献指南](CONTRIBUTING.md)。

路线图：公开目录与多格式导出已完成；接下来核验官方身份和内容、修复旧链接、补充有证据支持的 ISSN/学科/出版商信息，向 20,000 本期刊的目标推进。

## 许可

代码使用 [MIT](LICENSE)；项目有权贡献的事实性元数据使用 [CC0 1.0](DATA-LICENSE.md)。不包含出版商订阅内容、期刊封面、摘要与论文全文的授权。

