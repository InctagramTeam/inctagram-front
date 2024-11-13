import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Text } from '@/shared'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

export type SliderProps = { label?: string } & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, label, ...restProps }, ref) => {
    const sliderClasses = clsx('touch-none select-none w-24 relative flex items-center')

    return (
      <div className={className}>
        {label && <Text variant={'H3'}>{label}</Text>}
        <div className={'flex items-center justify-center'}>
          <SliderPrimitive.Root className={sliderClasses} ref={ref} {...restProps}>
            <SliderPrimitive.Track
              className={'relative h-0.5 w-24 flex-grow rounded-sm bg-blue-800'}
            >
              <SliderPrimitive.Range className={'absolute h-full rounded-sm bg-blue-500'} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
              aria-label={'Volume'}
              className={
                'relative block h-4 w-4 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none'
              }
            >
              <span
                className={'absolute left-[0.3rem] top-[0.3rem] h-2 w-2 rounded-full bg-white'}
              />
            </SliderPrimitive.Thumb>
          </SliderPrimitive.Root>
        </div>
      </div>
    )
  }
)
