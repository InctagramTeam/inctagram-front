import { PropsWithChildren } from 'react'

import HeadMeta from '@/components/HeadMeta/HeadMeta'

type Props = {
  title?: string
}

export const PageWrapper = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <HeadMeta title={title} />
      <>{children}</>
    </>
  )
}
