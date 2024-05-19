import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { useLoader } from '@/shared/lib/hooks/use-loader'

import '@/app/styles/nprogress.scss'
import '@/app/styles/globals.scss'

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
    <>
      <Component {...pageProps} />
    </>
  )
}
