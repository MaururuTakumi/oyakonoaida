'use client'

import { useEffect, useState } from 'react'
import LineCTAButton from './LineCTAButton'

export default function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar after scrolling past the hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-25 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="p-4">
        <LineCTAButton />
      </div>
    </div>
  )
}