import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Inter } from 'next/font/google'

import style from '@/styles/layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <main className={`${style.layout} ${inter.className}`}>{children}</main>
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
