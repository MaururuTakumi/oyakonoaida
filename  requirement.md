# おやこの間（あいだ）MVP要件定義書

## 1. サービス概要

### 1.1 基本情報
| 項目 | 内容 |
|---|---|
| **サービス名** | おやこの間（あいだ） |
| **ミッション** | 親と子どもの「あいだ」にある情報ギャップを、東大生ライターの等身大体験で可視化し、親子双方がより深く理解し合えるきっかけをつくる |
| **ターゲット** | 30〜50代の教育熱心な保護者 / 中学・大学受験に投資を惜しまない家庭 / 教育関係者 |
| **差別化要因** | 東大生10名の限定連載 × 読了行動データで磨く"学習型メディア" |

### 1.2 MVP目標
- 読者ページの構築（記事閲覧機能）
- LINE友だち追加による読者登録
- 記事の配信・公開フロー確立
- 基本的な読了率測定

## 2. 機能要件

### 2.1 ウェイティングLP機能（優先度：最高）

#### ランディングページ
- **URL**: `/` (ドメイントップ)
- **目的**: サービスローンチ前の見込み読者獲得
- **主要要素**:
  - キャッチコピー（親子の情報ギャップを可視化）
  - サービス説明（3つの特徴）
  - 東大生ライター紹介（顔写真・プロフィール）
  - LINE友だち追加CTA
  - カウントダウンタイマー（ローンチまで）
  - 事前登録特典の案内

#### LINE登録フロー
1. 「友だち追加で最新情報を受け取る」ボタン
2. LINE公式アカウントへ遷移
3. 友だち追加完了
4. ウェルカムメッセージ自動送信
5. LIFFでプロフィール入力（任意）

### 2.2 読者向け機能（本サービス）

#### 記事閲覧機能
- **TOPページ**: 最新5記事をカード形式で表示
- **記事詳細ページ**: 
  - ヒーローエリア（タイトル、著者、日付、アイキャッチ画像）
  - 記事本文（Markdown対応）
  - シェアボタン（LINE、X/Twitter）
  - 目次（自動生成）
  - 読了率計測

#### 読者登録機能
1. **LINE公式アカウント連携**
   - 友だち追加ボタン設置
   - LIFFフォームでプロフィール入力
   - ユーザーIDとメールアドレス取得

2. **Supabase Auth**
   - Email Magic Link認証
   - プロフィール情報保存
   - ログイン状態管理

### 2.2 配信機能
- **LINE配信**
  - 新規登録時ウェルカムメッセージ
  - ステップ配信（D+1, D+7, D+14）
  - 新着記事通知

- **メール配信（バックアップ）**
  - ConvertKit連携
  - Supabaseからの自動同期

### 2.3 分析・計測機能
- **Google Analytics 4**
  - PV計測
  - 読了率計測（`read_complete`イベント）
  - ユーザー行動分析

- **Supabase Analytics**
  - 記事別読了数
  - ユーザー別閲覧履歴
  - ライター別パフォーマンス

## 3. 技術仕様

### 3.1 技術スタック
```
Frontend:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Headless UI

Backend:
- Supabase (Auth, Database, Edge Functions)
- LINE Messaging API + LIFF
- Google Apps Script

Content:
- Markdown (MDX)
- Git管理

Analytics:
- Google Analytics 4
- Supabase custom events

Infrastructure:
- Vercel (Hosting, CI/CD)
- GitHub (Version Control)
```

### 3.2 データベース設計

#### profiles テーブル
```sql
- id: uuid (PK)
- email: text
- line_user_id: text
- display_name: text
- created_at: timestamp
- updated_at: timestamp
```

#### articles テーブル
```sql
- id: uuid (PK)
- slug: text (unique)
- title: text
- author_name: text
- published_at: timestamp
- hero_image: text
- excerpt: text
- content_path: text
- view_count: integer
- created_at: timestamp
```

#### reading_events テーブル
```sql
- id: uuid (PK)
- user_id: uuid (FK)
- article_id: uuid (FK)
- event_type: text ('view', 'read_25', 'read_50', 'read_75', 'read_complete')
- created_at: timestamp
```

