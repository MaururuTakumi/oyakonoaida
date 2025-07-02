# おやこの間 - 東大生が語る、親に言えなかった本音

親と子どもの「あいだ」にある情報ギャップを可視化。東大生10名が受験期の本音を語る、新しい教育メディア。

## 🚀 Quick Start

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プロダクション起動
npm start
```

## 📁 プロジェクト構造

```
oyakonoaida_media/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ウェイティングLP
│   └── GoogleAnalytics.tsx # GA設定
├── components/            # 再利用可能なコンポーネント
│   └── waiting-lp/       # ウェイティングLP用コンポーネント
├── lib/                   # ユーティリティ関数
├── public/               # 静的ファイル
│   └── images/          # 画像ファイル
├── content/              # Markdownコンテンツ（将来実装）
└── types/                # TypeScript型定義

```

## 🛠 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Noto Sans JP
- **分析**: Google Analytics 4
- **デプロイ**: Vercel

## 🔧 環境変数

`.env.local.example`をコピーして`.env.local`を作成し、必要な値を設定してください。

```bash
cp .env.local.example .env.local
```

### 必須の環境変数

- `NEXT_PUBLIC_BASE_URL`: サイトのベースURL
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- `NEXT_PUBLIC_LINE_ADD_FRIEND_URL`: LINE友だち追加URL

## 📱 機能

### 現在実装済み
- ✅ ウェイティングLP
- ✅ モバイルファーストデザイン
- ✅ LINE友だち追加CTA
- ✅ カウントダウンタイマー
- ✅ 事前登録特典表示（永久20%OFF）
- ✅ スクロールアニメーション
- ✅ Google Analytics連携

### 今後実装予定
- 📝 記事表示機能
- 🔐 認証機能（Supabase）
- 📧 メール配信（ConvertKit）
- 📊 読了率計測
- 💬 コメント機能

## 🚀 デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリをVercelに接続
2. 環境変数を設定
3. デプロイ実行

```bash
# Vercel CLIを使用する場合
vercel
```

## 📝 開発ガイドライン

詳細な開発ガイドラインは[CLAUDE.md](./CLAUDE.md)を参照してください。

## 📊 進捗管理

プロジェクトの進捗は[PROGRESS.md](./PROGRESS.md)で管理しています。

## 🤝 貢献

現在、クローズドな開発を行っています。

## 📄 ライセンス

© 2025 おやこの間. All rights reserved.