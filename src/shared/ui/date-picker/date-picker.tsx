import * as React from 'react'
import { ChangeEvent, forwardRef, useId } from 'react'

import { CalendarIcon, CalendarOutlineIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils/merge-cn'
import { Button } from '@/shared/ui/button'

import { Calendar, CalendarProps } from './calendar'

import { ReturnComponent } from '@/shared/types'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover/popover'

export type DatePickerProps = {
  triggerClassName?: string
  calendarClassName?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  name?: string
  onOpenChange?: (value: boolean) => void
  onValueChange?: (value: string) => void
  open?: boolean
  textTrigger: string
  /** value, onValueChange и ref нужны для нативного инпута, чтобы можно было использовать react-hook-form */
  value?: string
} & CalendarProps

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      triggerClassName,
      disabled,
      errorMessage,
      id,
      label,
      name,
      onOpenChange,
      open,
      textTrigger,
      value,
      onValueChange,
      className,
      calendarClassName,
      ...rest
    },
    ref
  ): ReturnComponent => {
    const classes = {
      button: cn(
        `h-auto py-[6px] px-[12px] gap-[24px] border border-Dark-300 !border-solid rounded-[2px] 
        transition-colors duration-300
        hover:bg-Dark-500 hover:!text-Light-100 hover:border-Dark-100 hover:translate-y-0
        active:!bg-Dark-500 active:!text-Light-100
        focus:!bg-Dark-500 focus:border-transparent focus:ring-opacity-100 focus:ring-offset-Primary-700 focus:ring-2
        focus-visible:bg-Dark-500 focus-visible:border-transparent focus-visible:ring-offset-Primary-700`,
        disabled && '!bg-Dark-500 !text-Light-900 pointer-events-none',
        errorMessage && '!text-Danger-500 !bg-Dark-500 border-Danger-500',
        triggerClassName
      ),
      calendar: cn(`border-[1px] !border-Dark-300 bg-Dark-500 rounded-[2px] text-Light-100`),
      error: cn(`block !text-Danger-500 text-small-text-12`),
      label: cn(
        `block !text-Light-900 text-regular-text-14 text-left`,
        disabled && 'text-Dark-100'
      ),
      popoverContent: cn(`w-[300px] p-0 !border-none`, calendarClassName),
      triggerIcon: cn(`h-[24px] w-[24px] fill-Light-100`, errorMessage && `fill-Danger-500`),
    }

    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = `${inputId}-error`

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(e.currentTarget.value)
    }

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
              onChange={changeValueHandler}
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
          {errorMessage && (
            <span aria-labelledby={inputId} className={classes.error} id={errorId} role={'alert'}>
              {errorMessage}
            </span>
          )}
        </Popover>
      </>
    )
  }
)

DatePicker.displayName = 'DatePicker'

// Example
// import { addDays, format } from 'date-fns'
// import { DateRange } from "react-day-picker";
// const ExampleDatePicker = () => {
//   const [date, setDate] = useState<DateRange | undefined>({
//     from: new Date(2022, 0, 20),
//     to: addDays(new Date(2022, 0, 20), 20),
//   })
//
//   const textTrigger = date?.from
//     ? date.to
//       ? `${format(date.from, 'LLL dd, y')} - ${format(date.to, 'LLL dd, y')}`
//       : format(date.from, 'LLL dd, y')
//     : 'Pick a date'
//
//   const [open, setOpen] = useState(false)
//
//   return (
//     <div>
//       <DatePicker
//         initialFocus
//         mode={'range'}
//         label={'label'}
//         onOpenChange={setOpen}
//         onSelect={setDate}
//         open={open}
//         id={'id'}
//         selected={date}
//         textTrigger={textTrigger}
//       />
//     </div>
//   )
// }
