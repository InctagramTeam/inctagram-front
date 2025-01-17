import { ComponentPropsWithoutRef, ElementRef, forwardRef, useMemo } from 'react'

import { Text } from '@/shared'
import * as SliderPrimitive from '@radix-ui/react-slider'

export type SliderProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, label, ...restProps }, ref) => {
    const classes = useMemo(() => {
      return {
        slider: 'touch-none select-none w-24 relative flex items-center',
        track: 'relative h-0.5 w-24 flex-grow rounded-sm bg-blue-800',
        range: 'absolute h-full rounded-sm bg-blue-500',
        thumb:
          'relative block h-4 w-4 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none',
        smallThumb: 'absolute left-[0.3rem] top-[0.3rem] h-2 w-2 rounded-full bg-white',
      }
    }, [])

    return (
      <div className={className}>
        {label && <Text variant={'H3'}>{label}</Text>}
        <div className={'flex items-center justify-center'}>
          <SliderPrimitive.Root className={classes.slider} ref={ref} {...restProps}>
            <SliderPrimitive.Track className={classes.track}>
              <SliderPrimitive.Range className={classes.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb aria-label={'Volume'} className={classes.thumb}>
              <span className={classes.smallThumb} />
            </SliderPrimitive.Thumb>
          </SliderPrimitive.Root>
        </div>
      </div>
    )
  }
)

Slider.displayName = 'Slider'
