import { useEffect, useState } from 'react'

export const useResponsiveSidebar = () => {
  const [width, setWidth] = useState<null | number>(null)
  const mobileBreakpoint_360 = 360
  const tabletBreakpoint_768 = 768

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize)

      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return {
    width,
    mobileBreakpoint_360,
    tabletBreakpoint_768,
  }
}
