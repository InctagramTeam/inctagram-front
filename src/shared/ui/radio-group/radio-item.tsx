import { ComponentPropsWithoutRef } from 'react'

import { Text } from '@/shared'
import * as RadioGroup from '@radix-ui/react-radio-group'
import clsx from 'clsx'

export type RadioOption = {
  label: string
  isInactive: boolean
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

export const RadioItem = (props: RadioOption) => {
  const { disabled, label, title, isInactive, value, ...rest } = props

  const itemClasses = clsx(
    `h-5 w-5 rounded-full border-2 ${isInactive && '!border-Light-900'}`,
    disabled
      ? 'cursor-auto border-Dark-100'
      : 'border-Light-100 hover:bg-Dark-300 hover:shadow-[0_0_0_8px] hover:shadow-Dark-300 focus:bg-Dark-500 focus:shadow-[0_0_0_8px] focus:shadow-Dark-500 active:bg-Dark-100 active:shadow-[0_0_0_8px] active:shadow-Dark-100'
  )

  const indicatorClasses = clsx(
    'relative flex h-full w-full items-center justify-center before:absolute before:h-2.5 before:w-2.5 before:rounded-full before:content-[""]',
    disabled ? 'before:bg-Dark-100' : 'before:bg-Light-100'
  )

  const labelClasses = ` select-none pl-[10px] text-Light-100 aria-disabled:text-Light-900 hover:cursor-pointer aria-disabled:hover:cursor-auto ${isInactive && '!text-Light-900'}`

  return (
    <div className={'flex items-center'}>
      <RadioGroup.Item
        aria-disabled={disabled}
        className={itemClasses}
        disabled={disabled}
        id={value}
        value={value}
        {...rest}
      >
        <RadioGroup.Indicator className={indicatorClasses} />
      </RadioGroup.Item>

      <Text
        aria-disabled={disabled}
        asComponent={'label'}
        className={labelClasses}
        htmlFor={value}
        variant={'regular-text-14'}
      >
        {label}
      </Text>
    </div>
  )
}
