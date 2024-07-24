import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { TypeComponentAuthFields, AppQueryClientProvider, AuthProvider } from '@/app/providers'
import { useLoader } from '@/shared'

import '@/app/styles/globals.scss'
import '@/app/styles/nprogress.scss'
import { Toaster } from '@/shared/ui/toast/toaster'

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
        <Toaster />
      </AuthProvider>
    </AppQueryClientProvider>
  )
}
