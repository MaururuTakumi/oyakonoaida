'use client'

import { useEffect, useState } from 'react'
import LineCTAButton from '../ui/LineCTAButton'

export default function BenefitSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('2025-01-31T23:59:59')
      const now = new Date()
      const distance = deadline.getTime() - now.getTime()
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        })
      }
    }
    
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000) // Update every minute
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section id="benefit" className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            🎁 今だけの事前登録
            <span className="text-primary">特典</span>
          </h2>
          <p className="text-lg text-gray-700">
            2025年1月31日までの登録者限定
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Premium gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
            
            <div className="relative p-8 md:p-12">
              {/* Main offer */}
              <div className="text-center mb-8">
                <div className="inline-block mb-6">
                  <div className="relative">
                    <div className="text-6xl md:text-8xl font-bold text-primary">
                      20
                      <span className="text-4xl md:text-6xl">%</span>
                    </div>
                    <div className="absolute -top-2 -right-8 bg-secondary text-white text-sm px-3 py-1 rounded-full font-bold rotate-12">
                      永久
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                    OFF
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  「おやこの間」プレミアム会員
                </h3>
                
                <p className="text-lg md:text-xl text-gray-700 mb-2">
                  通常価格から20%割引で、
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-bold">
                  ずっとお得にご利用いただけます
                </p>
              </div>
              
              {/* Price comparison */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">通常価格</p>
                    <p className="text-2xl line-through text-gray-400">
                      ¥980<span className="text-sm">/月</span>
                    </p>
                  </div>
                  <div className="text-3xl">→</div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">特別価格</p>
                    <p className="text-3xl font-bold text-primary">
                      ¥784<span className="text-sm">/月</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Countdown timer */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-8">
                <p className="text-center text-red-700 font-bold mb-2">
                  特典終了まで残り
                </p>
                <div className="flex justify-center gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{timeLeft.days}</div>
                    <div className="text-xs text-red-600">日</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{timeLeft.hours}</div>
                    <div className="text-xs text-red-600">時間</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{timeLeft.minutes}</div>
                    <div className="text-xs text-red-600">分</div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <LineCTAButton size="large" />
                <p className="text-sm text-gray-600 mt-4">
                  ※ 2025年1月31日までの期間限定特典です
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}