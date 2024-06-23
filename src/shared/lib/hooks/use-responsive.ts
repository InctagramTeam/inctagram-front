import { useEffect, useState } from 'react'

import { Breakpoints, throttle } from '@/shared'

export const useResponsive = (delay = 1000) => {
  const [width, setWidth] = useState(global?.window && window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
    const throttledHandleResize = throttle(() => {
      setWidth(window.innerWidth)
    }, delay)
    window.addEventListener('resize', throttledHandleResize)
    return () => window.removeEventListener('resize', throttledHandleResize)
  }, [])

  const xl2 = width >= Breakpoints.XL2
  const xl = width < Breakpoints.XL2
  const lg = width < Breakpoints.XL
  const md = width < Breakpoints.LG
  const sm = width < Breakpoints.MD
  const xs = width < Breakpoints.SM

  return { width, md, xl, lg, xs, sm, xl2 }
}
