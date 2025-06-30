export default function PreviewSection() {
  const articles = [
    {
      id: 1,
      title: '「勉強しなさい」と言われるたびに、やる気が消えていった理由',
      category: '親子関係',
      readTime: '5分',
    },
    {
      id: 2,
      title: '模試の結果を見せられなかった日々 - プレッシャーとの向き合い方',
      category: '受験体験',
      readTime: '7分',
    },
    {
      id: 3,
      title: '親の「あなたのため」が重かった - 期待との距離感について',
      category: '親子関係',
      readTime: '6分',
    },
    {
      id: 4,
      title: '塾選びで親と衝突した話 - 自分で決めることの大切さ',
      category: '受験準備',
      readTime: '5分',
    },
    {
      id: 5,
      title: '東大に合格しても消えなかった不安 - 親に言えなかった本音',
      category: '合格後',
      readTime: '8分',
    },
  ]
  
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            こんな記事が読めます
          </h2>
          <p className="text-lg text-gray-700">
            登録者限定で、全記事を無料公開予定
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="blur-content absolute inset-0 bg-white rounded-lg" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}で読める
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {article.title}
                </h3>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-lg p-4 shadow-lg">
                  <p className="text-sm font-bold text-primary">
                    🔒 事前登録で読める
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}