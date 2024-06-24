import { PropsWithChildren, ReactElement } from 'react'

import { LayoutContextProvider, ReturnComponent } from '@/shared'
import { Header, Main, Sidebar } from '@/widgets'
import { NextPage } from 'next'

/** Общий Лайаут для всех страниц */
export const BaseAppLayout: NextPage<PropsWithChildren> = ({ children }): ReturnComponent => {
  /* const { data: meData } = useMeQuery() */ // авторизован ли я?
  const isAuth = false

  return (
    <>
      <Header isAuth={isAuth} />
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
