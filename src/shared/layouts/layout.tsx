import { PropsWithChildren, ReactElement } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={cn(
          `flex flex-col justify-center pt-[var(--header-height)] w-full items-center mx-auto`,
          inter.variable
        )}
      >
        <Sidebar />
        {children}
      </main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}