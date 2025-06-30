import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'おやこの間 - 東大生が語る、親に言えなかった本音',
  description: '親と子どもの「あいだ」にある情報ギャップを可視化。東大生10名が受験期の本音を語る、新しい教育メディアが始まります。',
  keywords: ['おやこの間', '東大生', '受験', '教育', '親子関係', '体験談'],
  openGraph: {
    title: 'おやこの間 - 東大生が語る、親に言えなかった本音',
    description: '親と子どもの「あいだ」にある情報ギャップを可視化。',
    images: ['/og-image.jpg'],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'おやこの間',
    description: '東大生10名が受験期の本音を語る',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}