export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Google Analytics のページビューを計測
export const pageview = (url: string) => {
  if (!GA_ID) return
  
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

// Google Analytics のイベントを計測
type GtagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (!GA_ID) return
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// LINE友だち追加のコンバージョンを計測
export const trackLineAddFriend = () => {
  event({
    action: 'click',
    category: 'conversion',
    label: 'line_add_friend',
  })
}

// TypeScript用のグローバル宣言
declare global {
  interface Window {
    gtag: (
      key: string,
      trackingId: string,
      config?: { page_path?: string; [key: string]: any }
    ) => void
  }
}