'use client'

import * as React from 'react'
import { ReactNode } from 'react'

import { ReturnComponent, cn } from '@/shared'
import { ChevronIcon } from '@/shared/assets/icons'
import {
  ALIGN_CLASSES,
  DIRECTION_CLASSES,
  FLEX_WRAP_CLASSES,
  GAP_CLASSES,
  JUSTIFY_CLASSES,
} from '@/shared/ui/flex/model/constants/mapping-flex-classes'
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
  direction?: SelectContentMenuDirection
  disabled?: boolean
  label?: string
  name?: string
  options: SelectOptionsProps<T>[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  variant?: 'pagination' | 'primary'
}

export type SelectContentMenuDirection =
  | 'bottom left'
  | 'bottom right'
  | 'default'
  | 'top left'
  | 'top right'

// mapping classes
export const mapDirectionClass: Record<SelectContentMenuDirection, string> = {
  'bottom left': `top-[100%] right-0`,
  'bottom right': `top-[100%] left-0`,
  default: ``,
  'top left': `bottom-[100%] right-0`,
  'top right': `bottom-[100%] left-0`,
}

type Props = ChangeValueProps<number | string> & OwnProps<number | string>

const SelectBox = (props: Props): ReturnComponent => {
  const {
    className,
    direction,
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

  const optionalClasses = [mapDirectionClass[direction ?? 'default']]

  const classes = {
    chevron: cn(variant === 'pagination' && '[h-16px] w-[16px]'),
    className,
    content: cn(
      variant === 'pagination' ? 'w-[50px]' : 'w-full',
      direction === 'top left' && `bottom-[100%]`
    ),
    item: cn(variant === 'pagination' ? 'w-[50px]' : 'w-[210px]'),
    optionalClasses,
    text: cn(
      `flex items-center gap-[12px] text-regular-text-14`,
      variant === 'pagination' && `leading-3`
    ),
    trigger: cn(
      variant === 'pagination'
        ? 'w-[50px] justify-center gap-[1px] py-0 pl-[6px] pr-[1px]'
        : 'w-[210px]'
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
