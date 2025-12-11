# codex-lecture-site

GitHub Pages でホストしている「さかたの旅ノート」パーソナルサイトです。  
この場所にはプロフィール/Instagramリンクと、旅のスナップを横にくるくる回す「写真ホイール」を置いています。

- `styles.css` / `script.js` でレイアウト・色調・カルーセル挙動を外だししており、`index.html` は構造とヒーロー文だけを保持します。
- `photos/gallery.json` にフォルダごとのタイトル・画像・コメント情報を並べ、`photos/<タイトル>/photo.svg` + `comment.txt` のペアからカルーセルのボタンと詳細パネルを動的に構築します。
- 新しい旅写真を追加するには、`photos/` 配下にフォルダを作り `photo.svg` と `comment.txt` を入れ、`photos/gallery.json` にエントリを追加するだけです（画像はJPEG/PNGにもできます）。
- ローカルで確認するには `python -m http.server` 等で公開し、`index.html` にアクセスしてカルーセルとコメントが読み込まれるか見てください。
