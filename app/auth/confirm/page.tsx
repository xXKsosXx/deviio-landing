'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function AuthConfirmContent() {
  const params = useSearchParams()

  useEffect(() => {
    const token = params.get('token')
    const type = params.get('type')

    if (token) {
      const appUrl = `deviio://auth?token=${token}&type=${type}`
      const storeUrl = 'https://play.google.com/store/apps/details?id=com.lumileo.deviio'

      window.location.href = appUrl

      setTimeout(() => {
        window.location.href = storeUrl
      }, 2000)
    }
  }, [params])

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      textAlign: 'center',
      padding: '80px 24px',
      background: '#f0f4ff',
      minHeight: '100vh'
    }}>
      <div style={{
        background: '#004ac6',
        width: 64,
        height: 64,
        borderRadius: 16,
        margin: '0 auto 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{ color: 'white', fontSize: 36, fontWeight: 900 }}>D</span>
      </div>
      <h1 style={{ color: '#0a0f1e', fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
        Email confirm&eacute; !
      </h1>
      <p style={{ color: '#4a5068', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
        Ouverture de Deviio en cours...<br />
        Si l&apos;app ne s&apos;ouvre pas automatiquement,<br />
        t&eacute;l&eacute;chargez-la sur Google Play.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.lumileo.deviio"
        style={{
          background: '#004ac6',
          color: 'white',
          padding: '14px 32px',
          borderRadius: 100,
          textDecoration: 'none',
          fontWeight: 700,
          display: 'inline-block'
        }}
      >
        Ouvrir sur Google Play
      </a>
    </div>
  )
}

export default function AuthConfirm() {
  return (
    <Suspense fallback={
      <div style={{
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '80px 24px',
        background: '#f0f4ff',
        minHeight: '100vh'
      }}>
        <p>Chargement...</p>
      </div>
    }>
      <AuthConfirmContent />
    </Suspense>
  )
}
