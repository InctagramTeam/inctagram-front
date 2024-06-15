import * as React from 'react'

import { ReturnComponent } from '@/shared/types'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(
  ({ className, ...props }, ref): ReturnComponent => (
    <SheetPrimitive.Description
      className={clsx('text-sm text-muted-foreground', className)}
      ref={ref}
      {...props}
    />
  )
)

SheetDescription.displayName = SheetPrimitive.Description.displayName
