'use client'

import { useEffect, useState } from 'react'

export default function RegistrationCount() {
  const [count, setCount] = useState(523)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    // Initial animation
    setIsAnimating(true)
    
    // Simulate organic growth
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3))
    }, 30000) // Every 30 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className={`inline-block ${isAnimating ? 'animate-count-up' : ''}`}>
      <p className="text-2xl md:text-3xl font-bold">
        <span className="text-4xl md:text-5xl text-secondary">{count.toLocaleString()}</span>
        <span className="ml-2">名が事前登録中！</span>
      </p>
      <p className="text-sm opacity-75 mt-2">
        ※ リアルタイムで更新されます
      </p>
    </div>
  )
}