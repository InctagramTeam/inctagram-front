import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { RadioItem } from '@/shared/ui/radio-group/radio-item'
import * as RadioGroup from '@radix-ui/react-radio-group'

export type RadioOption = {
  disabled?: boolean
  label: string
  value: string
}

export type GroupProps = {
  options: RadioOption[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const CustomRadioGroup = forwardRef<ElementRef<typeof RadioGroup.Root>, GroupProps>(
  (props, ref) => {
    const { className, options, value, ...rest } = props

    return (
      <div className={'p-1.5'}>
        <RadioGroup.Root
          className={`flex flex-col gap-y-2.5 ${className}`}
          ref={ref}
          {...rest}
          defaultValue={value}
        >
          {options.map((item, index) => (
            <RadioItem key={index} {...item} isInactive={value !== item.value} />
          ))}
        </RadioGroup.Root>
      </div>
    )
  }
)
