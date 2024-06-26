import { useEffect, useState } from 'react'

import { Breakpoints, throttle } from '@/shared'

export const useResponsive = (delay = 1000) => {
  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    setWidth(window.innerWidth)
    const throttledHandleResize = throttle(() => {
      setWidth(window.innerWidth)
    }, delay)

    window.addEventListener('resize', throttledHandleResize)

    return () => window.removeEventListener('resize', throttledHandleResize)
  }, [])

  const xl2 = width ? width >= Breakpoints.XL2 : false
  const xl = width ? width < Breakpoints.XL2 : false
  const lg = width ? width < Breakpoints.XL : false
  const md = width ? width < Breakpoints.LG : false
  const sm = width ? width < Breakpoints.MD : false
  const xs = width ? width < Breakpoints.SM : false

  return { lg, md, sm, xl, xl2, xs }
}
