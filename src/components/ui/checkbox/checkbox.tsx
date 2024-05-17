import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'
import CheckIcon from '@/assets/icons/CheckIcon'
import { ReturnComponent } from '@/common/types'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: ReactNode | string
  id?: string
  labelPosition?: 'left' | 'right'
  value?: string
  onValueChange?: (checked: boolean) => void
  required?: boolean
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'checked' | 'onCheckedChange'>

export type Ref = ElementRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<Ref, CheckboxProps>((props, ref): ReturnComponent => {
  const {
    className,
    disabled,
    label = '',
    checked,
    id,
    labelPosition = 'right',
    name,
    onValueChange,
    required,
    ...restProps
  } = props

  const generatedId = useId()
  const finalId = id ?? generatedId

  return (
    <div className={`_container_ flex items-center`}>
      <LabelRadix.Root
        htmlFor={finalId}
        className={clsx(
          `_label_ select-none z-0 inline-flex gap-[11px] items-center text-regular-text-14 cursor-default`,
          className,
          disabled && `text-Light-900/60`
        )}
      >
        <CheckboxRadix.Root
          className={clsx(
            disabled && `cursor-default`,
            `_Checkbox_ relative w-[18px] h-[18px] p-[3px_1px] bg-transparent cursor-pointer flex shrink-0 items-center justify-center
            border-2 border-Light-500 rounded
            before:content-['']
            before:absolute before:-z-1 before:w-[32px] before:h-[32px] before:opacity-0
            before:bg-Light-900/60 before:rounded-[50%] before:scale-0 hover:before:scale-100
            hover:before:-translate-y-[1px] hover:before:-translate-x-[1px] hover:before:opacity-60 hover:before:z-1
            hover:not:before:data-[disabled]:opacity-100 hover:not:before:data-[disabled=true]:bg-Dark-300
            hover:not:before:data-[disabled]:transition-opacity hover:not:before:data-[disabled]:delay-150
            focus-visible:not:data-[disabled]:outline-none
            focus-visible:not:data-[disabled]:outline-none
            focus-visible:not:data-[disabled]:before:opacity-100
            focus-visible:not:data-[disabled]:before:bg-Dark-500
            active:not:data-[disabled]:before:bg-Dark-100
            hover:disabled:cursor-default hover:disabled:before:hidden
            data-[state=checked]:bg-Light-100 data-[disabled]:cursor-default 
            data-[disabled]:bg-Dark-100 data-[disabled]:border-2 data-[disabled]:border-Light-900 data-[disabled]:opacity-30
            data-[state=checked]:cursor-pointer data-[state=checked,disabled]:bg-Dark-100
            data-[state=checked]:border-2 data-[state=checked]:border-Dark-100
            data-[state=unchecked]:cursor-pointer data-[state=unchecked]:border-2 data-[state=unchecked]:border-Dark-100
            data-[state=unchecked]:bg-Dark-700
            `
          )}
          id={id}
          checked={checked}
          name={name}
          disabled={disabled}
          required={required}
          ref={ref}
          {...restProps}
        >
          <CheckboxRadix.Indicator
            className={`_indicator_ flex items-center justify-center data-[disabled]:cursor-default`}
          >
            <CheckIcon
              className={
                disabled
                  ? `_checkIconDisabled_ text-Light-700 cursor-default`
                  : `_checkIcon_ text-Dark-900`
              }
            />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label}
      </LabelRadix.Root>
    </div>
  )
})
