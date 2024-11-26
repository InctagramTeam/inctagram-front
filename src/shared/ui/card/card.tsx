'use client'
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, memo } from 'react'

import { Slot, Slottable } from '@radix-ui/react-slot'
import clsx from 'clsx'

export type CardVariant = 'light' | 'normal' | 'outlined'
export type CardBorder = 'circle' | 'normal' | 'partial'
export type CardPadding = '0' | '4' | '8' | '12' | '16' | '24' | 'default'

type CardProps = {
  asChild?: boolean
  border?: CardBorder
  children?: ReactNode
  className?: string
  padding?: CardPadding
  variant?: CardVariant
} & ComponentPropsWithoutRef<'div'>

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'p-0',
  '4': 'p-[4px]',
  '8': 'p-[8px]',
  '12': 'p-[12px]',
  '16': 'p-[16px]',
  '24': 'p-[24px]',
  default: '',
}

export const Card = memo(
  forwardRef<ElementRef<'div'>, CardProps>(
    (
      {
        asChild = false,
        border = 'normal',
        padding = 'default',
        variant = 'normal',
        className,
        children,
        ...props
      },
      ref
    ) => {
      const Component = asChild ? Slot : 'div'

      const paddingClass = mapPaddingToClass[padding]

      const classes = clsx(
        `rounded-[2px] border-[1px] border-Dark-300 bg-Dark-500 shadow-sm shadow-Dark-300 transition-all duration-300`,
        variant === 'outlined' && `bg-Light-100 shadow-md`,
        variant === 'light' &&
          `border-[1px] border-Light-900 bg-Light-700 text-Dark-700 shadow-Light-700`,
        border === 'circle' && `rounded-full`,
        border === 'partial' && `rounded-lg`,
        border === 'normal' && `rounded`,
        paddingClass,
        className
      )

      return (
        <Component {...props} className={classes} ref={ref}>
          <Slottable>{children}</Slottable>
        </Component>
      )
    }
  )
)

export const CardHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div className={clsx('flex flex-col space-y-1.5 p-6', className)} ref={ref} {...props} />
  )
)

export const CardTitle = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h3'>>(
  ({ className, ...props }, ref) => (
    <h3
      className={clsx('tracking-bg-Dark-500 text-2xl font-semibold leading-none', className)}
      ref={ref}
      {...props}
    />
  )
)

export const CardDescription = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...props }, ref) => (
    <p className={clsx('text-sm text-Dark-100', className)} ref={ref} {...props} />
  )
)

export const CardContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div className={clsx('p-6 pt-0', className)} ref={ref} {...props} />
  )
)

export const CardFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div className={clsx('flex items-center p-6 pt-0', className)} ref={ref} {...props} />
  )
)
