'use client'

import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'
import { useEffect, useState } from 'react'

export function GithubStats() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Memastikan komponen hanya dirender di client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Tampilkan placeholder atau loading sederhana agar layout tidak bergeser
    return (
      <div className="h-[150px] w-full animate-pulse rounded-lg border-4 border-black-primary bg-gray-200 dark:bg-gray-800" />
    )
  }

  return (
    <div className="cursor-pointer rounded-lg border-4 border-black-primary bg-white p-4 shadow-image-card duration-150 hover:shadow-button-card hover:shadow-black-primary dark:bg-black">
      <GitHubCalendar
        username="Sunhadi" // Pastikan username GitHub kamu benar
        blockSize={15}      // Sedikit diperkecil agar pas di mobile
        blockMargin={4}
        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        hideTotalCount={false}
      />
    </div>
  )
}