'use client'
import * as React from 'react'
import { CSSProperties, ComponentPropsWithoutRef, ElementRef, useMemo } from 'react'

import { cn } from '@/shared'
import { Undefinable } from '@/shared/types/undefinable'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

const Avatar = React.forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      ref={ref}
      {...props}
    />
  )
})

Avatar.displayName = AvatarPrimitive.Root.displayName

type AvatarImagerProps = {
  alt?: string
  className?: string
  /** Передаем размеры аватарки из вне: чтобы сделать аватарку круглой */
  size?: number
  src?: string
}
const AvatarImage = React.forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImagerProps & ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ alt, className, size, src, ...props }, ref) => {
  const styles = useMemo<Undefinable<CSSProperties>>(() => {
    return {
      height: size || 200,
      width: size || 200,
    }
  }, [size])

  return (
    <AvatarPrimitive.Image
      alt={alt}
      className={cn('aspect-square h-full w-full object-cover', className)}
      ref={ref}
      src={src}
      style={styles}
      {...props}
    />
  )
})

AvatarImage.displayName = AvatarPrimitive.Image.displayName

type AvatarFallbackProps = {
  children?: React.ReactNode
  userName?: string
}

const AvatarFallback = React.forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps & ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ children, className, userName, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    ref={ref}
    {...props}
  >
    {children || userName?.[0] || 'U'}
  </AvatarPrimitive.Fallback>
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
