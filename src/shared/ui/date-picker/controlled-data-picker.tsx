'use client'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Button, cn, Popover, PopoverContent, PopoverTrigger, Text } from '@/shared'
import { CalendarIcon, CalendarOutlineIcon } from '@/shared/assets/icons'
import { Calendar, CalendarProps } from '@/shared/ui/date-picker/calendar'
import * as React from 'react'
import { useId } from 'react'
import { format, isDate } from 'date-fns'

export type DatePickerProps = {
  calendarClassName?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  name?: string
  onOpenChange?: (value: boolean) => void
  // onValueChange: (value: string) => void
  open?: boolean
  textTrigger?: string
  triggerClassName?: string
  /** value, onValueChange и ref нужны для нативного инпута, чтобы можно было использовать react-hook-form */
  value: Date
} & CalendarProps

type Props<T extends FieldValues> = Omit<DatePickerProps, 'value'> & UseControllerProps<T>

export const ControlledDataPicker = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  id,
  shouldUnregister,
  onOpenChange,
  textTrigger,
  triggerClassName,
  calendarClassName,
  open,
  label,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, onBlur, value, disabled, ref, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  const classes = {
    button: cn(
      `h-auto py-[6px] px-[12px] gap-[24px] border border-Dark-300 !border-solid rounded-[2px] 
        transition-colors duration-300
        hover:bg-Dark-500 hover:!text-Light-100 hover:border-Dark-100 hover:translate-y-0
        active:!bg-Dark-500 active:!text-Light-100
        focus:!bg-Dark-500 focus:border-transparent focus:ring-opacity-100 focus:ring-offset-Primary-700 focus:ring-2
        focus-visible:bg-Dark-500 focus-visible:border-transparent focus-visible:ring-offset-Primary-700`,
      disabled && '!bg-Dark-500 !text-Light-900 pointer-events-none',
      error?.message && '!text-Danger-500 !bg-Dark-500 border-Danger-500',
      triggerClassName
    ),
    calendar: cn(`border-[1px] !border-Dark-300 bg-Dark-500 rounded-[2px] text-Light-100`),
    error: cn(`block !text-Danger-500 text-small-text-12`),
    popoverContent: cn(`w-[300px] p-0 !border-none`, calendarClassName),
    label: cn(`inline !text-Light-900 text-regular-text-14 text-left`, disabled && 'text-Dark-100'),
    triggerIcon: cn(`h-[24px] w-[24px] fill-Light-100`, error?.message && `fill-Danger-500`),
  }

  const generatedId = useId()
  const buttonId = id ?? generatedId
  const errorId = `${buttonId}-error`

  return (
    <div className={'flex flex-col items-start'}>
      <Popover onOpenChange={onOpenChange} open={open}>
        {label && (
          <Text
            asComponent={'label'}
            className={classes.label}
            htmlFor={buttonId}
            variant={'regular_text_16'}
          >
            {label}
          </Text>
        )}
        <PopoverTrigger asChild>
          <Button
            className={classes.button}
            fullWidth
            disabled={disabled}
            variant={'text'}
            id={buttonId}
          >
            {isDate(value) ? format(value, 'dd/MM/yyyy') : defaultValue}
            {open ? (
              <CalendarIcon className={classes.triggerIcon} />
            ) : (
              <CalendarOutlineIcon className={classes.triggerIcon} />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={classes.popoverContent}>
          <Calendar
            mode={'single'}
            selected={value}
            onSelect={onChange}
            className={classes.calendar}
          />
        </PopoverContent>
        {error?.message && (
          <span aria-labelledby={buttonId} className={classes.error} id={errorId} role={'alert'}>
            {error.message}
          </span>
        )}
      </Popover>
    </div>
  )
}
