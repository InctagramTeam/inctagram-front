'use client'
import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import { EMPTY_STRING, ReturnComponent, Text } from '@/shared'
import CheckIcon from '@/shared/assets/icons/CheckIcon'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: ReactNode | string
  labelPosition?: 'left' | 'right'
  onCheckedChange?: (checked: boolean) => void
  required?: boolean
  value?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export type Ref = ElementRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<Ref, CheckboxProps>((props, ref): ReturnComponent => {
  const {
    checked,
    className,
    disabled,
    errorMessage = EMPTY_STRING,
    id,
    label = EMPTY_STRING,
    labelPosition = 'right',
    name,
    onCheckedChange,
    required,
    ...rest
  } = props

  const generatedId = useId()
  const finalId = id ?? generatedId

  return (
    <>
      <div className={`_container_ flex items-center`}>
        <LabelRadix.Root
          className={clsx(
            `_label_ z-0 inline-flex w-full cursor-default select-none items-center text-regular-text-14`,
            className,
            disabled && `text-Light-900/60`
          )}
          htmlFor={finalId}
        >
          <CheckboxRadix.Root
            {...rest}
            checked={checked}
            className={clsx(
              disabled && `cursor-default`,
              `_Checkbox_ hover:not:before:data-[disabled]:opacity-100 hover:not:before:data-[disabled=true]:bg-Dark-300
            hover:not:before:data-[disabled]:transition-opacity hover:not:before:data-[disabled]:delay-150
            focus-visible:not:data-[disabled]:outline-none focus-visible:not:data-[disabled]:outline-none
            focus-visible:not:data-[disabled]:before:opacity-100 focus-visible:not:data-[disabled]:before:bg-Dark-500
            active:not:data-[disabled]:before:bg-Dark-100 data-[state=checked,disabled]:bg-Dark-100
            relative flex h-[18px]
            w-[18px]
            shrink-0 cursor-pointer items-center justify-center rounded
            border-2 border-Light-500 bg-transparent p-[3px_1px]
            before:absolute before:-z-1 before:h-[32px] before:w-[32px]
            before:scale-0 before:rounded-[50%]
            before:bg-Light-900/60 before:opacity-0
            before:content-['']
            data-[disabled]:cursor-default
            data-[state=checked]:cursor-pointer
            data-[state=unchecked]:cursor-pointer
            data-[disabled]:border-2
            data-[state=checked]:border-2 data-[state=unchecked]:border-2
            data-[disabled]:border-Light-900 data-[state=checked]:border-Dark-100 
            data-[state=unchecked]:border-Dark-100 data-[disabled]:bg-Dark-100 data-[state=checked]:bg-Light-100 data-[state=unchecked]:bg-Dark-700
            data-[disabled]:opacity-30 hover:before:z-1
            hover:before:-translate-x-[1px] hover:before:-translate-y-[1px]
            hover:before:scale-100 hover:before:opacity-60 hover:disabled:cursor-default
            hover:disabled:before:hidden
            `
            )}
            disabled={disabled}
            id={id}
            name={name}
            ref={ref}
            required={required}
          >
            <CheckboxRadix.Indicator
              className={`_indicator_ CENTER data-[disabled]:cursor-default`}
            >
              <CheckIcon
                className={
                  disabled
                    ? `_checkIconDisabled_ cursor-default text-Light-700`
                    : `_checkIcon_ text-Dark-900`
                }
              />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
          {label}
        </LabelRadix.Root>
      </div>
      <Text
        className={`w-full text-left text-small-text-12 !text-Danger-500`}
        id={`${finalId}-error`}
        role={'alert'}
        variant={'error_text_12'}
      >
        {errorMessage}
      </Text>
    </>
  )
})
