import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react'

import { ReturnComponent } from '@/shared/types'
import { clsx } from 'clsx'

// types
export type FlexJustifyContent =
  | 'center'
  | 'end'
  | 'spaceAround'
  | 'spaceBetween'
  | 'spaceEvenly'
  | 'start'

export type FlexAlignItems = 'baseline' | 'center' | 'end' | 'start' | 'stretch'
export type FlexDirection = 'col_reverse' | 'column' | 'row' | 'row_reverse'
export type FlexWrap = 'nowrap' | 'wrap'
export type FlexGap =
  | '1'
  | '2'
  | '3'
  | '4'
  | '6'
  | '8'
  | '10'
  | '12'
  | '14'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '26'
  | '30'
  | '34'
  | '40'
  | '50'
  | '60'
  | '70'
  | '80'

// mapping types + classes
const justifyClasses: Record<FlexJustifyContent, string> = {
  center: 'justify-center',
  end: 'justify-end',
  spaceAround: 'justify-around',
  spaceBetween: 'justify-between',
  spaceEvenly: 'justify-evenly',
  start: 'justify-start',
}

const flexWrapClasses: Record<FlexWrap, string> = {
  nowrap: 'nowrap',
  wrap: 'nowrap',
}
// 'nowrap' | 'wrap'

const alignClasses: Record<FlexAlignItems, string> = {
  baseline: 'items-baseline',
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
  stretch: 'items-stretch',
}

const directionClasses: Record<FlexDirection, string> = {
  col_reverse: 'flex-col-reverse',
  column: 'flex flex-col',
  row: 'flex flex-row',
  row_reverse: 'flex-row-reverse',
}

const gapClasses: Record<FlexGap, string> = {
  1: 'gap-[1px]',
  2: 'gap-[2px]',
  3: 'gap-[3px]',
  4: 'gap-[4px]',
  6: 'gap-[6px]',
  8: 'gap-[8px]',
  10: 'gap-[10px]',
  12: 'gap-[12px]',
  14: 'gap-[14px]',
  16: 'gap-[16px]',
  18: 'gap-[18px]',
  20: 'gap-[20px]',
  22: 'gap-[22px]',
  24: 'gap-[24px]',
  26: 'gap-[26px]',
  30: 'gap-[30px]',
  34: 'gap-[34px]',
  40: 'gap-[40px]',
  50: 'gap-[50px]',
  60: 'gap-[60px]',
  70: 'gap-[70px]',
  80: 'gap-[80px]',
}

// props
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  children: ReactNode
  className?: string
  direction?: FlexDirection
  gap?: FlexGap
  /**
   * Выравнивание флекс элементов
   */
  items?: FlexAlignItems
  justify?: FlexJustifyContent
  m?: CSSProperties['margin']
  max?: CSSProperties['width']
  /**
   * Растягивает Flex контейнер на всю ширину
   */
  maxWidth?: boolean
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
  p?: CSSProperties['padding']
  width?: CSSProperties['width']
  wrap?: FlexWrap
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref): ReturnComponent => {
  const {
    children,
    className,
    direction = 'row',
    gap,
    items = 'center',
    justify = 'start',
    m,
    max,
    maxWidth,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    style,
    width,
    wrap = 'nowrap',
    ...flexProps
  } = props

  const styles = {
    ...(mr && { marginRight: mr }),
    ...(ml && { marginLeft: ml }),
    ...(mt && { marginTop: mt }),
    ...(mb && { marginBottom: mb }),
    ...(mx && { marginLeft: mx, marginRight: mx }),
    ...(my && { marginBottom: my, marginTop: my }),
    ...(m && { margin: m }),
    ...(p && { padding: p }),
    ...(width && { width: width }),
    ...(max && { max: max }),
    ...style,
  }

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[items],
    directionClasses[direction],
    directionClasses[direction],
    flexWrapClasses[wrap],
    gap && gapClasses[gap],
  ]

  return (
    <div
      className={clsx('flex', maxWidth && 'w-full', classes, className)}
      ref={ref}
      style={styles}
      {...flexProps}
    >
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'
export { Flex }
