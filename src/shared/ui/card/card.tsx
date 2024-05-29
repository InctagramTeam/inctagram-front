'use client'
import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import { PolymorphComponentPropsWithRef } from '@/shared/types'
import clsx from 'clsx'

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, ComponentPropsWithoutRef<T>>

type CardComponent = <T extends ElementType = 'div'>(props: Props<T>) => ReactNode

export const Card: CardComponent = forwardRef(
  <T extends ElementType = 'div'>(
    { asComponent, className, ...rest }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component = asComponent || 'div'

    return (
      <Component
        {...rest}
        className={clsx(
          `shadow-shadow-Dark-30 rounded-[2px] border-[1px] border-Dark-300 bg-Dark-500 shadow-sm`,
          className
        )}
        ref={ref}
      />
    )
  }
)

//   background-color: var(--dark-500);
//   border: 1px solid var(--dark-300);
//   border-radius: 2px;
