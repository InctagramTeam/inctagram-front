import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import { cn } from '@/shared/lib/utils'
import * as React from 'react'
import { ReturnComponent } from '@/shared/types'

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectRadix.Trigger>,
  { icon?: ReactNode } & ComponentPropsWithoutRef<typeof SelectRadix.Trigger>
>(({ children, className, icon, ...props }, ref): ReturnComponent => {
  const classes = {
    trigger: cn(
      `h-[36px] flex items-center justify-between  
  bg-Dark-700 px-2 py-2 text-base font-normal outline-none rounded-sm ring-1 
  data-[state=closed]:ring-Dark-100 
  data-[state=open]:rounded-br-none data-[state=open]:rounded-bl-none 
  data-[state=open]:ring-Light-100 data-[state=open]:text-Light-100 
  hover:cursor-pointer shadow-sm 
  focus:text-Light-900 focus:ring-Primary-500 focus:ring-2 
  focus:rounded-sm disabled:cursor-not-allowed disabled:text-Dark-100/60 

  [&_.chevron-up]:hidden [&_.chevron-up]:data-[state=open]:block 
  [&_.chevron-up]:data-[state=open]:-translate-y-[2px] 
  [&_.chevron-down]:block [&_.chevron-down]:data-[state=open]:hidden`,
      className
    ),
  }

  return (
    <SelectRadix.Trigger {...props} className={classes.trigger} ref={ref}>
      {children}
      <SelectRadix.Icon asChild>{icon}</SelectRadix.Icon>
    </SelectRadix.Trigger>
  )
})

SelectTrigger.displayName = 'SelectTrigger'
