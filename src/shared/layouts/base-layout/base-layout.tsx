import { NextPage } from 'next'
import { PropsWithChildren, ReactElement } from 'react'
import { Layout } from '@/shared/layouts'

/** Обертка над Layout - если в приложении будет несколько Лайаутов */
export const BaseLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>
}

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
