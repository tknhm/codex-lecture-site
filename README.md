# codex-lecture-site

Codex講義シリーズ用の個人GitHub Pagesサイトです。現在はヒーローメッセージと説明文、リフレッシュボタンを備えた単一の静的ランディングページ(`index.html`)をホストしています。

ローカルで確認するにはブラウザで `index.html` を開くか、このディレクトリで `python -m http.server` を実行し `http://localhost:8000` にアクセスしてください。

コンテンツを拡張する際は `styles/` や `scripts/` のような意味のあるフォルダにアセットを整理し、必要な `<link>`/`<script>` を `index.html` に追加して GitHub Pages が正しく配信できるようにしてください。
