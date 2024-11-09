import React, { useState } from 'react'
import { DropdownProps } from 'react-day-picker'

import { Select, SelectContent, SelectItem, SelectTrigger, cn, useResponsive } from '@/shared'
import { ChevronIcon } from '@/shared/assets/icons'

export const DropdownDatePicker = (props: DropdownProps) => {
  // const [value, setValue] = useState<string>()
  const { sm } = useResponsive()

  const { options, value, defaultValue, dir, ...rest } = props

  const classes = {
    flag: 'w-[20px] h-[20px] object-contain',
    icon: 'basis-[24px] shrink-0 h-[24px] icon transition-rotate duration-300',
    trigger: cn(
      `[&_.icon]:data-[state=open]:rotate-180 focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !sm &&
        `gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      sm && `gap-[2px] border-none justify-normal min-w-max ring-0 p-0 `
    ),
    triggerInner: cn(!sm && `flex items-center gap-[12px]`, sm && `basis-[20px] shrink-0 h-[20px]`),
    content: cn(
      'bg-Dark-500 border border-Light-100 w-[--radix-popper-anchor-width]',
      !sm && ' border-t-0 rounded-b-[2px]',
      sm && 'min-w-0 rounded-[2px]'
    ),
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      !sm && ``,
      sm && 'max-w-max'
    ),
    itemInner: 'flex gap-[12px] text-inherit',
  }

  return (
    <Select {...rest} value={String(value)}>
      <SelectTrigger className={classes.trigger}>
        <div className={classes.triggerInner}>{value}</div>
        <ChevronIcon aria-hidden className={classes.icon} />
      </SelectTrigger>
      <SelectContent className={classes.content}>
        <>
          {options?.map(item => {
            return (
              <SelectItem
                className={classes.item}
                key={item.value}
                {...item}
                value={String(item.value)}
              >
                <div className={classes.itemInner}>{item.label}</div>
              </SelectItem>
            )
          })}
        </>
      </SelectContent>
    </Select>
  )
}

export default DropdownDatePicker
