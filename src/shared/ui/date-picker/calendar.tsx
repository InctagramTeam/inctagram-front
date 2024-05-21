import * as React from 'react'
import { DayModifiers, DayPicker } from 'react-day-picker'

import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/assets/icons'
import { EMPTY_STRING } from '@/shared/constants/base'
import { cn } from '@/shared/lib/utils/merge-cn'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

// about calendar in shad-cn https://ui.shadcn.com/docs/components/calendar
const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  const modifiers: DayModifiers = {
    weekend: (date: Date) => date.getDay() === 0 || date.getDay() === 6,
  }

  const commonClasses = {
    dayPicker: cn(`py-[16px] px-[24px]`, className),
    icons: cn(`fill-Light-100 w-[20px] h-[20px]`),
  }

  const dayPickerClassNames = {
    caption: 'flex justify-between items-center',
    caption_label: 'text-bold-text-16 text-Light-100 pl-[8px]',
    cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
    day: cn(
      'h-9 w-9 p-0 text-regular-text-16',
      'hover:bg-Primary-700 rounded-[50%]',
      'active:bg-Primary-900',
      'transition-color transition-bg duration-300 ease-in-out'
    ),
    day_disabled: 'text-Light-900',
    day_hidden: 'invisible',
    day_outside: 'text-Light-900 aria-selected:',
    day_range_end: 'day-range-end rounded-l-none',
    day_range_middle: 'rounded-none',
    day_range_start: 'rounded-r-none',
    day_selected: 'bg-Primary-900',
    day_today:
      'text-Primary-500 text-bold-text-16 !font-bold aria-selected:text-Light-100 hover:text-Primary-100',
    head_cell: 'text-Light-900 rounded-md w-9 font-normal text-regular-text-16 py-[10px]',
    head_row: 'flex',
    month: 'space-y-4',
    months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full',
    nav: 'space-x-1 flex items-center',
    nav_button: cn(
      `flex justify-center items-center h-[36px] w-[36px] outline-none `,
      'bg-Dark-100 rounded-full border-2 border-transparent',
      `duration-300 transition-bg transition-border`,
      `hover:bg-Dark-300 active:bg-Light-900`,
      `focus-visible:border-Primary-500`
    ),
    nav_button_next: EMPTY_STRING,
    nav_button_previous: EMPTY_STRING,
    row: 'flex w-full mt-2',
    table: 'w-full border-collapse !mt-[12px]',
    ...classNames,
  }

  const modifiersClassNames = {
    weekend: 'text-Danger-300',
  }

  return (
    <DayPicker
      className={commonClasses.dayPicker}
      classNames={dayPickerClassNames}
      components={{
        IconLeft: () => <ChevronLeftIcon className={commonClasses.icons} />,
        IconRight: () => <ChevronRightIcon className={commonClasses.icons} />,
      }}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
