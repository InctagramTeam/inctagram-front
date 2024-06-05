import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { AppProvider } from '@/app/providers/app-provider'
import { useLoader } from '@/shared/lib/hooks/use-loader'

import '@/app/styles/globals.scss'
import '@/app/styles/nprogress.scss'

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()

  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
