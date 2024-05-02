import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/utils/merge-cn'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <main className={cn('min-h-screen font-inter', inter.variable)}>{children}</main>
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
