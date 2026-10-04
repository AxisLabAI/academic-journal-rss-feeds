# Contributing / 贡献 / コントリビューション

Contributions in English, Chinese or Japanese are welcome.

## Add or repair a feed

1. Search [the catalog](docs/CATALOG.md) for duplicates.
2. Locate the journal's official website and its advertised RSS, Atom or RDF URL. Prefer HTTPS; never silently rewrite an HTTP URL to HTTPS without checking it.
3. Open an issue with the journal name, candidate URL, publisher evidence page and observation date. Do not include cookies, credentials, personal details, downloaded XML or article bodies.
4. To propose a data change, edit `data/feeds.json`. Keep `needs-review` unless the verification evidence has been reviewed.
5. Run `npm run build && npm test` and include generated artifacts in the pull request.

## Verification evidence

An `active` transition requires: public URL and final redirect destination, official journal identity evidence, a recognizable RSS/Atom/RDF root, at least one item/entry, and a UTC observation date. Record evidence in the PR and set `last_checked`. Verification is point-in-time, not an uptime guarantee.

A timeout or 403 is not proof that a journal has discontinued its feed. Explain the failure and leave it under review unless stronger evidence supports `unavailable` or `deprecated`. Never bypass authentication, CAPTCHAs, rate limits or publisher restrictions.

## 中文

欢迎补充期刊、修复链接、报告失效。提交期刊名称、官方来源页、订阅地址和检查日期；不要提交论文全文、账号信息或密钥。新记录默认为待核验，只有确认期刊身份、XML 格式以及至少一条内容后，才可以申请改为已验证。修改后运行构建与测试。

## 日本語

学術誌の追加、リンク修正、不具合報告を歓迎します。誌名、公式の根拠ページ、フィード URL、確認日を提示してください。論文本文、認証情報、個人情報は含めないでください。新規登録は未検証として扱い、誌名の一致、XML 形式、1 件以上のエントリーを確認してから検証済みへの変更を申請してください。

