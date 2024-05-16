import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import CheckIcon from '@/assets/icons/CheckIcon'

export type CheckboxProps = {
  label?: ReactNode | string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export type Ref = ElementRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<Ref, CheckboxProps>(
  ({ className, disabled = true, label = 'DDDDDD', ...rest }, ref) => {
    return (
      <div className={`_container_ flex items-center`}>
        <label
          className={clsx(
            `_label_ select-none z-0 inline-flex gap-[11px] items-center
            text-regular-text-14 text-Light-100 disabled:text-Dark-100
            hover:translate-y-[1px]
            `,
            disabled && `_disabled_ cursor-default text-Light-900`,
            className
          )}
        >
          <CheckboxRadix.Root
            className={`_Checkbox_ relative w-[18px] h-[18px] p-[3px_1px] bg-transparent cursor-pointer flex shrink-0 items-center justify-center
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
            disabled:bg-Dark-700
            data-[state=checked]:bg-Light-100 data-[disabled]:cursor-default 
            data-[disabled]:bg-Dark-100 data-[disabled]:border-2 data-[disabled]:border-Light-900 data-[disabled]:opacity-30
            data-[state=checked]:cursor-pointer data-[state=checked,disabled]:bg-Dark-100
            data-[state=checked]:border-2 data-[state=checked]:border-Dark-100
            data-[state=unchecked]:cursor-pointer data-[state=unchecked]:border-2 data-[state=unchecked]:border-Dark-100
            data-[state=unchecked]:bg-Dark-700
            `}
            disabled={disabled}
            ref={ref}
            {...rest}
          >
            <CheckboxRadix.Indicator
              className={`_indicator_ flex items-center justify-center  data-[disabled]:cursor-default`}
            >
              <CheckIcon
                className={
                  disabled
                    ? `_checkIconDisabled_ text-Light-700`
                    : `_checkIcon_ text-Dark-900  data-[disabled]:cursor-default`
                }
              />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
          {label}
        </label>
      </div>
    )
  }
)
