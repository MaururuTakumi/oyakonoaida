'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [targetDate])
  
  const formatNumber = (num: number) => num.toString().padStart(2, '0')
  
  return (
    <div className="flex gap-3 justify-center">
      <div className="bg-white rounded-lg p-3 shadow-md">
        <div className="text-2xl font-bold text-primary">{formatNumber(timeLeft.days)}</div>
        <div className="text-xs text-gray-600">日</div>
      </div>
      <div className="bg-white rounded-lg p-3 shadow-md">
        <div className="text-2xl font-bold text-primary">{formatNumber(timeLeft.hours)}</div>
        <div className="text-xs text-gray-600">時間</div>
      </div>
      <div className="bg-white rounded-lg p-3 shadow-md">
        <div className="text-2xl font-bold text-primary">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-xs text-gray-600">分</div>
      </div>
      <div className="bg-white rounded-lg p-3 shadow-md">
        <div className="text-2xl font-bold text-primary">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-xs text-gray-600">秒</div>
      </div>
    </div>
  )
}