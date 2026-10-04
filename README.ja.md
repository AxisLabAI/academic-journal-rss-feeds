# 学術誌 RSS フィードのオープンディレクトリ

学術誌の RSS・Atom・RDF 候補 URL と、出版社調査、出典、URL ごとの検査記録を公開しています。

[English](README.md) · [简体中文](README.zh-CN.md) · 日本語

[学術誌一覧](docs/CATALOG.md) · [出版社調査](docs/PUBLISHERS.md) · [検査結果](docs/ENDPOINT-AUDIT.md) · [調査方法](docs/METHODOLOGY.md)

[AxisLabAI](https://github.com/AxisLabAI) が管理し、[ZiNote](https://zinote.app) を起点に始めたプロジェクトです。世界の学術誌を網羅した統計ではなく、出版社による推奨を意味するものでもありません。

## 今回の検査対象

確認日：2026-10-04。過去の候補一覧にある異なる URL をすべて検査しました。世界の学術誌からの無作為標本ではありません。

<!-- research-summary:start -->

| 指標 | 件数 / 状態 |
| --- | ---: |
| 過去の候補 URL | 2024 |
| 今回エントリー付き RSS/Atom/RDF を取得 | 1709 |
| その他の結果・要調査 | 315 |
| 誌名と鮮度の全件確認 | 未完了 |
| 世界の公式 RSS / 独自生成が必要な総数 | 未確定（0 ではない） |

<!-- research-summary:end -->

エントリーを含む XML が返ることと、公式性・誌名の一致・更新の新しさ・継続的な利用可能性は別の確認事項です。根拠の審査が終わるまで、元の一覧は `needs-review` のままです。ネットワーク検査は別の層として記録します。

## 出版社の規模と公式 RSS

[出版社調査](docs/PUBLISHERS.md)は Elsevier、Springer Nature、Taylor & Francis、Wiley、Sage、Oxford、Cambridge、MDPI、Frontiers、IEEE、ACS、ACM の 12 機関・プラットフォームを扱います。規模、RSS の根拠、出典、範囲を記載しています。網羅的な一覧や品質ランキングではありません。

| 公式の根拠 | 確認できたこと | 確認できないこと |
| --- | --- | --- |
| [ScienceDirect ヘルプ](https://www.elsevier.support/sciencedirect/answer/whats-the-difference-between-a-sciencedirect-alert-and-rss-feed) | 雑誌の号とブックシリーズ向け RSS 通知の方針 | 正常に動くフィードの実測総数 |
| [ACS RSS 一覧](https://pubs.acs.org/pages/rss) | 91 誌、それぞれ ASAP と目次の 2 選択肢、計 182 選択肢 | 182 誌、または 91 誌の正常動作 |
| [Frontiers 公式記事](https://www.frontiersin.org/news/2022/06/30/frontiers-social-media-and-rss) | RSS 表示の 125 リンク中、124 が RSS パス、1 が雑誌ホーム | 2022 年の一覧から現在の 228 誌へのカバー率 |
| [STM Global Brief 2021、15 ページ](https://stm-assoc.org/document/stm-global-brief-2021-economics-and-market-size-2/) | 2021 年 9 月の Ulrichsweb データに基づく、48,000 誌超の活動中の査読付き学術誌 | 2026 年の正確な総数や RSS カバー率の分母 |

出版タイトル、プラットフォーム収録誌、現在活動中の誌名では定義が異なるため、単純に合算しません。Nature と BMC は Springer Nature と重複して加算しません。

**独自フィードが必要な学術誌の総数は未確定です。** リンク未発見、403、タイムアウト、古い URL の 404 は、公式 RSS がないという証拠ではありません。誌名の確認、公式リンクの探索、原因調査、利用が認められた代替手段の検討が必要です。不明値は `null` とし、0 や「総数から発見済みフィードを引いた数」で置き換えません。

## RSS を初めて使う方へ

RSS は更新情報を機械が読める形で提供する一覧です。リーダーが新しい論文へのリンクをまとめます。有料の論文全文を無料で読めるようにする仕組みではありません。

1. 指導教員の助言や研究テーマをもとに、関連する少数の学術誌を選びます。
2. 一覧で誌名を探し、検査結果と日付を確認します。
3. 公式サイトで誌名と URL を照合してからリーダーに追加します。
4. 最新記事の日付とリンク先が正しいか確認します。

出版社、学術誌、論文は異なる単位です。出版社の規模は品質を表しません。

## ダウンロードと状態

| ファイル | 内容 | 注意点 |
| --- | --- | --- |
| [JSON](data/feeds.json) / [CSV](dist/feeds.csv) | 全候補と一覧の審査状態 | すべて検証済みではありません |
| [全候補 OPML](dist/feeds.opml) | HTTP と未解決の候補を含む全一覧 | 未確認の一括登録は避けてください |
| [応答した候補の OPML](dist/responsive-candidates.opml) | 今回エントリーを取得した候補 | 公式性と鮮度の確認は別途必要 |
| [検査 CSV](dist/endpoint-audit.csv) / [元 JSON](research/endpoint-audit-2026-10-04.json) | 結果、HTTP、形式、件数、日時 | URL 単位の診断 |
| [調査集計](dist/research-summary.json) | 件数、不明値、ホスト別分類 | 出版社の所有関係ではありません |
| [出版社の根拠](research/publishers-2026-10-04.json) | 出典、日付、単位、範囲、制約 | 出典を確認できる調査データ |

ISSN-L による重複排除は未完了です。URL 数と学術誌数は同じではありません。

| 一覧の状態 | 意味 |
| --- | --- |
| `needs-review` | 同一性・有効性・利用可能性の確認が必要 |
| `active` | 公式誌名の根拠、解析可能なフィード、1 件以上のエントリーを確認 |
| `unavailable` | 現在の問題を審査済み。復旧する可能性あり |
| `deprecated` | 廃止または移行の根拠あり |

URL 検査だけで `active` に変更しません。`last_checked: null` は一覧レベルの審査が未完了という意味です。更新の新しさは別途確認が必要です。[項目と方法](docs/METHODOLOGY.md)。

## 再現と参加

Node.js 20 以降でオフライン生成し、任意のネットワーク検査には Python 3 標準ライブラリを使います。追加パッケージは不要です。

```bash
git clone https://github.com/AxisLabAI/academic-journal-rss-feeds.git
cd academic-journal-rss-feeds
npm run build
npm test
git diff --exit-code -- dist docs README.md README.zh-CN.md README.ja.md
```

CI はオフライン整合性検査のみです。新しいネットワーク検査には `python3 scripts/audit_endpoints.py --date YYYY-MM-DD` を使います。既存の日付の記録は上書きできません。生成は現在 2026-10-04 の記録に固定しています。新しい調査を公開するときに参照を更新し、先に[制約](docs/METHODOLOGY.md)を確認してください。

完了：3 言語の文書、12 機関の公式情報調査、2,024 URL の検査、失敗記録の公開。

未完了：ISSN-L と出版社の正規化、公式性と鮮度の確認、活動中の学術誌の母集団、公式 RSS の欠落確認、地域・独立系の拡充。

英語、中国語、日本語での貢献を歓迎します。[貢献ガイド](CONTRIBUTING.md)に沿って誌名、公式の根拠、公開 URL、日付を提示してください。著作権、規約、アクセス制限、レート制限を守り、論文本文・要旨・個人情報・認証情報を含めないでください。

コードは [MIT](LICENSE)、管理者が権利を持つ事実メタデータは [CC0 1.0](DATA-LICENSE.md)。出版社コンテンツの再配布を許諾するものではありません。
