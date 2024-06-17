import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'
import { Sidebar } from '@/widgets/sidebar'
import { NextPage } from 'next'

import { LayoutContextProvider } from './layout-context/layout-context'
import { ReturnComponent } from '@/shared'

/** Общий Лайаут для всех страниц */
export const BaseAppLayout: NextPage<PropsWithChildren> = ({ children }): ReturnComponent => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </>
  )
}
/** getBaseLayout: HOC - возвращаем страницу обёрнутую в Лайаут - убираем дублирование Хедера и Сайдбара на всех страницах в одно место */
export const getBaseAppLayout = (pageComponent: ReactElement): ReturnComponent => {
  return (
    <LayoutContextProvider>
      <BaseAppLayout>{pageComponent}</BaseAppLayout>
    </LayoutContextProvider>
  )
}
