import { useEffect, useState } from 'react'

import { useThrottle } from '@/shared'

export const useResponsive = (delay = 1000) => {
  const [width, setWidth] = useState<null | number>(null)

  useEffect(() => {
    setWidth(window.innerWidth)
    const throttledHandleResize = useThrottle(() => {
      setWidth(window.innerWidth)
    }, delay)

    window.addEventListener('resize', throttledHandleResize)

    return () => window.removeEventListener('resize', throttledHandleResize)
  }, [])

  return { width }
}
