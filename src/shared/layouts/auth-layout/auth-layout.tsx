import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'

import { LayoutContextProvider, ReturnComponent } from '@/shared'

type Props = PropsWithChildren

export const AuthLayout = ({ children }: Props): ReturnComponent => {
  const isAuth = true

  return (
    <>
      <Header isAuth={isAuth} />
      <Main>{children}</Main>
    </>
  )
}

export const getAuthLayout = (pageComponent: ReactElement): ReturnComponent => {
  return (
    <LayoutContextProvider>
      <AuthLayout>{pageComponent}</AuthLayout>
    </LayoutContextProvider>
  )
}
