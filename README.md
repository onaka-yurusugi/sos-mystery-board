# SOS団 不思議発見ボード

世界を大いに盛り上げるための不思議現象報告システム。

SOS団が運営する、不思議な現象を投稿・閲覧できるWebアプリケーションです。

## Tech Stack

- **Next.js 16** (App Router / Turbopack)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**

## Features

- ダークテーマのランディングページ（SOS団ブランディング）
- 不思議イベントの投稿フォーム（バリデーション付き）
- カテゴリフィルター付きダッシュボード（UFO / 幽霊 / 超能力 / その他）
- JSON ファイルベースの REST API（CRUD 操作）

## Getting Started

```bash
npm install
npm run dev
```

http://localhost:3000 でアプリケーションが起動します。

## Project Structure

```
app/
├── api/events/        # REST API (GET/POST/DELETE)
├── dashboard/         # イベント一覧ダッシュボード
├── submit/            # イベント投稿フォーム
├── lib/storage.ts     # JSONファイルベースのストレージ
├── types/event.ts     # TypeScript型定義
├── layout.tsx         # 共通レイアウト（ナビ/フッター）
├── page.tsx           # ランディングページ
└── globals.css        # ダークテーマ/アニメーション
components/            # UIコンポーネント
data/events.json       # イベントデータ
```

## About

このプロジェクトは Claude Code の Agent Team 機能の練習として作成されました。

涼宮ハルヒ（Team Lead）の指揮のもと、4人のエージェントチームメンバーが並列で開発を行いました。

| Member | Role | Tasks |
|--------|------|-------|
| キョン | Tech Lead / 実装 | プロジェクトセットアップ、ダッシュボード |
| 長門有希 | Backend & Infra | データモデル、API Routes、ストレージ |
| 朝比奈みくる | Designer / Tester | ランディングページ、UI/UX最終調整 |
| 古泉一樹 | Logic / API | 投稿フォーム |
