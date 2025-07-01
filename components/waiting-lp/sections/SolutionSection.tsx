export default function SolutionSection() {
  const features = [
    {
      number: '01',
      title: 'リアルな体験談',
      description: '東大生ライターが実名で語る、受験期の本音。きれいごとなしの、リアルな体験談を届けます。',
      icon: '📝',
    },
    {
      number: '02',
      title: '多様な視点',
      description: '文系・理系、地方・都市部、様々なバックグラウンドを持つライターが、それぞれの視点で語ります。',
      icon: '👥',
    },
    {
      number: '03',
      title: '読みやすさ',
      description: 'スマホで読みやすい記事設計。忙しい親御さんでも、通勤時間にサクッと読めます。',
      icon: '📱',
    },
  ]
  
  return (
    <section id="solution" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            「おやこの間」が提供する
            <br className="md:hidden" />
            <span className="text-primary">3つの価値</span>
          </h2>
          <p className="text-lg text-gray-700">
            親子のコミュニケーションを、もっと豊かに
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.number} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 -left-4 text-6xl font-bold text-primary/10">
                  {feature.number}
                </div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
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