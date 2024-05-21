import * as React from 'react'
import { forwardRef } from 'react'

import { CalendarIcon, CalendarOutlineIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils/merge-cn'
import { Button } from '@/shared/ui/button'

import { Calendar, CalendarProps } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export type DatePickerProps = {
  className?: string
  disabled?: boolean
  error?: string
  id: string
  label?: string
  name?: string
  onOpenChange?: (value: boolean) => void
  open?: boolean
  textTrigger: string
  value?: string
} & CalendarProps

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      className,
      disabled,
      error,
      id,
      label,
      name,
      onOpenChange,
      open,
      textTrigger,
      value,
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
          <label className={classes.label} htmlFor={id}>
            {label && label}
            <input
              aria-describedby={errorId}
              className={'hidden'}
              id={inputId}
              name={name}
              onChange={() => {}}
              ref={ref}
              type={'date'}
              value={value ?? textTrigger}
            />
          </label>
          <PopoverTrigger asChild>
            <Button className={classes.button} disabled={disabled} variant={'text'}>
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
            <span aria-labelledby={inputId} className={classes.error} id={errorId} role={'alert'}>
              {error}
            </span>
          )}
        </Popover>
      </>
    )
  }
)

DatePicker.displayName = 'DatePicker'
