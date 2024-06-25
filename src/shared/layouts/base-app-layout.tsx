import { PropsWithChildren, ReactElement } from 'react'

import { ReturnComponent } from '@/shared'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'
import { Sidebar } from '@/widgets/sidebar'
import { NextPage } from 'next'

import { LayoutContextProvider } from '../lib/context/layout-context'

/** Общий Лайаут для всех страниц */
export const BaseAppLayout: NextPage<PropsWithChildren> = ({ children }): ReturnComponent => {
  /* const { data: meData } = useMeQuery() */ // авторизован ли я?
  const isAuth = true

  return (
    <>
      <Header isAuth={isAuth} />
      <Sidebar isAuth={isAuth} />
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
