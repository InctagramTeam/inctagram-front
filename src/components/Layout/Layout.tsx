import { PropsWithChildren, ReactElement } from 'react'

import { cn } from '@/utils/merge-cn'
import { Header } from '@/widgets'
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
          `flex flex-col justify-center pt-header-height w-full items-center mx-auto`,
          inter.variable
        )}
      >
        {children}
      </main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
