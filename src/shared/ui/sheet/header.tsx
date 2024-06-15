import * as React from 'react'
import { clsx } from 'clsx'
import { ReturnComponent } from '@/shared/types'
export const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): ReturnComponent => (
  <div className={clsx('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)

SheetHeader.displayName = 'SheetHeader'
