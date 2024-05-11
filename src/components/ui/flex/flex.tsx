import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef, CSSProperties } from 'react'
import { cn } from '@/utils/merge-cn'
import { clsx } from 'clsx'

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
export type FlexGap =
  | '8'
  | '10'
  | '12'
  | '14'
  | '20'
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
  12: 'gap-[12px]',
  14: 'gap-[14px]',
  20: 'gap-[20px]',
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
  /**
   * Выравнивание флекс элементов
   */
  align?: FlexAlignItems
  children: ReactNode
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
  m?: CSSProperties['margin']
  p?: CSSProperties['padding']
  className?: string
  direction?: FlexDirection
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
    direction = 'row',
    gap,
    m,
    p,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    style,
    justify = 'start',
    maxWidth,
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
    ...style,
  }

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    'flex-wrap',
    gap && gapClasses[gap],
  ]

  return (
    <div
      style={styles}
      ref={ref}
      className={clsx('flex', maxWidth && 'w-full', classes, className)}
      {...flexProps}
    >
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'
export { Flex }
