'use client'

import * as React from 'react'
import { DayModifiers, DayPicker } from 'react-day-picker'
import { cn } from '@/utils/merge-cn'
import { ChevronRightIcon, ChevronLeftIcon } from '@/assets/icons'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

// about calendar in shadcn https://ui.shadcn.com/docs/components/calendar
const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  const modifiers: DayModifiers = {
    weekend: (date: Date) => date.getDay() === 0 || date.getDay() === 6,
  }

  const commonClasses = {
    dayPicker: cn(`py-[16px] px-[24px]`, className),
    iconsWrappers: cn(`flex h-full w-full justify-center items-center rounded-[50%] bg-Dark-100`),
    icons: cn(`fill-Light-100 w-[20px] h-[20px]`),
  }

  const dayPickerClassNames = {
    months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full',
    month: 'space-y-4',
    caption: 'flex justify-between items-center',
    caption_label: 'text-bold-text-16 text-Light-100 pl-[8px]',
    nav: 'space-x-1 flex items-center',
    nav_button: '',
    nav_button_previous: 'h-[36px] w-[36px]',
    nav_button_next: 'h-[36px] w-[36px]',
    table: 'w-full border-collapse !mt-[12px]',
    head_row: 'flex',
    head_cell: 'text-Light-900 rounded-md w-9 font-normal text-regular-text-16 py-[10px]',
    row: 'flex w-full mt-2',
    cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
    day: cn(
      'h-9 w-9 p-0 font-normal',
      'hover:bg-Primary-700 rounded-[50%]',
      'active:bg-Primary-900',
      'transition-color transition-bg duration-300 ease-in-out'
    ),
    day_range_start: 'rounded-r-none',
    day_range_middle: 'rounded-none',
    day_range_end: 'day-range-end rounded-l-none',
    day_selected: 'bg-Primary-900',
    day_today:
      'text-Primary-500 text-bold-text-16 !font-bold aria-selected:text-Light-100 hover:text-Primary-100',
    day_outside: 'text-Light-900 aria-selected:',
    day_disabled: 'text-Light-900',
    day_hidden: 'invisible',
    ...classNames,
  }

  const modifiersClassNames = {
    weekend: 'text-Danger-300',
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={commonClasses.dayPicker}
      modifiers={modifiers}
      weekStartsOn={1}
      classNames={dayPickerClassNames}
      modifiersClassNames={modifiersClassNames}
      components={{
        IconLeft: () => (
          <span className={commonClasses.iconsWrappers}>
            <ChevronLeftIcon className={commonClasses.icons} />
          </span>
        ),
        IconRight: () => (
          <span className={commonClasses.iconsWrappers}>
            <ChevronRightIcon className={commonClasses.icons} />
          </span>
        ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
