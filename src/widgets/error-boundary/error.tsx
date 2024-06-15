import { ComponentPropsWithoutRef } from 'react'

import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui'
import { clsx } from 'clsx'

type ErrorPageProps = {
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Error = ({ className }: ErrorPageProps): ReturnComponent => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={clsx(`flex h-[100dvh] w-full flex-col items-center justify-center`, className)}>
      <p>An unexpected error occurred</p>
      <Button onClick={reloadPage} variant={'destructive'}>
        Try refreshing the page
      </Button>
    </div>
  )
}
