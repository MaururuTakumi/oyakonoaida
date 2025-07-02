import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'おやこの間 - 東大生が語る、親に言えなかった本音'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1E40AF 0%, #F97316 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              marginBottom: 20,
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            おやこの間
          </div>
          <div
            style={{
              fontSize: 36,
              marginBottom: 40,
              opacity: 0.9,
            }}
          >
            東大生が語る、親に言えなかった本音
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.8,
            }}
          >
            親と子どもの「あいだ」にある情報ギャップを可視化
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 24,
              opacity: 0.7,
            }}
          >
            事前登録受付中 - 永久20%OFF
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}