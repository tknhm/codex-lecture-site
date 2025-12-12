# codex-lecture-site

- GitHub Pages でホストしている「さかたの旅ノート」パーソナルサイトです。  
- 上部ヒーローではプロフィール文とスナップショット風のリストを2カラムで紹介し、下部に旅写真を横に流す「写真ホイール」を置いています。

- `static/styles/main.css` / `static/scripts/main.js` でレイアウト・色調・カルーセル挙動を外だししており、`index.html` は構造とプロフィール文を保持します。
- `static/favicon.svg` を favicon として `index.html` から参照しています。
- `photos/gallery.json` にフォルダごとのタイトル・画像・コメント情報を並べ、`photos/<タイトル>/photo.svg` + `comment.txt` のペアからカルーセルのボタンと詳細パネルを動的に構築します。
- 新しい旅写真を追加するには、`photos/` 配下にフォルダを作り `photo.svg` と `comment.txt` を入れ、`photos/gallery.json` にエントリを追加するだけです（画像はJPEG/PNGにもできます）。
- ローカルで確認するには `python -m http.server` 等で公開し、`index.html` にアクセスしてカルーセルとコメントが読み込まれるか見てください。
  - 例: `python -m http.server 8000` → `http://localhost:8000/`

## 構成

- `index.html`: ヒーロー（左：文章・バッジ・導線 / 右：スナップショット）＋ 下段の写真ホイール
- `static/styles/main.css`: 全体の見た目（カード、バッジ、余白、写真ホイール）
  - 右側の`.profile-panel`は左の名前ブロック下に揃えるため上余白を調整しています。
- `static/scripts/main.js`: 写真ホイールの生成・選択状態・自動スクロール（動きを減らす設定にも対応）
- `photos/`: 旅写真とコメント（`photos/gallery.json` が入口）
  - サムネイルと詳細表示は同じ縦横比になるようにしています。

## プロフィールを編集する場所

- ヒーロー左の文章・バッジ・ボタン: `index.html`
- アイコン（かわいいイラスト）: `index.html` の `.avatar`（SVG）
- Instagramリンク（名前の横）: `index.html` の `.name-row`
- 右側のスナップショットリスト: `index.html` の `.profile-list`
