'use client'

import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ChevronIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

const Select: typeof SelectRadix.Root = SelectRadix.Root
const SelectGroup: typeof SelectRadix.Group = SelectRadix.Group
const SelectValue: typeof SelectRadix.Value = SelectRadix.Value

type ChangeValueProps<T extends number | string> = {
  onChange?: (value: T) => void
  value?: T
}

export type Options<T extends number | string> = {
  disabled?: boolean
  label?: number | string
  icon?: ReactNode
  name?: ReactNode
  value: T
}

type OwnProps<T extends number | string> = {
  className?: string
  disabled?: boolean
  label?: string
  name?: string
  options: Options<T>[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  variant?: 'pagination' | 'primary'
}

export type SelectProps = OwnProps<number | string> & ChangeValueProps<number | string>

const SelectBox = (props: SelectProps): ReturnComponent => {
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

  return (
    <Select
      {...rest}
      disabled={disabled}
      name={name}
      onValueChange={onChange}
      required={required}
      value={value as string}
    >
      <SelectTrigger
        className={
          variant === 'pagination'
            ? 'w-[50px] justify-center gap-[1px] py-0 pl-[6px] pr-[1px]'
            : 'w-[210px]'
        }
      >
        <SelectValue placeholder={placeholder} />
        <ChevronIcon
          className={cn(
            'chevron-up rotate-180',
            variant === 'pagination' ? '[h-16px] w-[16px]' : ''
          )}
        />
        <ChevronIcon
          className={cn('chevron-down', variant === 'pagination' ? '[h-16px] w-[16px]' : '')}
        />
      </SelectTrigger>
      <SelectContent
        className={variant === 'pagination' ? 'w-[50px]' : 'w-full'}
        position={position}
      >
        {label && <SelectLabel>{label}</SelectLabel>}

        {options.map(option => (
          <SelectItem
            className={variant === 'pagination' ? 'w-[50px]' : 'w-[210px]'}
            disabled={option.disabled}
            key={option.value}
            value={option.value as string}
          >
            <span
              className={clsx(
                `flex items-center gap-[12px] text-regular-text-14`,
                variant === 'pagination' && `leading-3`
              )}
            >
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
//   display: flex;
//   gap: 12px;
//   align-items: center;
//   line-height: var(--line-height-m);

const classes = {
  content: `relative z-50 ring-1 ring-t-0 ring-Dark-100 data-[state=open]:ring-Light-100 
    bg-Dark-700 m-0 p-0 max-h-96
    overflow-hidden text-popover-foreground rounded-br-sm rounded-bl-sm`,

  item: `h-[36px] flex cursor-default select-none items-center pl-2 pr-2 
  text-base font-normal text-Light-100 outline-none 
  focus:bg-Dark-100/30 focus:text-Primary-500 focus:shadow-sm hover:cursor-pointer`,

  label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',

  trigger: `h-[36px] flex items-center justify-between  
  bg-Dark-700 px-2 py-2 text-base font-normal outline-none rounded-sm ring-1 
  data-[state=closed]:ring-Dark-100 
  data-[state=open]:rounded-br-none data-[state=open]:rounded-bl-none 
  data-[state=open]:ring-Light-100 data-[state=open]:text-Light-100 
  hover:cursor-pointer focus:ring-Light-900 shadow-sm 
  focus:text-Light-900 focus:ring-Primary-500 focus:ring-2 
  focus:rounded-sm disabled:cursor-not-allowed disabled:text-Dark-100/60 

  [&_.chevron-up]:hidden [&_.chevron-up]:data-[state=open]:block 
  [&_.chevron-up]:data-[state=open]:-translate-y-[2px] 
  [&_.chevron-down]:block [&_.chevron-down]:data-[state=open]:hidden`,
}

const SelectLabel = forwardRef<
  ElementRef<typeof SelectRadix.Label>,
  ComponentPropsWithoutRef<typeof SelectRadix.Label>
>(({ children, className, ...props }, ref) => (
  <SelectRadix.Label {...props} className={classes.label} ref={ref}>
    {children}
  </SelectRadix.Label>
))

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectRadix.Trigger>,
  { icon?: ReactNode } & ComponentPropsWithoutRef<typeof SelectRadix.Trigger>
>(({ children, className, icon, ...props }, ref) => {
  return (
    <SelectRadix.Trigger {...props} className={cn(classes.trigger, className)} ref={ref}>
      {children}
      <SelectRadix.Icon asChild>{icon}</SelectRadix.Icon>
    </SelectRadix.Trigger>
  )
})

const SelectContent = forwardRef<
  ElementRef<typeof SelectRadix.Content>,
  ComponentPropsWithoutRef<typeof SelectRadix.Content>
>(({ children, className, position = 'popper', ...props }, ref) => (
  <SelectRadix.Portal>
    <SelectRadix.Content
      className={cn(classes.content, className)}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectRadix.Viewport className={cn('p-0', position === 'popper' && 'min-h-fit w-full')}>
        {children}
      </SelectRadix.Viewport>
    </SelectRadix.Content>
  </SelectRadix.Portal>
))

const SelectItem = forwardRef<
  ElementRef<typeof SelectRadix.Item>,
  ComponentPropsWithoutRef<typeof SelectRadix.Item>
>(({ children, className, ...props }, ref) => (
  <SelectRadix.Item {...props} className={cn(classes.item, className)} ref={ref}>
    <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
  </SelectRadix.Item>
))

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectRadix.Separator>,
  ComponentPropsWithoutRef<typeof SelectRadix.Separator>
>(({ className, ...props }, ref) => (
  <SelectRadix.Separator
    className={cn('-mx-1 my-1 h-px bg-Dark-100/40 shadow-sm', className)}
    ref={ref}
    {...props}
  />
))

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectRadix.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectRadix.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectRadix.ScrollUpButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    ref={ref}
    {...props}
  >
    <ChevronIcon className={'h-4 w-4 rotate-180'} />
  </SelectRadix.ScrollUpButton>
))

const SelectScrollDownButton = forwardRef<
  ElementRef<typeof SelectRadix.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectRadix.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectRadix.ScrollDownButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    ref={ref}
    {...props}
  >
    <ChevronIcon className={'h-4 w-4'} />
  </SelectRadix.ScrollDownButton>
))

export {
  Select,
  SelectBox,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
