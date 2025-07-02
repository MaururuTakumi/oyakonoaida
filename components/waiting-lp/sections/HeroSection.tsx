'use client'

import { useEffect, useState } from 'react'
import CountdownTimer from '../ui/CountdownTimer'
import LineCTAButton from '../ui/LineCTAButton'
import ScrollIndicator from '../ui/ScrollIndicator'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/10 to-secondary-light/10 pt-16 md:pt-20">
      <div className="container-max section-padding">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            親と子どもの「あいだ」にある
            <br />
            <span className="text-primary">本音</span>、知っていますか？
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            東大生10名が語る、受験期の真実。
            <br className="hidden md:block" />
            親に言えなかった本当の気持ちを、記事にしました。
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <LineCTAButton size="large" />
            
            {mounted && (
              <div className="text-sm text-gray-600">
                <p className="mb-2">サービス開始まで</p>
                <CountdownTimer targetDate={new Date('2025-08-15')} />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  )
}