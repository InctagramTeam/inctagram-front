'use client'

import * as React from 'react'
import { ReactNode, useState } from 'react'

import { CalendarIcon, CalendarOutlineIcon } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/merge-cn'

import { Calendar, CalendarProps } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export type DatePickerProps = {
  className?: string
  // Контент тригера (без иконки)
  contentTrigger: ReactNode
  disabled?: boolean
  error?: string
  id?: string
  label?: string
  onOpenChange?: (value: boolean) => void
  open?: boolean
} & CalendarProps

export const DatePicker = ({
  className,
  contentTrigger,
  disabled,
  error,
  id,
  label,
  onOpenChange,
  open,
  ...rest
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = {
    button: cn(
      `p-[6px_12px] bg-transparent !text-Light-100 justify-between shadow-none transition-colors duration-300 border !border-solid border-Dark-300
      focus:bg-Dark-500 focus:!ring-offset-0 focus:border-transparent
      hover:!bg-Dark-500 hover:border-Dark-100 hover:shadow-none hover:translate-y-0
      active:bg-Dark-500`,
      disabled && '!bg-Dark-500 !text-Light-900 pointer-events-none',
      error && '!text-Danger-500 border-Danger-500'
    ),
    calendar: cn(`border-[1px] !border-Dark-300 bg-Dark-500 rounded-[2px]`),
    error: cn(`!text-Danger-500 text-small-text-12`),
    label: cn(`block !text-Light-900 text-regular-text-14`, disabled && 'text-Dark-100'),
    popoverContent: cn(`w-[300px] p-0 !border-none`),
    triggerIcon: cn(`h-[24px] w-[24px] fill-Light-100`, error && `fill-Danger-500`),
  }

  return (
    <>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      <Popover onOpenChange={onOpenChange} open={open}>
        <PopoverTrigger asChild disabled={disabled}>
          <Button className={classes.button} disabled={disabled} id={id}>
            {contentTrigger}
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
