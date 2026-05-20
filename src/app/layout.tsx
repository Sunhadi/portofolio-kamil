import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/provider/Providers'

export const metadata: Metadata = {
  title: 'Kamil | Portfolio',
  description: 'Ahmad Sunhadi Kamil | Portfolio',
  icons: {
    icon: '/kamil-logo.svg', // Lokasi file di folder public
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <Providers>
          <main className="relative mb-10 p-5 md:p-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}