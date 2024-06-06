import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'
import { Sidebar } from '@/widgets/sidebar'
import { NextPage } from 'next'

import { LayoutContextProvider } from './layout-context/layout-context'

/** Общий Лайаут для всех страниц */
export const BaseAppLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </>
  )
}
/** getBaseLayout: HOC - возвращаем страницу обёрнутую в Лайаут - убираем дублирование Хедера и Сайдбара на всех страницах в одно место */
export const getBaseAppLayout = (pageComponent: ReactElement) => {
  return (
    <LayoutContextProvider>
      <BaseAppLayout>{pageComponent}</BaseAppLayout>
    </LayoutContextProvider>
  )
}
