import { ReactNode } from 'react'

import { queryClient } from '@/shared/api/query-client'
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
  children: ReactNode
  pageProps: Record<string, unknown>
}

export const AppQueryClientProvider = ({ children, pageProps = {} }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>{children}</HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} /> {/* вкл. девтулз реакт-квери */}
    </QueryClientProvider>
  )
}
