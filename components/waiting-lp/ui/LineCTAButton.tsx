'use client'

interface LineCTAButtonProps {
  size?: 'normal' | 'large'
  variant?: 'default' | 'white'
}

export default function LineCTAButton({ 
  size = 'normal', 
  variant = 'default' 
}: LineCTAButtonProps) {
  const handleClick = () => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'LINE_FRIEND_ADD',
      })
    }
    
    // Redirect to LINE add friend URL
    // TODO: Replace with actual LINE URL
    window.open('https://line.me/R/ti/p/@oyakonoaida', '_blank')
  }
  
  const sizeClasses = size === 'large' 
    ? 'text-lg md:text-xl py-5 px-10' 
    : 'py-4 px-8'
    
  const variantClasses = variant === 'white'
    ? 'bg-white text-accent hover:bg-gray-100'
    : 'bg-accent text-white hover:bg-accent-dark'
  
  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses} 
        ${variantClasses}
        font-bold rounded-full shadow-lg hover:shadow-xl 
        transform hover:-translate-y-0.5 transition-all duration-200 
        flex items-center justify-center gap-3 mx-auto
      `}
    >
      <svg 
        className="w-6 h-6" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 12.22 14.7 14.04C13.5 15.94 12.14 17.22 10.46 17.94C10.18 18.04 9.9 18.09 9.62 18.09C9.32 18.09 9.03 18.04 8.74 17.94C8.41 17.82 8.14 17.59 7.96 17.29C7.78 16.99 7.69 16.64 7.69 16.29C7.69 16.13 7.71 15.97 7.76 15.81C7.84 15.53 7.97 15.26 8.16 15.03C8.34 14.8 8.57 14.62 8.83 14.5C9.86 13.96 10.76 13.15 11.47 12.14C12.21 11.08 12.67 9.95 12.82 8.76C12.87 8.36 13.05 8 13.33 7.71C13.61 7.42 13.97 7.25 14.37 7.21C14.56 7.19 14.75 7.2 14.93 7.25C15.29 7.34 15.59 7.54 15.82 7.82C16.04 8.1 16.17 8.44 16.19 8.8H16.64Z"/>
      </svg>
      <span>LINE友だち追加で先行登録</span>
    </button>
  )
}