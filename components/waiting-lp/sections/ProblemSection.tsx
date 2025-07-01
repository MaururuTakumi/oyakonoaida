import FadeIn from '../animations/FadeIn'

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              知っていましたか？
            </h2>
            <p className="text-xl md:text-2xl text-primary font-bold">
              東大生の73%が「親に本音を言えなかった」
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={200}>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">😔</div>
              <h3 className="font-bold text-lg mb-2">「期待に応えなきゃ」</h3>
              <p className="text-gray-700">
                親の期待が重すぎて、本当の気持ちを言い出せなかった。
                苦しくても「大丈夫」と言い続けた。
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="font-bold text-lg mb-2">「心配かけたくない」</h3>
              <p className="text-gray-700">
                成績が伸びない不安、友達関係の悩み。
                親に心配をかけたくなくて、一人で抱え込んでいた。
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🤐</div>
              <h3 className="font-bold text-lg mb-2">「理解されない」</h3>
              <p className="text-gray-700">
                世代の違い、価値観の違い。
                話しても理解してもらえないと諦めていた。
              </p>
            </div>
          </FadeIn>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            親子のコミュニケーションには、見えない壁がある。
            <br />
            でも、その壁を乗り越える方法があります。
          </p>
        </div>
      </div>
    </section>
  )
}