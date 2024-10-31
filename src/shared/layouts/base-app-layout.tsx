import { PropsWithChildren, ReactElement } from 'react'

import { useLogout } from '@/feature'
import { LayoutContextProvider, ReturnComponent } from '@/shared'
import { useMeQuery } from '@/shared/api/hooks/useMeQuery'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'
import { Sidebar } from '@/widgets/sidebar'
import { NextPage } from 'next'

/** Общий Лайаут для всех страниц */
export const BaseAppLayout: NextPage<PropsWithChildren> = ({ children }): ReturnComponent => {
  const { isSuccess: isAuth } = useMeQuery()
  const { mutate } = useLogout()
  const handleLogout = () => {
    mutate()
  }

  return (
    <>
      <Header isAuth={isAuth} logout={handleLogout} />
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
