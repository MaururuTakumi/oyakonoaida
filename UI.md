# おやこの間 UIデザインガイドライン

## デザインコンセプト

### 基本理念
- **NewsPicksの洗練性 × noteの温かみ**
- 教育コンテンツとしての信頼感と、親子の温かな関係性を両立
- 東大生ライターの知的さと親しみやすさの共存

### デザイン原則
1. **Clear & Trustworthy** - 教育メディアとしての明確性と信頼感
2. **Warm & Approachable** - 親子の距離を縮める温かみ
3. **Mobile First** - スマートフォンでの読みやすさを最優先
4. **Data-Driven** - 読了率データを反映した最適化

## ウェイティングLP デザイン

### LPの構成要素

#### 1. ヒーローセクション
```
┌─────────────────────────────────────┐
│                                     │
│     親と子どもの「あいだ」に        │
│     　ある本音、知っていますか？    │
│                                     │
│  東大生10名が語る、親に言えなかった │
│      受験期の本当の気持ち           │
│                                     │
│    [LINE友だち追加で先行登録]       │
│                                     │
│    ローンチまで あと 15 日          │
│                                     │
└─────────────────────────────────────┘
```

**デザイン要素:**
- グラデーション背景（青→オレンジ）
- 大きく読みやすいキャッチコピー
- 目立つCTAボタン（LINE緑）
- カウントダウンタイマー

#### 2. 特徴セクション
```
┌─────────────────────────────────────┐
│    なぜ「おやこの間」なのか？       │
│                                     │
│  📊 データで見る親子のギャップ      │
│  ・73%の東大生が「親に本音を        │
│    言えなかった経験あり」           │
│                                     │
│  ✍️ 現役東大生の等身大の体験       │
│  ・10名の多様なバックグラウンド     │
│  ・成功も失敗も包み隠さず           │
│                                     │
│  📱 いつでも、どこでも読める       │
│  ・スマホ最適化された読み心地       │
│  ・5分で読める記事設計              │
└─────────────────────────────────────┘
```

#### 3. ライター紹介
```
┌─────────────────────────────────────┐
│        執筆する東大生たち           │
│                                     │
│  [写真] [写真] [写真] [写真] [写真]  │
│   田中    山田    佐藤    鈴木   高橋 │
│   文III   理I     法      医     工   │
│                                     │
│      + さらに5名のライター          │
│                                     │
└─────────────────────────────────────┘
```

#### 4. 事前登録特典
```
┌─────────────────────────────────────┐
│    🎁 LINE友だち限定特典            │
│                                     │
│  ✓ 全記事を最速でお届け            │
│  ✓ ライター直筆メッセージ          │
│  ✓ 親子で使える会話のきっかけ集    │
│                                     │
│    [今すぐLINE友だち追加]           │
│                                     │
└─────────────────────────────────────┘
```

### LP専用スタイル

#### アニメーション
```css
/* ヒーローテキストのフェードイン */
@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* カウントダウンのパルス */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* スクロール促進矢印 */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
```

#### グラデーション
```css
.hero-gradient {
  background: linear-gradient(
    135deg,
    var(--primary-blue) 0%,
    var(--warm-orange) 100%
  );
}

.text-gradient {
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--primary-light) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## カラーパレット

### プライマリカラー
```css
--primary-blue: #1E40AF;      /* 信頼感のある深い青（NewsPicks風） */
--primary-light: #3B82F6;     /* アクセントとしての明るい青 */
--primary-dark: #1E3A8A;      /* ホバー時の暗い青 */
```

### セカンダリカラー
```css
--warm-orange: #F97316;       /* 温かみのあるオレンジ（親子の温かさ） */
--soft-green: #10B981;        /* 成長を表す緑 */
--note-beige: #FEF3C7;        /* note風の温かい背景色 */
```

### ニュートラルカラー
```css
--gray-900: #111827;          /* メインテキスト */
--gray-700: #374151;          /* サブテキスト */
--gray-500: #6B7280;          /* 補助テキスト */
--gray-300: #D1D5DB;          /* ボーダー */
--gray-100: #F3F4F6;          /* 背景 */
--white: #FFFFFF;             /* カード背景 */
```

### ダークモード
```css
--dark-bg: #0F172A;           /* ダーク背景 */
--dark-card: #1E293B;         /* カード背景 */
--dark-text: #F1F5F9;         /* テキスト */
--dark-border: #334155;       /* ボーダー */
```

## タイポグラフィ

### フォントファミリー
```css
--font-sans: "Hiragino Kaku Gothic ProN", "Noto Sans JP", -apple-system, BlinkMacSystemFont, sans-serif;
--font-serif: "Hiragino Mincho ProN", "Noto Serif JP", serif;
```

### フォントサイズ（モバイルファースト）
```css
/* モバイル (base) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */

