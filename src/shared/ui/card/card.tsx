'use client'
import * as React from 'react'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from 'react'

import { PolymorphComponentPropsWithRef } from '@/shared/types'
import clsx from 'clsx'
import { cn } from '@/shared/lib/utils'

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

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
)

const CardTitle = React.forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('tracking-bg-Dark-500 text-2xl font-semibold leading-none', className)}
      {...props}
    />
  )
)

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-Dark-100', className)} {...props} />
))

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
)
