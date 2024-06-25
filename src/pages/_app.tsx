import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { AppQueryClientProvider } from '@/app/providers/ui/query-client-provider/app-query-client-provider'
import { useLoader } from '@/shared/lib/hooks'

import '@/app/styles/globals.scss'
import '@/app/styles/nprogress.scss'
import AuthProvider from '@/app/providers/ui/auth-provider/auth-provider'
import { TypeComponentAuthFields } from '@/app/providers/model/types/role-type'

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout & TypeComponentAuthFields) {
  useLoader()

  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <AppQueryClientProvider {...pageProps}>
      <AuthProvider Component={Component}>
        <Component {...pageProps} />
      </AuthProvider>
    </AppQueryClientProvider>
  )
}