/* タブレット以上 (@media (min-width: 768px)) */
--text-base: 1.125rem; /* 18px */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.5rem;     /* 24px */
--text-2xl: 1.875rem;  /* 30px */
--text-3xl: 2.25rem;   /* 36px */
```

### 行間・文字間
```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;  /* 本文用 */
--letter-spacing-normal: 0.03em;
--letter-spacing-wide: 0.05em;
```

## コンポーネントデザイン

### 1. ヘッダー
```
┌─────────────────────────────────────┐
│ [≡] おやこの間         [🔔] [👤]    │
│─────────────────────────────────────│
│ 最新 | 人気 | ライター | テーマ      │
└─────────────────────────────────────┘
```
- 固定ヘッダー（スクロール時に縮小）
- NewsPicks風のシンプルさ
- モバイルではハンバーガーメニュー

### 2. 記事カード（TOPページ）
```
┌─────────────────────────────────────┐
│ [画像]                              │
│                                     │
│ ● 受験・進路                        │
│ 東大生が語る「親に言えなかった      │
│ 本当の気持ち」                      │
│                                     │
│ 田中明子 | 2025.06.30 | 5分で読了   │
│ 👁 1,234  💬 23  📤               │
└─────────────────────────────────────┘
```

**デザインポイント:**
- NewsPicksのカード型レイアウト
- カテゴリーラベルに色付け
- 読了時間の表示（note風）
- エンゲージメント指標の可視化

### 3. 記事詳細ページ

#### ヒーローセクション
```
┌─────────────────────────────────────┐
│         [アイキャッチ画像]           │
│                                     │
│ ● 受験・進路                        │
│                                     │
│ 東大生が語る「親に言えな            │
│ かった本当の気持ち」                │
│                                     │
│ 受験期、私は親の期待と自分の本音の  │
│ 間で揺れ動いていました...           │
│                                     │
│ [著者アイコン] 田中明子              │
│ 東京大学文学部3年                   │
│ 2025年6月30日 | 5分で読了           │
└─────────────────────────────────────┘
```

#### 本文エリア
```
┌─────────────────────────────────────┐
│ 目次                                │
│ 1. はじめに                         │
│ 2. 親の期待という重圧               │
│ 3. 本当は違う道を...                │
│                                     │
│ ─────────────────────────           │
│                                     │
│ ## はじめに                         │
│                                     │
│ 大学受験を控えた高校3年の夏、私は   │
│ ある重大な決断を迫られていました。  │
│                                     │
│ [引用ボックス]                      │
│ 「医学部じゃなくて、本当は         │
│  文学部に行きたい」                 │
│                                     │
│ この言葉を、私は最後まで親に       │
│ 言えませんでした...                 │
│                                     │
└─────────────────────────────────────┘
```

**デザイン要素:**
- **読みやすいフォントサイズ**: モバイル16px、PC18px
- **適切な行間**: 1.75倍
- **引用ボックス**: note風の温かみのあるデザイン
- **画像**: 全幅表示でインパクト
- **読了プログレスバー**: 上部に固定表示

### 4. インタラクション要素

#### シェアボタン（浮遊型）
```css
.share-fab {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: var(--primary-blue);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

#### 読了率インジケーター
```css
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-blue) 0%, var(--warm-orange) 100%);
  transition: width 0.3s ease;
}
```

## レスポンシブデザイン

### ブレークポイント
```css
--mobile: 0px;        /* モバイルファースト */
--tablet: 768px;      /* iPad縦 */
--desktop: 1024px;    /* PC */
--wide: 1280px;       /* ワイドスクリーン */
```

### グリッドシステム
```css
/* モバイル: 1カラム */
.article-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* タブレット: 2カラム */
@media (min-width: 768px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* デスクトップ: 3カラム */
@media (min-width: 1024px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

## アニメーション・トランジション

### 基本設定
```css
--transition-fast: 150ms ease;
--transition-normal: 300ms ease;
--transition-slow: 500ms ease;
```

### スクロールアニメーション
```css
/* フェードイン */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-normal);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### ホバーエフェクト
```css
/* カードホバー */
.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

/* 画像ズーム */
.article-card:hover .thumbnail {
  transform: scale(1.05);
}
```

## アクセシビリティ

### カラーコントラスト
- 通常テキスト: 最小 4.5:1
- 大きいテキスト: 最小 3:1
- インタラクティブ要素: 最小 3:1

### フォーカス管理
```css
/* フォーカスリング */
:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### スクリーンリーダー対応
- 適切な見出し階層
- alt属性の充実
- aria-labelの活用
- スキップリンクの実装

## パフォーマンス最適化

### 画像最適化
- WebP形式の使用
- 適切なサイズでの配信
- lazy loading実装
- プレースホルダーの表示

### CSS最適化
- Critical CSSのインライン化
- Tailwindのパージ設定
- CSS変数の活用

## React Native対応準備

### 共通デザイントークン
```javascript
export const tokens = {
  colors: {
    primary: '#1E40AF',
    secondary: '#F97316',
    // ...
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    // ...
  }
};
```

### コンポーネント設計
- Atomic Designの採用
- プラットフォーム非依存の設計
- 共通ロジックの分離

## 実装チェックリスト
- [ ] カラーパレットの定義
- [ ] タイポグラフィシステムの実装
- [ ] 基本コンポーネントの作成
- [ ] レスポンシブ対応
- [ ] ダークモード実装
- [ ] アニメーション実装
- [ ] アクセシビリティチェック
- [ ] パフォーマンス最適化
- [ ] React Native互換性確認