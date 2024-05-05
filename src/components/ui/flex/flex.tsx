import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
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
  alignItems?: FlexAlignItems
  children: ReactNode
  className?: string
  flexDirection?: FlexDirection
  gap?: FlexGap
  justifyContent?: FlexJustifyContent
  max?: boolean
  wrap?: FlexWrap
}

export const Flex = (props: FlexProps) => {
  const {
    alignItems = 'center',
    children,
    className,
    flexDirection = 'row',
    gap,
    justifyContent = 'start',
    max,
    wrap = 'nowrap',
    ...otherProps
  } = props

  const classes = [
    className,
    justifyClasses[justifyContent],
    alignClasses[alignItems],
    directionClasses[flexDirection],
    'flex-wrap',
    gap && gapClasses[gap],
  ]

  return (
    <div className={cn('flex', max && 'w-full', classes)} {...otherProps}>
      {children}
    </div>
  )
}
