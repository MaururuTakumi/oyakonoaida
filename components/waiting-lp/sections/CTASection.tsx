'use client'

import { useEffect, useState } from 'react'
import LineCTAButton from '../ui/LineCTAButton'
import RegistrationCount from '../ui/RegistrationCount'

export default function CTASection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-max text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          親子の「あいだ」を、もっと近くに
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          東大生が語る本音を通して、
          親子のコミュニケーションを見つめ直してみませんか？
        </p>
        
        {mounted && (
          <div className="mb-8">
            <RegistrationCount />
          </div>
        )}
        
        <LineCTAButton size="large" variant="white" />
        
        <p className="mt-8 text-sm opacity-75">
          ※ LINEアカウントをお持ちでない方も、
          <br className="md:hidden" />
          この機会にぜひご登録ください
        </p>
      </div>
    </section>
  )
}