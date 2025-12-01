'use client'

import { useEffect, useState } from 'react'

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Remove problematic attributes after hydration
    document.body.removeAttribute('data-new-gr-c-s-check-loaded')
    document.body.removeAttribute('data-gr-ext-installed')
    document.body.removeAttribute('cz-shortcut-listen')
  }, [])

  // Don't render anything until we're on the client to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return <>{children}</>
}
