'use client'

import * as React from 'react'
import { ReactNode } from 'react'

import { ChevronIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import * as SelectRadix from '@radix-ui/react-select'
import { SelectContent, SelectItem, SelectLabel, SelectTrigger } from './'

const Select: typeof SelectRadix.Root = SelectRadix.Root
const SelectGroup: typeof SelectRadix.Group = SelectRadix.Group
const SelectValue: typeof SelectRadix.Value = SelectRadix.Value

type ChangeValueProps<T extends number | string> = {
  onChange?: (value: T) => void
  value?: T
}

export type SelectOptionsProps<T extends number | string> = {
  disabled?: boolean
  icon?: ReactNode
  label?: number | string
  name?: ReactNode
  value: T
}

type OwnProps<T extends number | string> = {
  className?: string
  disabled?: boolean
  label?: string
  name?: string
  options: SelectOptionsProps<T>[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  variant?: 'pagination' | 'primary'
}

type Props = ChangeValueProps<number | string> & OwnProps<number | string>

const SelectBox = (props: Props): ReturnComponent => {
  const {
    className,
    disabled,
    label,
    name,
    onChange,
    options,
    placeholder,
    position,
    required,
    value,
    variant = 'primary',
    ...rest
  } = props

  const classes = {
    trigger: cn(
      variant === 'pagination'
        ? 'w-[50px] justify-center gap-[1px] py-0 pl-[6px] pr-[1px]'
        : 'w-[210px]'
    ),
    chevron: cn(variant === 'pagination' && '[h-16px] w-[16px]'),
    content: cn(variant === 'pagination' ? 'w-[50px]' : 'w-full'),
    item: cn(variant === 'pagination' ? 'w-[50px]' : 'w-[210px]'),
    text: cn(
      `flex items-center gap-[12px] text-regular-text-14`,
      variant === 'pagination' && `leading-3`
    ),
  }

  return (
    <Select
      {...rest}
      disabled={disabled}
      name={name}
      onValueChange={onChange}
      required={required}
      value={value as string}
    >
      <SelectTrigger className={classes.trigger}>
        <SelectValue placeholder={placeholder} />
        <ChevronIcon className={cn('chevron-up rotate-180', classes.chevron)} />
        <ChevronIcon className={cn('chevron-down', classes.chevron)} />
      </SelectTrigger>
      <SelectContent className={classes.content} position={position}>
        {label && <SelectLabel>{label}</SelectLabel>}

        {options.map(option => (
          <SelectItem
            className={classes.item}
            disabled={option.disabled}
            key={option.value}
            value={option.value as string}
          >
            <span className={classes.text}>
              {option.label}
              {option.icon}
              {option.name}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export { Select, SelectBox, SelectGroup, SelectValue }
