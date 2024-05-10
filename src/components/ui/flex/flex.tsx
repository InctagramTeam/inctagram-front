import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { cn } from '@/utils/merge-cn'

// types
export type FlexJustifyContent =
  | 'center'
  | 'end'
  | 'spaceAround'
  | 'spaceBetween'
  | 'spaceEvenly'
  | 'start'

export type FlexAlignItems = 'center' | 'end' | 'start'
export type FlexDirection = 'column' | 'row'
export type FlexWrap = 'nowrap' | 'wrap'
export type FlexGap = '8' | '10' | '20' | '30' | '40' | '50'

// mapping types + classes
const justifyClasses: Record<FlexJustifyContent, string> = {
  center: 'justify-center',
  end: 'justify-end',
  spaceAround: 'justify-around',
  spaceBetween: 'justify-between',
  spaceEvenly: 'justify-evenly',
  start: 'justify-start',
}

const alignClasses: Record<FlexAlignItems, string> = {
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
}

const directionClasses: Record<FlexDirection, string> = {
  column: 'flex flex-col',
  row: 'flex flex-row',
}

const gapClasses: Record<FlexGap, string> = {
  8: 'gap-[8px]',
  10: 'gap-[10px]',
  20: 'gap-[20px]',
  30: 'gap-[30px]',
  40: 'gap-[40px]',
  50: 'gap-[50px]',
}

// props
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  /**
   * Выравнивание флекс элементов
   */
  align?: FlexAlignItems
  children: ReactNode
  className?: string
  flexDirection?: FlexDirection
  gap?: FlexGap
  justify?: FlexJustifyContent
  /**
   * Растягивает Flex контейнер на всю ширину
   */
  maxWidth?: boolean
  wrap?: FlexWrap
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    align = 'center',
    children,
    className,
    flexDirection = 'row',
    gap,
    justify = 'start',
    maxWidth,
    wrap = 'nowrap',
    ...flexProps
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[flexDirection],
    'flex-wrap',
    gap && gapClasses[gap],
  ]

  return (
    <div ref={ref} className={cn('flex', maxWidth && 'w-full', classes)} {...flexProps}>
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'
export { Flex }
