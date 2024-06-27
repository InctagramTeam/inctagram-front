'use client'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  memo,
} from 'react'

import { PolymorphComponentPropsWithRef, cn } from '@/shared'
import clsx from 'clsx'

type Props<T extends ElementType> = OwnProps &
  PolymorphComponentPropsWithRef<T, ComponentPropsWithoutRef<T>>

type OwnProps = {
  border?: CardBorder
  padding?: CardPadding
  variant?: CardVariant
}

export type CardVariant = 'light' | 'normal' | 'outlined'
export type CardBorder = 'normal' | 'partial' | 'circle'
export type CardPadding = '0' | '4' | '8' | '12' | '16' | '24' | 'default'

type CardComponent = <T extends ElementType = 'div'>(props: Props<T>) => ReactNode

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'p-0',
  '4': 'p-[4px]',
  '8': 'p-[8px]',
  '12': 'p-[12px]',
  '16': 'p-[16px]',
  '24': 'p-[24px]',
  default: '',
}

export const Card: CardComponent = memo(
  forwardRef(
    <T extends ElementType = 'div'>(
      { asComponent, border, className, padding, variant, ...props }: Props<T>,
      ref: ElementRef<T>
    ) => {
      const Component = asComponent || 'div'

      const paddingClass = mapPaddingToClass[padding ?? 'default']

      return (
        <Component
          {...props}
          className={clsx(
            `rounded-[2px] border-[1px] border-Dark-300 bg-Dark-500 shadow-sm shadow-Dark-300 transition-all duration-300`,
            className,
            variant === 'outlined' && `bg-Light-100 shadow-md`,
            variant === 'light' &&
              `border-[1px] border-Light-900 bg-Light-700 text-Dark-700 shadow-Light-700`,
            border === 'circle' && `rounded-full`,
            border === 'partial' && `rounded-lg`,
            border === 'normal' && `rounded`,
            paddingClass
          )}
          ref={ref}
        />
      )
    }
  )
)

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} ref={ref} {...props} />
  )
)

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      className={cn('tracking-bg-Dark-500 text-2xl font-semibold leading-none', className)}
      ref={ref}
      {...props}
    />
  )
)

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn('text-sm text-Dark-100', className)} ref={ref} {...props} />
))

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('p-6 pt-0', className)} ref={ref} {...props} />
  )
)
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('flex items-center p-6 pt-0', className)} ref={ref} {...props} />
  )
)
