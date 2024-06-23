'use client'

import {
  CSSProperties,
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'

import { ReturnComponent } from '@/shared/types'
import { clsx } from 'clsx'

// types
type FlexJustifyContent =
  | 'center'
  | 'end'
  | 'spaceAround'
  | 'spaceBetween'
  | 'spaceEvenly'
  | 'start'

type FlexGapType =
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
  | '28'
  | '30'
  | '34'
  | '40'
  | '50'
  | '60'
  | '70'
  | '80'

type FlexAlignItemsType = 'baseline' | 'center' | 'end' | 'start' | 'stretch'
type FlexDirectionType = 'col_reverse' | 'column' | 'row' | 'row_reverse'
type FlexWrapType = 'no_wrap' | 'wrap' | 'wrap_reverse'

// mapping types in classes
const justifyClasses: Record<FlexJustifyContent, string> = {
  center: 'justify-center',
  end: 'justify-end',
  spaceAround: 'justify-around',
  spaceBetween: 'justify-between',
  spaceEvenly: 'justify-evenly',
  start: 'justify-start',
}

const flexWrapClasses: Record<FlexWrapType, string> = {
  no_wrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  wrap_reverse: 'flex-wrap-reverse',
}

const alignClasses: Record<FlexAlignItemsType, string> = {
  baseline: 'items-baseline',
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
  stretch: 'items-stretch',
}

const directionClasses: Record<FlexDirectionType, string> = {
  col_reverse: 'flex-col-reverse',
  column: 'flex-col',
  row: 'flex-row',
  row_reverse: 'flex-row-reverse',
}

const gapClasses: Record<FlexGapType, string> = {
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
  28: 'gap-[28px]',
  30: 'gap-[30px]',
  34: 'gap-[34px]',
  40: 'gap-[40px]',
  50: 'gap-[50px]',
  60: 'gap-[60px]',
  70: 'gap-[70px]',
  80: 'gap-[80px]',
}

// props
type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivPropsType {
  children: ReactNode
  className?: string
  direction?: FlexDirectionType
  gap?: FlexGapType
  /** Выравнивание флекс элементов */
  items?: FlexAlignItemsType
  justify?: FlexJustifyContent
  m?: CSSProperties['margin']
  max?: CSSProperties['width']
  /** Растягивает Flex контейнер на всю ширину */
  maxWidth?: boolean
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
  p?: CSSProperties['padding']
  width?: CSSProperties['width']
  wrap?: FlexWrapType
}

const Flex = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & FlexProps>(
  (props, ref): ReturnComponent => {
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
      wrap = 'no_wrap',
      ...rest
    } = props

    const styles = {
      ...style,
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
        {...rest}
        className={clsx('flex', maxWidth && 'w-full', classes, className)}
        ref={ref}
        style={styles}
      >
        {children}
      </div>
    )
  }
)

Flex.displayName = 'Flex'

export { Flex }
