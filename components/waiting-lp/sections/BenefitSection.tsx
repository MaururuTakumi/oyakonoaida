export default function BenefitSection() {
  const benefits = [
    {
      icon: '🎁',
      title: '特典1',
      subtitle: '創刊記念インタビュー',
      description: '東大生ライター全員のロングインタビューを限定公開',
    },
    {
      icon: '📚',
      title: '特典2',
      subtitle: '過去記事アーカイブ',
      description: 'サービス開始後も、全ての記事を無料で読み放題',
    },
    {
      icon: '💬',
      title: '特典3',
      subtitle: '優先質問権',
      description: 'ライターへの質問を優先的に受付（月1回）',
    },
  ]
  
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            今だけの事前登録
            <span className="text-primary">3大特典</span>
          </h2>
          <p className="text-lg text-gray-700">
            LINE友だち追加で、限定特典をプレゼント
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 text-center">{benefit.icon}</div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-lg font-bold mb-3">{benefit.subtitle}</p>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-red-600 font-bold text-lg">
            ※ 特典は2025年1月31日までの登録者限定
          </p>
        </div>
      </div>
    </section>
  )
}