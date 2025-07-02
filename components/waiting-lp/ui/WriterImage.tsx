import Image from 'next/image'

interface WriterImageProps {
  name: string
  imageUrl?: string
  size?: 'small' | 'medium' | 'large'
}

export default function WriterImage({ name, imageUrl, size = 'medium' }: WriterImageProps) {
  const sizeClasses = {
    small: 'w-16 h-16 md:w-20 md:h-20',
    medium: 'w-20 h-20 md:w-24 md:h-24',
    large: 'w-24 h-24 md:w-32 md:h-32',
  }
  
  const textSizeClasses = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl',
  }
  
  // 名前から頭文字を取得
  const initial = name.charAt(0)
  
  // プレースホルダーの背景色（名前によって色を変える）
  const colorIndex = name.charCodeAt(0) % 5
  const bgColors = [
    'bg-primary/20 text-primary',
    'bg-secondary/20 text-secondary',
    'bg-accent/20 text-accent',
    'bg-purple-100 text-purple-700',
    'bg-pink-100 text-pink-700',
  ]
  
  if (imageUrl) {
    return (
      <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden`}>
        <Image
          src={imageUrl}
          alt={`${name}の写真`}
          fill
          className="object-cover"
          sizes={size === 'large' ? '128px' : size === 'medium' ? '96px' : '80px'}
        />
      </div>
    )
  }
  
  // プレースホルダー表示
  return (
    <div className={`${sizeClasses[size]} ${bgColors[colorIndex]} rounded-full flex items-center justify-center`}>
      <span className={`${textSizeClasses[size]} font-bold`}>
        {initial}
      </span>
    </div>
  )
}