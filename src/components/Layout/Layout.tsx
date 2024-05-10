import { PropsWithChildren, ReactElement } from 'react'
import { cn } from '@/utils/merge-cn'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/widgets'

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
          `relative flex flex-col justify-center gap-[15px] flex-wrap
          pt-header-height w-full max-w-[1280px] mx-auto`,
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
