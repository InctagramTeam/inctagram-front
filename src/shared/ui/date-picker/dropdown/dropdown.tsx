import React from 'react'
import { DropdownProps } from 'react-day-picker'

import { Select, SelectContent, SelectItem, SelectTrigger, cn, useResponsive } from '@/shared'

export const Dropdown = (props: DropdownProps) => {
  const selectedOption = props.options?.find(({ value }) => value === props.value)
  const { sm } = useResponsive()

  const classes = {
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

  const handleCalendarChange = (
    _value: number | string,
    _e: React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>

    _e(_event)
  }

  return (
    <Select
      onValueChange={value => {
        if (props.onChange) {
          handleCalendarChange(value, props.onChange)
        }
      }}
      value={String(props.value)}
    >
      <SelectTrigger className={classes.trigger}>
        <div className={classes.triggerInner}>{selectedOption?.label}</div>
      </SelectTrigger>
      <SelectContent className={classes.content}>
        {props.options &&
          props.options.map(el => (
            <SelectItem className={classes.item} key={el.value} value={el.value + ''}>
              <div className={classes.itemInner}>{el.label}</div>
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}
