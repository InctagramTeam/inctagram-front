import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import { Text } from '@/shared'
import clsx from 'clsx'

export type RadioOption = {
  label: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

export const RadioItem = (props: RadioOption) => {
  const { disabled, label, title, value, ...rest } = props

  const itemClasses = clsx(
    'h-5 w-5 rounded-full border-2',
    disabled
      ? 'cursor-auto border-Dark-100'
      : 'border-Light-100 hover:bg-Dark-300 hover:shadow-[0_0_0_8px] hover:shadow-Dark-300 focus:bg-Dark-500 focus:shadow-[0_0_0_8px] focus:shadow-Dark-500 active:bg-Dark-100 active:shadow-[0_0_0_8px] active:shadow-Dark-100'
  )

  const indicatorClasses = clsx(
    'relative flex h-full w-full items-center justify-center before:absolute before:h-2.5 before:w-2.5 before:rounded-full before:content-[""]',
    disabled ? 'before:bg-Dark-100' : 'before:bg-Light-100'
  )

  const labelClasses = clsx(
    'select-none pl-[10px] text-Light-100 aria-disabled:text-Light-900 hover:cursor-pointer aria-disabled:hover:cursor-auto'
  )

  return (
    <div className={'flex items-center'}>
      <RadioGroup.Item
        className={itemClasses}
        disabled={disabled}
        aria-disabled={disabled}
        id={value}
        value={value}
        {...rest}
      >
        <RadioGroup.Indicator className={indicatorClasses} />
      </RadioGroup.Item>

      <Text
        asComponent={'label'}
        aria-disabled={disabled}
        className={labelClasses}
        htmlFor={value}
        variant={'regular-text-14'}
      >
        {label}
      </Text>
    </div>
  )
}
