import { PropsWithChildren } from 'react'

import HeadMeta from '@/components/HeadMeta/HeadMeta'

type Props = {
  description?: string
  favicon?: string
  title?: string
}

export const PageWrapper = ({
  children,
  description,
  favicon,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <HeadMeta description={description} favicon={favicon} title={title} />
      <>{children}</>
    </>
  )
}