### 3.3 ディレクトリ構造
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # ウェイティングLP
│   ├── preview/              # 本サービスプレビュー（開発用）
│   │   ├── page.tsx
│   │   └── articles/
│   │       └── [slug]/
│   │           └── page.tsx
│   └── api/
│       ├── auth/
│       ├── analytics/
│       └── waitlist/         # ウェイティングリスト登録
├── components/
│   ├── landing/              # LP専用コンポーネント
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── WriterProfiles.tsx
│   │   ├── LineCtaButton.tsx
│   │   └── CountdownTimer.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleContent.tsx
│   └── ReadingProgress.tsx
├── content/
│   └── articles/
│       ├── article-1.md
│       └── article-2.md
├── lib/
│   ├── supabase.ts
│   ├── analytics.ts
│   └── markdown.ts
└── styles/
    └── globals.css
```

## 4. UI/UX要件

### 4.1 デザイン方針
- NewsPicks × note風のモダンなカードデザイン
- 読みやすさ重視のタイポグラフィ
- ダークモード自動対応
- モバイルファースト設計

### 4.2 レスポンシブ対応
- スマートフォン: 320px〜
- タブレット: 768px〜
- デスクトップ: 1024px〜

### 4.3 パフォーマンス目標
- LCP: 2.5秒以内
- FID: 100ms以内
- CLS: 0.1以内
- Lighthouse スコア: 90以上

## 5. 運用フロー

### 5.1 記事公開フロー
1. ライターがLINEで原稿・画像を送付
2. 編集者がMarkdown形式に変換
3. `/content/articles/`に追加
4. `git push`でVercelに自動デプロイ
5. LINE・メールで新着通知配信

### 5.2 報酬計算フロー
1. 月末にSupabase Edge Functionで集計
2. 記事別PV・読了率をExport
3. 報酬計算シートで金額確定
4. 振込処理

## 6. セキュリティ要件
- HTTPS必須
- 環境変数でAPIキー管理
- Supabase RLS（Row Level Security）有効化
- CSRF対策
- XSS対策（sanitize処理）

## 7. SEO要件
- meta title/description最適化
- OGP画像設定
- 構造化データ（Article Schema）
- XMLサイトマップ生成
- robots.txt設定

## 8. 今後の拡張予定
- PWA対応（オフライン閲覧）
- 音声読み上げ機能
- コメント・いいね機能
- ライター個別ページ
- 有料会員機能
- **Expo React Nativeアプリ（読者用）**

## 9. React Native対応準備

### 9.1 設計方針
- **API First**: すべてのデータ取得をAPI経由に
- **共通ロジック**: ビジネスロジックをWeb/App間で共有
- **デザイントークン**: 色・フォント・スペーシングを統一管理
- **コンポーネント設計**: Atomic Designでプラットフォーム非依存に

### 9.2 技術的配慮
```
共通化可能な要素:
- APIクライアント（Supabase SDK）
- 認証ロジック
- データモデル（TypeScript型定義）
- ユーティリティ関数
- デザイントークン

プラットフォーム固有:
- UIコンポーネント（Web: React, App: React Native）
- ナビゲーション（Web: Next.js Router, App: React Navigation）
- スタイリング（Web: Tailwind, App: StyleSheet）
```

### 9.3 API設計
```typescript
// 共通APIインターフェース
interface ArticleAPI {
  getArticles(limit?: number): Promise<Article[]>
  getArticle(slug: string): Promise<Article>
  trackReadingEvent(articleId: string, eventType: string): Promise<void>
}

// 共通型定義
interface Article {
  id: string
  slug: string
  title: string
  author_name: string
  published_at: string
  hero_image: string
  excerpt: string
  content: string
}
```

### 9.4 ディレクトリ構造（モノレポ想定）
```
/packages
  /shared          # Web/App共通
    /api          # APIクライアント
    /types        # TypeScript型定義
    /utils        # ユーティリティ
    /constants    # 定数・設定
  /web            # Next.jsアプリ
  /mobile         # Expo React Nativeアプリ
```

### 9.5 実装優先順位
1. **Phase 1**: Web版でAPI設計を完成
2. **Phase 2**: 共通パッケージの切り出し
3. **Phase 3**: React Nativeアプリ開発
4. **Phase 4**: プッシュ通知・オフライン対応