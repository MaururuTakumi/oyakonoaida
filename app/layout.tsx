import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'おやこの間 - 東大生が語る、親に言えなかった本音',
  description: '親と子どもの情報ギャップを東大生ライターの体験談で埋める教育メディア',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}