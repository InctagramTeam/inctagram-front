import { ReactNode } from 'react'

import { ReturnComponent, cn, useLayoutContext, useResponsive } from '@/shared'
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
  const { md, xs } = useResponsive()

  const classes = {
    main: cn(
      `flex min-h-screen pt-[var(--header-height)] pl-[220px]`,
      (isCollapsed || md) && 'pl-[80px]',
      (xs || !isCollapsed) && 'pl-0',
      inter.variable
    ),
  }

  return <main className={classes.main}>{children}</main>
}
