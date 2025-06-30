'use client'

import Image from 'next/image'
import { useState } from 'react'

const writers = [
  {
    id: 1,
    name: '田中 太郎',
    faculty: '文科一類 → 法学部',
    hometown: '東京都',
    image: '/images/writers/writer1.jpg',
    quote: '親には言えなかった、浪人時代の不安と葛藤',
  },
  {
    id: 2,
    name: '佐藤 花子',
    faculty: '理科二類 → 農学部',
    hometown: '北海道',
    image: '/images/writers/writer2.jpg',
    quote: '地方から東大を目指すということ',
  },
  {
    id: 3,
    name: '鈴木 一郎',
    faculty: '文科三類 → 経済学部',
    hometown: '大阪府',
    image: '/images/writers/writer3.jpg',
    quote: '勉強法について、親との認識のズレ',
  },
  {
    id: 4,
    name: '山田 美咲',
    faculty: '理科一類 → 工学部',
    hometown: '福岡県',
    image: '/images/writers/writer4.jpg',
    quote: '女子が理系を選ぶときの、見えない壁',
  },
  {
    id: 5,
    name: '小林 健太',
    faculty: '文科二類 → 教育学部',
    hometown: '愛知県',
    image: '/images/writers/writer5.jpg',
    quote: '教師になりたいと言えなかった理由',
  },
]

export default function WriterSection() {
  const [activeWriter, setActiveWriter] = useState(0)
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            東大生ライター陣
          </h2>
          <p className="text-lg text-gray-700">
            多様なバックグラウンドを持つ5名が、それぞれの視点で語ります
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
            {writers.map((writer, index) => (
              <button
                key={writer.id}
                onClick={() => setActiveWriter(index)}
                className={`flex-shrink-0 p-1 rounded-full transition-all ${
                  activeWriter === index
                    ? 'ring-4 ring-primary ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {writer.name.charAt(0)}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                {writers[activeWriter].name}
              </h3>
              <p className="text-gray-600 mb-1">
                {writers[activeWriter].faculty}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                出身: {writers[activeWriter].hometown}
              </p>
              <p className="text-lg italic text-gray-700">
                「{writers[activeWriter].quote}」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}