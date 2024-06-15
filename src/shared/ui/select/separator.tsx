import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import * as SelectRadix from '@radix-ui/react-select'

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
