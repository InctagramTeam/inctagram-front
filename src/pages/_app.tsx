import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { AppQueryClientProvider, AuthProvider, TypeComponentAuthFields } from '@/app/providers'
import { useLoader } from '@/shared'
import { Toaster } from '@/shared/ui/toast/toaster'

import '@/app/styles/globals.scss'
import '@/app/styles/nprogress.scss'

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
