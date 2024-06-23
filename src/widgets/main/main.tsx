import { ReactNode } from 'react'

import { LG_BREAKPOINT, SM_BREAKPOINT } from '@/shared/constants'
import { useLayoutContext } from '@/shared/lib/context/layout-context/layout-context'
import { useResponsive } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

type Props = {
  children: ReactNode
  layoutMainChildren?: ReactNode
}

export const Main = ({ children }: Props): ReturnComponent => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const classes = {
    main: cn(
      `flex min-h-screen pt-[var(--header-height)] pl-[220px]`,
      (isCollapsed || width < LG_BREAKPOINT) && 'pl-[80px]',
      (width < SM_BREAKPOINT || !isCollapsed) && 'pl-0',
      inter.variable
    ),
  }

  return <main className={classes.main}>{children}</main>
}
