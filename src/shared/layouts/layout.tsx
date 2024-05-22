import { PropsWithChildren, ReactElement, useState } from 'react'

import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
import { NextPage } from 'next'
import { Main } from '@/widgets/main/main'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <Header />
      <Main isCollapsed={isCollapsed}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        {children}
      </Main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
