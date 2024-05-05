'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import s from './Checkbox.module.scss'
import { cn } from 'classnames'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  position?: 'default' | 'left'
  onCheckedChange?: (checked: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked' | 'onCheckedChange'>

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  (props, ref) => {
    const {
      checked = true,
      className,
      disabled,
      id,
      name,
      position = 'default',
      label = 'Some text',
      onCheckedChange,
      ...rest
    } = props

    const classNames = {
      label: cn(s.label, disabled && s.disabled, className),
      root: cn(s.root),
      checkboxWrapper: cn(s.checkboxWrapper, disabled && s.disabled, s[position]),
      indicator: s.indicator,
    }

    return (
      // button самая внешний квадратик -- внутри label
      <LabelPrimitive.Root className={classNames.label}>
        <div className={classNames.checkboxWrapper}>
          <RadixCheckbox.Root
            ref={ref}
            className={classNames.root}
            id={id}
            name={name}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={rest.required}
          >
            {checked && (
              <CheckboxPrimitive.Indicator className={classNames.indicator} forceMount>
                <CheckIcon />
              </CheckboxPrimitive.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </LabelPrimitive.Root>
    )
  }
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
//
