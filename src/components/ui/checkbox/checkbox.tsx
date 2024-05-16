'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement, useId } from 'react'

import CheckIcon from '@/assets/icons/CheckIcon'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { clsx } from 'clsx'

type CheckboxPrimitiveElement = ElementRef<typeof CheckboxPrimitive.Root>

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  labelPosition?: 'left' | 'right'
  onValueChange?: (checked: boolean) => void
  required?: boolean
} & Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked' | 'onCheckedChange'>

const Checkbox = forwardRef<CheckboxPrimitiveElement, CheckboxProps>((props, ref): ReactElement => {
  const {
    checked,
    className,
    disabled,
    id,
    label = '',
    labelPosition = 'right',
    name,
    onValueChange,
    required,
    ...rest
  } = props

  const generatedId = useId()
  const finalId = id ?? generatedId

  const commonClasses = {
    divWrapper: clsx(
      `relative border-2 w-[18px] h-[18px] z-100 opacity-100 rounded border-Dark-100
         hover:not-disabled:bg-Dark-500 hover:active:not-disabled:bg-Dark-500`,
      !checked && disabled && 'cursor-default text-Dark-100',
      disabled && 'cursor-default text-Dark-100',
      labelPosition === 'left' && '-ml-[10px]'
    ),
    checkboxPrimitiveRoot: clsx(
      checked &&
        !disabled &&
        `cursor-pointer relative w-[18px] h-[18px] before:content-[''] before:absolute
          before:block before:scale-0 hover:before:scale-100
          hover:before:-tran slate-x-1 hover:before:-translate-y-1 hover:before:-translate-x-1 hover:before:opacity-60 hover:before:z-1
          before:w-[26px] before:h-[26px] before:bg-Dark-100 before:rounded-[50%]
          before:transition-all duration-150 ease-in-out
          hover:active:before:scale-100 hover:active:before:bg-Dark-100
          hover:focus-visible:before:scale-100
          focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:rounded-[4px] focus:border-Light-100
          focus:ring-offset-Primary-300`,
      !checked &&
        !disabled &&
        `peer cursor-pointer data-[state=checked]:text-Light-100 relative w-[18px] h-[18px] before:content-[''] before:absolute
          before:block before:t-[-50%] before:l-[-50%] before:scale-0 hover:before:scale-100
          hover:before:-translate-x-[4px] hover:before:-translate-y-6 hover:before:opacity-35
          before:w-[26px] before:h-[26px] before:bg-Dark-100 before:rounded-[50%]
          before:transition-all transition duration-150 ease-in-out
          hover:active:before:scale-100 hover:active:before:bg-Dark-100
          hover:focus-visible:before:scale-100
          hover:focus-visible:before:bg-Dark-100
          focus-visible:outline-none focus-visible:before:block focus-visible:before:t-[-50%]
          focus-visible:before:l-[-50%] focus-visible:before:scale-100 focus-visible:before:w-[26px]
          focus-visible:before:h-[26px] focus-visible:before:-translate-y-3 focus-visible:before:-translate-x-1
          focus-visible:before:bg-Dark-500`,
      checked && disabled && `cursor-default rounded`,
      !checked &&
        disabled &&
        'cursor-default rounded relative -z-100 opacity-0 bg-Dark-900 opacity-60 border-2 border-bg-Dark-100'
    ),
    divDisabled: clsx(
      `relative z-0 inset-0 rounded cursor-default`,
      disabled && `border-2 border-Light-100/60`
    ),
    buttonIndicator: clsx(
      disabled &&
        checked &&
        `absolute z-2 top-1/2 left-1/2 -translate-y-4 -translate-x-[2px] cursor-default text-Light-100/60
        appearance-none rounded w-[18px] h-[18px] bg-Dark-100/50`,
      !disabled && checked && 'fill-Light-100 cursor-pointer'
    ),
    label: clsx(
      `cursor-default flex gap-[0_15px] opacity-60 text-Light-700 shadow-sm`,
      checked && disabled && `cursor-default`,
      checked && !disabled && `cursor-pointer hover:text-Primary-300/90`,
      !checked && disabled && `cursor-default shadow-sm`,
      !checked &&
        !disabled &&
        `cursor-pointer hover:-translate-y-[1px] shadow-sm hover:text-Primary-500 hover:animate-[wiggle_1s_ease-in-out_infinite]`,
      className && className
    ),
  }

  return (
    <div className={commonClasses.divWrapper}>
      <LabelPrimitive.Root className={commonClasses.label} htmlFor={finalId}>
        {label}
      </LabelPrimitive.Root>
      <CheckboxPrimitive.Root
        checked={checked}
        className={commonClasses.checkboxPrimitiveRoot}
        defaultChecked
        disabled={disabled}
        id={id}
        name={name}
        onCheckedChange={onValueChange}
        ref={ref}
        required={required}
        {...rest}
      >
        <div className={commonClasses.divDisabled}>
          <CheckboxPrimitive.Indicator className={commonClasses.buttonIndicator} forceMount>
            {checked && <CheckIcon />}
          </CheckboxPrimitive.Indicator>
        </div>
      </CheckboxPrimitive.Root>
    </div>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName
export { Checkbox }
