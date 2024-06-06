import { useEffect, useState } from 'react'

export const useResponsive = () => {
  const [width, setWidth] = useState<null | number>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth)

      window.addEventListener('resize', handleWindowResize)

      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { width }
}
