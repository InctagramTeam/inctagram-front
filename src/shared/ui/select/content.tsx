import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import { cn } from '@/shared/lib/utils'
import * as React from 'react'
import { ReturnComponent } from '@/shared/types'

export const SelectContent = forwardRef<
  ElementRef<typeof SelectRadix.Content>,
  ComponentPropsWithoutRef<typeof SelectRadix.Content>
>(({ children, className, position = 'popper', ...props }, ref): ReturnComponent => {
  const classes = {
    content: cn(
      `relative z-50 ring-1 ring-t-0 ring-Dark-100 data-[state=open]:ring-Light-100 
    bg-Dark-700 m-0 p-0 max-h-96
    overflow-hidden text-popover-foreground rounded-br-sm rounded-bl-sm`,
      className
    ),
    viewport: cn('p-0', position === 'popper' && 'min-h-fit w-full'),
  }

  return (
    <SelectRadix.Portal>
      <SelectRadix.Content className={classes.content} position={position} ref={ref} {...props}>
        <SelectRadix.Viewport className={classes.viewport}>{children}</SelectRadix.Viewport>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  )
})

SelectContent.displayName = 'SelectContent'
