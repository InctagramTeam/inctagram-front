import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { ReturnComponent } from '@/shared/types'

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(
  ({ className, ...props }, ref): ReturnComponent => (
    <SheetPrimitive.Overlay
      className={clsx(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
      ref={ref}
    />
  )
)

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
