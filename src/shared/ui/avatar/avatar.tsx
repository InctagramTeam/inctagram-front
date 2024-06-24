'use client'
import * as React from 'react'
import { ComponentPropsWithoutRef, CSSProperties, ElementRef, ReactElement, useMemo } from 'react'

import { cn } from '@/shared'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { Undefinable } from '@/shared/types/undefinable'

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
  src?: string
  alt?: string
  className?: string
  /** Передаем размеры аватарки из вне: чтобы сделать аватарку круглой */
  size?: number
}
const AvatarImage = React.forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & AvatarImagerProps
>(({ className, size, src, alt, ...props }, ref) => {
  const styles = useMemo<Undefinable<CSSProperties>>(() => {
    return {
      width: size || 200,
      height: size || 200,
    }
  }, [size])

  return (
    <AvatarPrimitive.Image
      src={src}
      alt={alt}
      className={cn('aspect-square h-full w-full', className)}
      ref={ref}
      style={styles}
      {...props}
    />
  )
})

AvatarImage.displayName = AvatarPrimitive.Image.displayName

type AvatarFallbackProps = {
  userName?: string
}

const AvatarFallback = React.forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & AvatarFallbackProps
>(({ className, userName, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    ref={ref}
    {...props}
  >
    {userName?.[0] || 'U'}
  </AvatarPrimitive.Fallback>
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
