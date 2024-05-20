'use client'

import * as React from 'react'
import { cn } from '@/utils/merge-cn'

import { Calendar, CalendarProps } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { CalendarIcon, CalendarOutlineIcon } from '@/assets/icons'
import { forwardRef } from 'react'
import { Button } from '@/components/ui/button'

export type DatePickerProps = {
  className?: string
  disabled?: boolean
  label?: string
  id: string
  error?: string
  name?: string
  textTrigger: string
  onOpenChange?: (value: boolean) => void
  open?: boolean
  value?: string
} & CalendarProps

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      className,
      disabled,
      value,
      id,
      name,
      error,
      onOpenChange,
      label,
      textTrigger,
      open,
      ...rest
    },
    ref
  ) => {
    const classes = {
      button: cn(
        `h-auto py-[6px] px-[12px] gap-[24px] border border-Dark-300 !border-solid rounded-[2px] 
        transition-colors duration-300
        hover:bg-Dark-500 hover:!text-Light-100 hover:border-Dark-100 hover:translate-y-0
        active:bg-Dark-500
        focus:bg-Dark-500 focus:border-transparent focus:ring-opacity-100
        focus-visible:bg-Dark-500 focus-visible:border-transparent focus-visible:ring-opacity-100`,
        disabled && '!bg-Dark-500 !text-Light-900 pointer-events-none',
        error && '!text-Danger-500 border-Danger-500'
      ),
      calendar: cn(`border-[1px] !border-Dark-300 bg-Dark-500 rounded-[2px]`),
      error: cn(`block !text-Danger-500 text-small-text-12`),
      label: cn(
        `block !text-Light-900 text-regular-text-14 text-left`,
        disabled && 'text-Dark-100'
      ),
      popoverContent: cn(`w-[300px] p-0 !border-none`),
      triggerIcon: cn(`h-[24px] w-[24px] fill-Light-100`, error && `fill-Danger-500`),
    }

    const errorId = `${id}-error-id`
    const inputId = `${id}-input-id`

    return (
      <>
        <Popover onOpenChange={onOpenChange} open={open}>
          <label htmlFor={id} className={classes.label}>
            {label && label}
            <input
              className={'hidden'}
              type="date"
              value={value ?? textTrigger}
              name={name}
              onChange={() => {}}
              ref={ref}
              id={inputId}
              aria-describedby={errorId}
            />
          </label>
          <PopoverTrigger asChild>
            <Button variant={'text'} className={classes.button} disabled={disabled}>
              {textTrigger}
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
          {error && (
            <span className={classes.error} id={errorId} role="alert" aria-labelledby={inputId}>
              {error}
            </span>
          )}
        </Popover>
      </>
    )
  }
)

DatePicker.displayName = 'DatePicker'
