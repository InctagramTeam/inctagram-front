'use client'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  forwardRef,
  HTMLAttributes,
  memo,
  ReactNode,
} from 'react'

import { cn, PolymorphComponentPropsWithRef } from '@/shared'
import clsx from 'clsx'

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, ComponentPropsWithoutRef<T>> &
  OwnProps

type OwnProps = {
  variant?: CardVariant
  border?: CardBorder
  padding?: CardPadding
}

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardBorder = 'round' | 'normal' | 'partial'
export type CardPadding = '0' | '4' | '8' | '12' | '16' | '24'

type CardComponent = <T extends ElementType = 'div'>(props: Props<T>) => ReactNode

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'p-0',
  '4': 'p-[4px]',
  '8': 'p-[8px]',
  '12': 'p-[12px]',
  '16': 'p-[16px]',
  '24': 'p-[24px]',
}

export const Card: CardComponent = memo(
  forwardRef(
    <T extends ElementType = 'div'>(
      { asComponent, className, variant, border, padding = '4', ...props }: Props<T>,
      ref: ElementRef<T>
    ) => {
      const Component = asComponent || 'div'

      const paddingClass = mapPaddingToClass[padding]

      return (
        <Component
          {...props}
          className={clsx(
            `rounded-[2px] border-[1px] border-Dark-300 bg-Dark-500 shadow-sm shadow-Dark-300 transition-all duration-150 hover:scale-[1.02]`,
            className,
            variant === 'outlined' && `bg-Light-100 shadow-md`,
            variant === 'light' && `border-[1px] border-Light-900 bg-Light-700 shadow-Light-700`,
            border === 'round' && `rounded-full`,
            border === 'partial' && `rounded-lg`,
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
