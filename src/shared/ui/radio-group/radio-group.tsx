import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import { RadioItem } from '@/shared/ui/radio-group/radio-item'

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
    const { className, options, ...rest } = props

    return (
      <div className={'p-1.5'}>
        <RadioGroup.Root className={`flex flex-col gap-y-2.5 ${className}`} ref={ref} {...rest}>
          {options.map((item, index) => (
            <RadioItem key={index} {...item} />
          ))}
        </RadioGroup.Root>
      </div>
    )
  }
)
