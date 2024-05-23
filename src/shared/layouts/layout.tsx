import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'
import { Sidebar } from '@/widgets/sidebar'
import { NextPage } from 'next'

import { LayoutContextProvider } from './context/layout-context'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        {children}
      </Main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return (
    <LayoutContextProvider>
      <Layout>{page}</Layout>
    </LayoutContextProvider>
  )
}
