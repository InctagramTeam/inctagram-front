import { ReactNode } from 'react'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { useLayoutContext } from '@/shared/layouts/context/layout-context'

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

  return (
    <main
      className={clsx(
        isCollapsed ? 'pl-[80px]' : 'pl-[220px]',
        `flex flex-col justify-center pt-[var(--header-height)] w-full items-center`,
        inter.variable
      )}
    >
      {children}
    </main>
  )
}
