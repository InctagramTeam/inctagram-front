import { ReactNode } from 'react'

import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { Inter } from 'next/font/google'
import { useResponsive } from '@/shared/lib/hooks'
import { LG_BREAKPOINT, SM_BREAKPOINT } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

type Props = {
  children?: ReactNode
  layoutMainChildren?: ReactNode
}

export const Main = ({ children }: Props) => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()

  if (!width) {
    return
  }

  const classes = {
    main: cn(
      `flex pt-[var(--header-height)] pl-[220px]`,
      (isCollapsed || width < LG_BREAKPOINT) && 'pl-[80px]',
      width < SM_BREAKPOINT && 'pl-0',
      inter.variable
    ),
  }

  return <main className={classes.main}>{children}</main>
}
