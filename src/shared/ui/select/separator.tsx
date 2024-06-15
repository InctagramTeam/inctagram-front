import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import { cn } from '@/shared/lib/utils'
import * as React from 'react'
import { ReturnComponent } from '@/shared/types'

export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectRadix.Separator>,
  ComponentPropsWithoutRef<typeof SelectRadix.Separator>
>(
  ({ className, ...props }, ref): ReturnComponent => (
    <SelectRadix.Separator
      className={cn('-mx-1 my-1 h-px bg-Dark-100/40 shadow-sm', className)}
      ref={ref}
      {...props}
    />
  )
)

SelectSeparator.displayName = 'SelectSeparator'
