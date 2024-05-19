'use client'
import { useEffect, useState } from 'react'

import { DesktopSidebar, MobileSidebar, NavLink } from '@/widgets/sidebar'

type Props = {
  links: NavLink[]
}

export const Sidebar = ({ links }: Props) => {
  const [width, setWidth] = useState<null | number>(null)
  const breakpoint = 360

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth)

      window.addEventListener('resize', handleWindowResize)

      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  if (width === null) {
    return null
  }

  return (
    <>
      {width < breakpoint ? (
        <MobileSidebar links={links} />
      ) : (
        <DesktopSidebar className={'flex '} links={links} />
      )}
    </>
  )
}
