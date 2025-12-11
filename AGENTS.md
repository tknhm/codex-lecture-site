# Repository Guidelines
- 日本語で簡潔かつ丁寧に回答してください。

## Project Structure & Module Organization
- 現在は `index.html` と `README.md` をルート直下に置いたシンプルな構成なので、コンテンツ拡張時は `src/` や `assets/` などディレクトリで階層化する。
- ページ固有の CSS/JavaScript を追加する場合は `static/` か `public/` を新設し、リンクやスクリプト参照を `index.html` から明示的に指定する。
- モジュールや UI セクションを増やす際は `AGENTS.md` と `README.md` を更新し、何をどこに置くかを記述して導線を明確にする。

## Build, Test, and Development Commands
- 現在は静的 HTML のためビルド/テストは不要。将来的にツールチェーン（Vite, Next.js など）を導入するときは `package.json` に `npm run build`/`npm run dev` を追加。
- ローカルで確認するには `open index.html`（macOS）や `python -m http.server` などを使い、ブラウザで直接レンダリングを確認する。
- 現在は自動化テスト不要だが、フレームワーク導入後は `npm test` を追加してマージ前にスイートを実行する。

## Coding Style & Naming Conventions
- HTML はインデント2スペース、クラス名や ID は `kebab-case` で命名し、意味のあるセクション名を付ける。
- 追加する CSS/JavaScript は `index.html` に `link`/`script` を追加しつつ、ファイル名は `styles/main.css` や `scripts/hero.js` のように機能を表す名称にする。
- 今後 ESLint/Prettier などを導入する場合は `package.json` に `lint` スクリプトを置き、ビルド/テスト前に実行する。

## Testing Guidelines
- Jest や Vitest など馴染みのあるフレームワークを選び、テストは対象モジュールの近くに置く（例: `src/components/button.test.tsx`）。
- テストファイル名は対象の命名（`input-field.test.ts`）で、説明は振る舞いにフォーカスする。
- マージ前にテストスクリプトを実行し、自動化バッジがない場合は PR に回帰カバレッジの結果を添える。

## Commit & Pull Request Guidelines
- コミットメッセージは `type(scope): summary` 形式（例: `feat(ui): add lecture card preview`）で履歴を読みやすくする。
- PR には変更内容・理由・検証方法を明記し、該当するチケットをリンク、UI に変化があればスクリーンショットや再現手順を添える。
- マージ後に必要な手動ステップ（DBマイグレーションやキャッシュクリアなど）は PR で言及して驚きを避ける。

今後さらに構造が充実したら、セキュリティやアーキテクチャなどのセクションも追加して貢献者を案内する。
