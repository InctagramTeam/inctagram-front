import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { Select, SelectContent, SelectItem, SelectTrigger, useResponsive } from '@/shared'
import { cn } from '@/shared/lib/utils/merge-cn'
import { Dropdown } from '@/shared/ui/date-picker/dropdown'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

// about calendar in shad-cn https://ui.shadcn.com/docs/components/calendar
const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: { onChange?: React.ChangeEventHandler<HTMLSelectElement> } & CalendarProps) => {
  const { sm } = useResponsive()

  const classes = {
    nav_buttons: cn(
      `flex justify-center items-center h-[36px] w-[36px] outline-none `,
      'bg-Dark-100 rounded-full border-2 border-transparent',
      `duration-300 transition-bg transition-border`,
      `hover:bg-Dark-300 active:bg-Light-900`,
      `focus-visible:border-Primary-500`
    ),
  }

  const dayPickerClassNames = {
    caption_label: 'hidden',
    cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',

    head_cell: 'text-Light-900 rounded-md w-9 font-normal text-regular-text-16 py-[10px]',
    head_row: 'flex',
    month: 'space-y-4',
    months: 'relative',
    nav: 'absolute top-0 right-0 space-x-[2px] flex items-center',
    button_previous: classes.nav_buttons,
    button_next: classes.nav_buttons,
    row: 'flex w-full mt-2',
    table: 'w-full border-collapse !mt-[12px]',
    dropdowns: 'flex items-center gap-2',
    dropdown: cn(
      `h-[36px] flex items-center justify-between overflow-hidden  
  bg-Dark-700 px-2 py-2 text-base font-normal outline-none rounded-sm ring-1 
  data-[state=closed]:ring-Dark-100 
  data-[state=open]:rounded-br-none data-[state=open]:rounded-bl-none 
  data-[state=open]:ring-Light-100 data-[state=open]:text-Light-100 
  hover:cursor-pointer shadow-sm 
  focus:text-Light-900 focus:ring-Primary-500 focus:ring-2 
  focus:rounded-sm disabled:cursor-not-allowed disabled:text-Dark-100/60`,
      `focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !sm &&
        `gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      sm && `gap-[2px] border-none justify-normal min-w-max ring-0 p-0 `
    ),
    day: cn(
      'h-9 w-9 text-center p-0 text-regular-text-16',
      'hover:bg-Primary-700 rounded-[50%]',
      'active:bg-Primary-900',
      'transition-color transition-bg duration-300 ease-in-out'
    ),
    disabled: 'text-Light-900',
    hidden: 'invisible',
    outside: 'text-Light-900 aria-selected:',
    selected: 'bg-Primary-900',
    today:
      'text-Primary-500 text-bold-text-16 !font-bold aria-selected:text-Light-100 hover:text-Primary-100',
    ...classNames,
  }

  const modifiersClassNames = {
    weekend: 'text-Danger-300',
  }

  return (
    <DayPicker
      className={cn(`px-[24px] py-[16px]`, className)}
      classNames={dayPickerClassNames}
      components={{
        Dropdown: ({ ...props }) => <Dropdown {...props} />,
      }}
      endMonth={new Date()}
      modifiersClassNames={modifiersClassNames}
      showOutsideDays={showOutsideDays}
      startMonth={new Date(1960, 0)}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
