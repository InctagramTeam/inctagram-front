'use client'

import {
  ComponentPropsWithoutRef,
  CSSProperties,
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useMemo,
} from 'react'

import { ReturnComponent } from '@/shared/types'
import { Undefinable } from '@/shared/types/undefinable'
import { clsx } from 'clsx'
import {
  FlexAlignItemsType,
  FlexDirectionType,
  FlexGapType,
  FlexJustifyContent,
  FlexWrapType,
} from '@/shared/ui/flex/model/types/flex-type'
import {
  ALIGN_CLASSES,
  DIRECTION_CLASSES,
  FLEX_WRAP_CLASSES,
  GAP_CLASSES,
  JUSTIFY_CLASSES,
} from '@/shared/ui/flex/model/constants/mapping-flex-classes'

// props
type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/** Наследуемся (extends) от пропсов стандартного div элемента, чтобы у Flex появились такие же свойста как и у div
 * Теперь при использовании Flex или его имплементациё: FlexRow, FlexCol - можем навешать, к примеру атрибут role='navigation',
 блок стал семантически правильнее, роботы лучше проиндексируют его
 * */
export interface FlexProps extends DivPropsType {
  children: ReactNode | any
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

    const styles = useMemo<Undefinable<CSSProperties>>(() => {
      return {
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
    }, [mr, ml, mt, mb, mx, my, m, p, width, max])

    const optionalClasses = [
      className,
      JUSTIFY_CLASSES[justify],
      ALIGN_CLASSES[items],
      DIRECTION_CLASSES[direction],
      DIRECTION_CLASSES[direction],
      FLEX_WRAP_CLASSES[wrap],
      gap && GAP_CLASSES[gap],
    ] as const

    console.log('flex')

    /** {...rest} первым, т.к чтобы при передачи снаружи className, последний перезатрёт пропсы */
    return (
      <div
        {...rest}
        className={clsx('flex', maxWidth && 'w-full', optionalClasses, className)}
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
