import { PropsWithChildren, ReactElement, useState } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
import clsx from 'clsx'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <Header />
      <main
        className={clsx(
          isCollapsed ? 'pl-[80px]' : 'pl-[220px]',
          `flex flex-col justify-center pt-[var(--header-height)] w-full items-center`,
          inter.variable
        )}
      >
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        {children}
      </main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
