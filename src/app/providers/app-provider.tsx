import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/api/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}
