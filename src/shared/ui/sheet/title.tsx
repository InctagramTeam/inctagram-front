import * as React from 'react'

import { ReturnComponent } from '@/shared/types'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(
  ({ className, ...props }, ref): ReturnComponent => (
    <SheetPrimitive.Title
      className={clsx('text-lg font-semibold text-foreground', className)}
      ref={ref}
      {...props}
    />
  )
)

SheetTitle.displayName = SheetPrimitive.Title.displayName
