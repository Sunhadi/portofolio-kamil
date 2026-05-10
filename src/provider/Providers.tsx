'use client'

import { ThemeProvider } from '@/provider/themesProvider'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Pindahkan Dynamic Import ke sini
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const Settings = dynamic(() => import('@/components/common/Settings'), { ssr: false })

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div style={{ opacity: mounted ? 1 : 0 }}>
        {/* Navbar dan Settings diletakkan di sini agar terbungkus ThemeProvider */}
        <Navbar />
        {children}
        <Settings />
      </div>
    </ThemeProvider>
  )
}