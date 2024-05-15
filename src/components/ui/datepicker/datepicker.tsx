'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar, CalendarProps } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { cn } from '@/utils/merge-cn'
import { CalendarIcon, CalendarOutlineIcon } from '@/assets/icons'
import { ReactNode, useState } from 'react'

export type DatePickerProps = {
  className?: string
  label?: string
  error?: string
  disabled?: boolean
  // Контент тригера (без иконки) передается в качества родителя
  children?: ReactNode
  id?: string
  open?: boolean
  onOpenChange?: (value: boolean) => void
} & CalendarProps

export const DatePicker = ({
  label,
  error,
  className,
  disabled,
  children,
  id,
  open,
  onOpenChange,
  ...rest
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = {
    label: cn(`block !text-Light-900 text-regular-text-14`, disabled && 'text-Dark-100'),
    button: cn(
      `p-[6px_12px] bg-transparent !text-Light-100 justify-between shadow-none transition-colors duration-300 border !border-solid border-Dark-300
      focus:bg-Dark-500 focus:!ring-offset-0 focus:border-transparent
      hover:!bg-Dark-500 hover:border-Dark-100 hover:shadow-none hover:translate-y-0
      active:bg-Dark-500`,
      disabled && '!bg-Dark-500 !text-Light-900 pointer-events-none',
      error && '!text-Danger-500 border-Danger-500'
    ),
    error: cn(`!text-Danger-500 text-small-text-12`),
    triggerIcon: cn(`h-[24px] w-[24px] fill-Light-100`, error && `fill-Danger-500`),
    popoverContent: cn(`w-[300px] p-0 !border-none`),
    calendar: cn(`border-[1px] !border-Dark-300 bg-Dark-500 rounded-[2px]`),
  }

  return (
    <>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      <Popover onOpenChange={onOpenChange} open={open}>
        <PopoverTrigger disabled={disabled} asChild>
          <Button className={classes.button} id={id} disabled={disabled}>
            {children}
            {open ? (
              <CalendarIcon className={classes.triggerIcon} />
            ) : (
              <CalendarOutlineIcon className={classes.triggerIcon} />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={classes.popoverContent}>
          <Calendar className={classes.calendar} {...rest} />
        </PopoverContent>
        {error && <span className={classes.error}>{error}</span>}
      </Popover>
    </>
  )
}

DatePicker.displayName = 'DatePicker'
