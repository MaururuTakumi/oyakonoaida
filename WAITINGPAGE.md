# ウェイティングLP仕様書

## 概要
サービスローンチ前に見込み読者を獲得するためのランディングページ。親子の情報ギャップという課題を提示し、LINE友だち登録へ誘導する。

## ページ構成

### 1. メタ情報
```html
<title>おやこの間 - 東大生が語る、親に言えなかった本音</title>
<meta name="description" content="親と子どもの「あいだ」にある情報ギャップを可視化。東大生10名が受験期の本音を語る、新しい教育メディアが始まります。">
<meta property="og:image" content="/og-image.jpg">
```

### 2. セクション構成

#### A. ヒーローセクション
**目的**: 一瞬で興味を引き、サービスの核心を伝える

**要素**:
- メインキャッチコピー
- サブキャッチコピー
- LINE CTAボタン（ファーストビュー）
- カウントダウンタイマー
- スクロール促進アニメーション

**コピー案**:
```
メイン: 親と子どもの「あいだ」にある本音、知っていますか？
サブ: 東大生10名が語る、親に言えなかった受験期の本当の気持ち
CTA: LINE友だち追加で先行登録
```

#### B. 問題提起セクション
**目的**: 共感を生み、課題を明確化

**コンテンツ**:
```
「お母さん、本当は医学部じゃなくて...」

この言葉を、最後まで言えませんでした。

東大生100名へのアンケートで、
73%が「親に本音を言えなかった経験がある」と回答。

親の期待と子どもの本音。
その「あいだ」には、想像以上のギャップがあります。
```

**ビジュアル**: 
- アンケート結果のインフォグラフィック
- 親子のシルエットイラスト

#### C. ソリューション提示
**目的**: サービスの価値を明確に伝える

**3つの特徴**:
1. **リアルな体験談**
   - アイコン: 📝
   - 見出し: 成功も失敗も、すべて正直に
   - 説明: 東大生10名が、受験期の葛藤、親との関係、進路選択の本音を包み隠さず語ります

2. **多様な視点**
   - アイコン: 🎯
   - 見出し: 文系も理系も、様々な背景から
   - 説明: 医学部、法学部、工学部...異なる進路を選んだライターが、それぞれの視点で語ります

3. **読みやすさ重視**
   - アイコン: 📱
   - 見出し: 5分で読める、心に残る
   - 説明: 通勤電車でも、寝る前のひとときでも。忙しい親御さんでも読みやすい記事設計

#### D. ライター紹介
**目的**: 信頼性の担保と親近感の演出

**表示内容**:
- ライター5名の顔写真（円形）
- 名前（仮名可）
- 学部・学年
- 一言メッセージ

**レイアウト**: 横スクロール可能なカルーセル

#### E. 記事プレビュー
**目的**: コンテンツの質を事前に示す

**サンプル記事タイトル**:
1. 「医学部じゃダメですか？本当は文学部に行きたかった私の選択」
2. 「『浪人は許さない』父の一言で決まった、不本意な進路」
3. 「東大に入ったら親孝行？期待の重さに押しつぶされそうだった日々」

**デザイン**: カード形式、ぼかし効果（Coming Soon表示）

#### F. 事前登録特典
**目的**: 登録のインセンティブ提供

**特典内容**:
```
🎁 今だけの事前登録特典

2025年1月31日までの登録者限定

「おやこの間」プレミアム会員
永久20%OFF

通常価格から20%割引で、
ずっとお得にご利用いただけます

[LINE友だち追加で先行登録]

※ 2025年1月31日までの期間限定特典です
```

#### G. 最終CTA
**目的**: 行動を促す最後の一押し

**要素**:
- 大きなLINE友だち追加ボタン
- 登録者数表示（社会的証明）
- プライバシーポリシーリンク

**コピー**:
```
すでに523名の方が登録済み
あなたも「おやこの間」の仲間になりませんか？

[LINE友だち追加で無料登録]

※完全無料。いつでも配信停止可能です。
```

### 3. UI要素詳細

#### LINE CTAボタン
```css
.line-cta-button {
  background: #06C755; /* LINE公式カラー */
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(6, 199, 85, 0.3);
  transition: all 0.3s ease;
}

.line-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(6, 199, 85, 0.4);
}
```

#### カウントダウンタイマー
```javascript
// コンポーネント例
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="number">{timeLeft.days}</span>
        <span className="label">日</span>
      </div>
      <div className="countdown-item">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">時間</span>
      </div>
      <div className="countdown-item">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">分</span>
      </div>
    </div>
  );
};
```

### 4. アニメーション仕様

#### スクロールトリガー
- 各セクションは視界に入ったらフェードイン
- 数値は0からカウントアップ
- アイコンは軽くバウンス

#### ローディング
- 初回訪問時は軽いローディングアニメーション
- ロゴがフェードイン → コンテンツ表示

### 5. レスポンシブ対応

#### ブレークポイント
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

#### モバイル最適化
- CTAボタンは画面幅90%
- テキストサイズは最小16px
- タップターゲットは最小44px
- 横スクロール要素にはインジケーター表示

### 6. パフォーマンス目標
- First Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1

### 7. 計測項目
- ページビュー数
- 滞在時間
- スクロール深度
- CTAクリック率
- LINE友だち追加数
- セクション別エンゲージメント

### 8. A/Bテスト項目
- メインキャッチコピー（3パターン）
- CTAボタンの文言
- 特典内容の訴求順序
- ライター紹介の有無

### 9. 実装チェックリスト
- [ ] OGP画像作成
- [ ] LINE友だち追加リンク設定
- [ ] カウントダウン終了日時設定
- [ ] GA4イベント設定
- [ ] フォーム送信後のサンクスメッセージ
- [ ] エラー時の代替表示
- [ ] アクセシビリティチェック
- [ ] クロスブラウザテスト