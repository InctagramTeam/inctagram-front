import { PropsWithChildren, ReactElement } from 'react'

import { LayoutContextProvider, ReturnComponent } from '@/shared'
import { useMeQuery } from '@/shared/api/hooks/useMeQuery'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'

type Props = PropsWithChildren

export const AuthLayout = ({ children }: Props): ReturnComponent => {
  const { isSuccess: isAuth } = useMeQuery()

  return (
    <>
      <Header isAuth={isAuth} />
      <Main className={'pl-0'}>{children}</Main>
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
