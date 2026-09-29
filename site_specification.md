# よしむら 公式タレントWebサイト 仕様書 v1.2

**デザイン方針**: 大手公式タレントページ・ポータル標準を踏襲した、公式感と洗練されたタイポグラフィを備えたタレントポータルです。

---

## 1. 基本情報

* **サイト名**: よしむら データマネジメント系VTuber 公式サイト
* **対象タレント**: よしむら
* **肩書**: データマネジメント系VTuber / DATA MANAGEMENT VTUBER
* **キャッチコピー**: データの迷路を照らし、未来を拓く。データマネジメントと生成AIガバナンスの案内人。
* **アイデンティティ**: 理論倒れになりがちなDMBOKの体系や生成AIガバナンスの考え方を、誰もが現場で実践できる生きた知識として届けるVTuber。

---

## 2. ページ構成

1. **Header (固定ナビゲーション)**:
   * ブランドシンボル: キャラクター顔アイコン（丸型アバター）
   * ブランド表記: よしむら / データマネジメント系Vtuber
   * グローバルナビ: TOP / VIDEOS / NOTE / PROFILE / WORKS / CONTACT
   * 公式SNSリンク: YouTube / X
   * モバイル対応: ハンバーガーメニュー展開

2. **Talent Top (Hero Stage)**:
   * 左カラム:
     - ブランドラベル: データマネジメント系Vtuber
     - メインネーム: よしむら
     - キャッチコピー & プロフィールリード文
     - 公式アクションボタン群: YouTube / X / note / Kindle書籍 / 技術書典 / お問い合わせ (CONTACTへスムーススクロール)
   * 右カラム:
     - 全身立ち絵（透過笑顔モデル）を約2倍サイズ（高さ1420px基準・頭部基準アンカー）に拡大配置。洗練されたダイナミックな存在感を演出し、左側テキストエリアや背景と美しく重なり合う迫力あるステージレイアウト。

3. **VIDEOS (おすすめ動画)**:
   * 大見出し: RECOMMENDED VIDEOS
   * 公式チャンネルへの誘導リンク: VIEW ALL
   * YouTube公式配信アーカイブの埋め込みプレーヤー（2カラムグリッド）:
     - データマネジメント試験対策動画 (PDe8YS_5bCo)
     - データマネジメントゆっくり解説 (QCuygkRZctc)
     - データ界隈LT祭 アーカイブプレイリスト (IZV9Q54KHg8)
     - データに関する雑談配信 (vWed26B3rgM)

4. **NOTE (連載マガジン・技術記事)**:
   * 大見出し: TECHNICAL ARTICLES NOTE
   * 公式noteへの誘導リンク: VIEW ALL
   * YouTube動画カードと共通の2×2リッチカードレイアウト:
     1. 生成AIガバナンスとマネジメントの解説 (マガジンURL: `https://note.com/datamanagement/m/mbdf1d8650ad3`)
     2. データマネジメント知識体系ガイド DMBOK 要約解説 (マガジンURL: `https://note.com/datamanagement/m/m3f27a63bfe25`)
     3. データ界隈LT祭 立ち上げ日記 (マガジンURL: `https://note.com/datamanagement/m/m6822d4486543`)
     4. 技術同人誌 執筆出展日記 (マガジンURL: `https://note.com/datamanagement/m/m95da708ecc66`)

5. **PROFILE (公式タレントデータ)**:
   * 大見出し: OFFICIAL DATA PROFILE
   * 2カラム公式データシート（端正な罫線テーブル）:
     - 専門領域: データマネジメント DMBOK / 生成AIガバナンス
     - 得意分野: データアーキテクチャ / ガバナンス整備 / 組織チェンジマネジメント
     - 活動テーマ: 難しいことをエンタメ化してわかりやすく
     - 主催コミュニティ: データ界隈LT祭
     - 著書・出版: 今すぐわかるデータマネジメントの進め方 Kindle電子書籍 発売中
     - チャームポイント: 知的なメガネ & クラシカルなコルセットブラウス
     - モットー: 理論だけで終わらせない 実務で動くデータ活用

5. **CREATIONS (作品リスト)**:
   * 大見出し: 作品リスト
   * 2×2の均整のとれたカードレイアウト（タグやステータスを排したミニマルで端正なデザイン）:
     1. 電子書籍 Kindleストア配信中 (Kindleストア発売中)
     2. 技術書典 出典技術同人誌一覧 (技術書典公式サークル)
     3. データマネジメント解説note (公式連載)
     4. カクヨム データ系異世界転生ライトノベル (カクヨム連載中)

6. **WORK (お仕事実績・コミュニティ)**:
   * 大見出し: WORK
   * 2×2の均整のとれたカードレイアウト（作品リストと共通のクリーンなカードデザイン）:
     1. バックオフィスDXカンファレンス 基調講演 (ワークフロー総研主催)
     2. ウイングアーク1st データのじかん 連載 (AI事務員宮西さん データ組織立ち上げ編)
     3. データ界隈100人カイギ キュレーター (TECH PLAY掲載 キュレーター登壇)
     4. データ界隈LT祭 (主催コミュニティをWORKに統合)

7. **CONTACT (お問い合わせ窓口)**:
   * 大見出し: BUSINESS & INQUIRY CONTACT
   * ガイドラインを排除し、登壇・研修・執筆・業務相談のための専用ビジネス窓口として集約。
   * 公式お問い合わせフォーム (`https://docs.google.com/forms/d/e/1FAIpQLSeAvsykZJ9tONcwfqtPrY5zEAvymHnHPpyKM9V8dSL3KHdfGw/viewform?usp=dialog`) への遷移ボタンおよび「X Twitter DMで相談」ボタンを配置。

8. **Footer (フッター)**:
   * ページトップボタン、SNSリンク、サイトマップ、コピーライト

---

## 3. 表記・デザイン運用ルール

1. **括弧文字の完全排除**:
   * （ ）・「 」・『 』の全角・半角括弧は使用せず、スペースやタイポグラフィの階層によって端正に表現する。
2. **脱AI感の徹底**:
   * 安直な絵文字の多用、意味のないドット・星・波線、チープなピル型ボタンを排除。
   * プロ仕様のフォントスタック（欧文: Montserrat / Brandon Grotesque、和文: 游ゴシック）を採用。
3. **シングルアバター運用の徹底**:
   * 不要なポーズ切り替えUIは全廃し、ブランドの核となる笑顔モデルを基軸とする。

---

## 4. 公式リンク一覧

* **YouTube**: https://www.youtube.com/@yoshimura_datam
* **X Twitter**: https://x.com/yoshimura_datam
* **note**: https://note.com/datamanagement
* **Kindle書籍**: https://link.amazon/B0bBdcdbY
* **データ界隈LT祭**: https://ltfes.datayokocho.info/
* **技術書典**: https://techbookfest.org/organization/9FyhHFkrJzNvPP5UwST4EZ
* **バックオフィスDXカンファレンス**: https://www.atled.jp/wfl/article/69383/
* **データ界隈100人カイギ**: https://100ninkaigi.com/area/datakaiwai
* **データのじかん 連載**: https://data.wingarc.com/tag/ai-clerk-miyanishi-data-organisation
* **カクヨム Web小説**: https://kakuyomu.jp/works/16818622175370446958/episodes/16818622175375072192
