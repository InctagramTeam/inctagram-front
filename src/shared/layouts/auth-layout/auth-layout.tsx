import { PropsWithChildren, ReactElement } from 'react'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main/main'
import { BaseAppLayout, LayoutContextProvider } from '@/shared/layouts'

type Props = PropsWithChildren

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export const getAuthLayout = (pageComponent: ReactElement) => {
  return (
    <LayoutContextProvider>
      <AuthLayout>{pageComponent}</AuthLayout>
    </LayoutContextProvider>
  )
}
