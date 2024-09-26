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
  className?: string
  layoutMainChildren?: ReactNode
}

export const Main = ({ children, className }: Props): ReturnComponent => {
  const { isCollapsed } = useLayoutContext()
  const { lg, xs } = useResponsive()

  const classes = {
    main: cn(
      `flex min-h-screen pt-[var(--header-height)] pl-[250px]`,
      (isCollapsed || lg) && 'pl-[80px]',
      xs && 'pl-0',
      inter.variable,
      className
    ),
  }

  return <main className={classes.main}>{children}</main>
}
