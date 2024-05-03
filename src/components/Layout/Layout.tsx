import { PropsWithChildren, ReactElement } from 'react'

import { Container } from '@/components/ui/container'
import { cn } from '@/utils/merge-cn'
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
    <Container>
      <main className={cn('font-inter', inter.variable)}>{children}</main>
    </Container>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
