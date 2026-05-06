import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Settings } from '@/components/common/Settings'
import Providers from '@/provider/Providers'

export const metadata: Metadata = {
  title: 'Kamil | Portfolio',
  description: 'Kamil | Portfolio',
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
          <Navbar />
          <main className="mb-10 p-5 md:p-8">{children}</main>
          <Settings />
        </Providers>
      </body>
    </html>
  )
}