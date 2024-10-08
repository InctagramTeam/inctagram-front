import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ChevronIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import * as SelectRadix from '@radix-ui/react-select'

export const SelectContent = forwardRef<
  ElementRef<typeof SelectRadix.Content>,
  ComponentPropsWithoutRef<typeof SelectRadix.Content>
>(({ children, className, position = 'popper', ...props }, ref): ReturnComponent => {
  const classes = {
    content: cn(
      `relative z-50 max-h-96 overflow-hidden rounded-br-sm rounded-bl-sm bg-Dark-700 text-popover-foreground shadow-md ring-1 ring-t-0 ring-Dark-100 
     m-0 p-0 data-[state=open]:ring-Light-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
     data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
     `,
      position === 'popper' &&
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      className
    ),
    viewport: cn(
      'p-0',
      position === 'popper' &&
        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
    ),
  }

  return (
    <SelectRadix.Portal>
      <SelectRadix.Content className={classes.content} position={position} ref={ref} {...props}>
        <SelectScrollUpButton />
        <SelectRadix.Viewport className={classes.viewport}>{children}</SelectRadix.Viewport>
        <SelectScrollDownButton />
      </SelectRadix.Content>
    </SelectRadix.Portal>
  )
})

SelectContent.displayName = 'SelectContent'

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectRadix.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectRadix.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectRadix.ScrollUpButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    ref={ref}
    {...props}
  >
    <ChevronIcon className={cn('chevron-up rotate-180')} />
  </SelectRadix.ScrollUpButton>
))

SelectScrollUpButton.displayName = 'SelectScrollUpButton'

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectRadix.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectRadix.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectRadix.ScrollDownButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    ref={ref}
    {...props}
  >
    <ChevronIcon className={cn('chevron-down')} />
  </SelectRadix.ScrollDownButton>
))

SelectScrollDownButton.displayName = 'SelectScrollDownButton'
