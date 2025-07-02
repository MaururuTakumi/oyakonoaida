# おやこの間 開発ガイドライン

## プロジェクト概要
「おやこの間」は、親と子どもの情報ギャップを東大生ライターの体験談で埋める教育メディアです。Next.js 14 + Supabase + LINE連携で構築します。

**現在のフェーズ**: ウェイティングLP開発 → 本サービスMVP

## 開発優先順位
1. **ウェイティングLP** - LINE友だち登録を促すランディングページ
2. **LINE公式アカウント** - 事前登録者の獲得と育成
3. **本サービスMVP** - 記事閲覧機能の実装

## 開発方針

### 1. 思考プロセス
**常にultrathinkを使用して深い思考を行う**
- 複雑なタスクや設計判断では必ず `ultrathink` を指定
- Explore → Plan → Code → Commit のワークフローを厳守

### 2. Explore-Plan-Code-Commitワークフロー

#### Explore（探索フェーズ）
```
例: find files related to article display functionality
```
- 既存コードの理解
- 関連ファイルの特定
- 依存関係の把握

#### Plan（計画フェーズ）
```
例: ultrathink how to implement article reading progress tracking
```
- 実装方針の検討
- アーキテクチャ設計
- エッジケースの考慮

#### Code（実装フェーズ）
```
例: implement the reading progress tracking feature
```
- 計画に基づいた実装
- エラーハンドリング
- テストの実装

#### Commit（コミットフェーズ）
```
例: commit with message "feat: add reading progress tracking"
```
- 意味のあるコミットメッセージ
- 変更内容の明確化

### 3. TDD（テスト駆動開発）の実践
1. **テストファースト**: 機能実装前にテストを書く
2. **Red-Green-Refactor**: 失敗→成功→リファクタリング
3. **カバレッジ目標**: 主要機能は80%以上

### 4. 進捗管理ルール
- 各セッション開始時に `PROGRESS.md` を確認
- タスク完了ごとに進捗を更新
- ブロッカーや課題は即座に記録

### 5. コーディング規約

#### TypeScript
- 厳格な型定義（any禁止）
- インターフェースの積極的活用
- エラーハンドリングの徹底

#### React/Next.js
- Server Componentsを優先使用
- Client Componentsは最小限に
- カスタムフックでロジックを分離

#### スタイリング
- Tailwind CSSのユーティリティクラスを使用
- コンポーネント単位でスタイルを管理
- レスポンシブデザインを考慮

### 6. ファイル構成の原則
```
/app - ルーティングとページコンポーネント
/components - 再利用可能なUIコンポーネント
/lib - ユーティリティ関数とカスタムフック
/content - Markdownコンテンツ
/types - TypeScript型定義
```

### 7. Git運用
- feature/* - 新機能開発
- fix/* - バグ修正
- chore/* - その他の変更
- コミットは小さく頻繁に

### 8. 環境変数管理
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# LINE
LINE_CHANNEL_ACCESS_TOKEN=
LINE_CHANNEL_SECRET=
LIFF_ID=

# Analytics
NEXT_PUBLIC_GA_ID=

# ConvertKit
CONVERTKIT_API_KEY=
```

### 9. デバッグ指針
- console.logは開発時のみ
- エラーは必ずログに記録
- ユーザーフレンドリーなエラーメッセージ

### 10. パフォーマンス最適化
- 画像は最適化済みフォーマット使用
- 遅延読み込みの実装
- キャッシュ戦略の適用

## 重要な技術的決定事項

### Supabase設計
- Row Level Security (RLS) を全テーブルで有効化
- Edge Functionsで重い処理を実行
- リアルタイム機能は将来的に実装

### LINE連携
- LIFF SDKでプロフィール取得
- Webhook処理はEdge Functions使用
- メッセージ配信はバッチ処理

### コンテンツ管理
- MarkdownファイルをGit管理
- frontmatterでメタデータ管理
- 画像は/public/imagesに配置

## セッション開始時のチェックリスト
1. [ ] PROGRESS.mdを確認
2. [ ] 前回の未完了タスクを把握
3. [ ] 今回の目標を明確化
4. [ ] 必要なファイルを探索
5. [ ] ultrathinkで実装計画立案

## トラブルシューティング
- ビルドエラー: 型定義を確認
- 認証エラー: 環境変数を確認
- レンダリングエラー: Server/Client境界を確認

## 参考リンク
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [LINE Developers](https://developers.line.biz/)
- [Tailwind CSS](https://tailwindcss.com/)


作業ログ管理
ログ保存ルール
すべての作業セッションで、以下のフォーマットで作業ログを残すこと。
ディレクトリ構造
/work-logs/
  ├── 2025-01-02_1430-1630.md
  ├── 2025-01-02_1700-1845.md
  └── 2025-01-03_0900-1200.md
ファイル命名規則
YYYY-MM-DD_HHMM-HHMM.md
例: 2025-01-02_1430-1630.md

日付: 年-月-日
時間: 開始時刻-終了時刻（24時間表記）

ログフォーマット
markdown# 作業ログ: 2025-01-02 14:30-16:30

## 概要
[1-2行で今回のセッションの主な成果を記載]

## 実施タスク
- [ ] タスク1の内容
  - 詳細な実装内容
  - 発生した問題と解決方法
- [ ] タスク2の内容
  - サブタスク
  - 結果

## 作成/変更ファイル
- `app/page.tsx` - ヒーローセクションの更新
- `components/landing/Hero.tsx` - アニメーション追加
- 新規作成: `lib/utils.ts` - ユーティリティ関数

## 技術的決定事項
- [決定内容と理由を記載]
- 例: Framer Motionの代わりにCSS Transitionを使用（バンドルサイズ削減のため）

## 発生した問題
### 問題1: ビルドエラー
- エラー内容: [具体的なエラーメッセージ]
- 原因: [分析結果]
- 解決方法: [実施した対策]

## 次回TODO
- [ ] 残っているタスク
- [ ] 新たに発生したタスク
- [ ] 確認が必要な事項

## メモ
- [気づいたこと、改善案、質問事項など]
作業開始時のチェック

前回の作業ログを確認（最新の日付のファイル）
PROGRESS.mdと照合して現在地を把握
新しいログファイルを作成

作業終了時のチェック

実施内容をログファイルに記録
PROGRESS.mdを更新
次回TODOを明確に記載

ログの活用

セッション間のコンテキスト維持
問題解決パターンの蓄積
実装判断の履歴として参照

