'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 w-1 bg-red-accent z-50 transition-all duration-150"
      style={{ height: `${progress}%` }}
    />
  )
}
