'use client'

import { ReturnComponent } from '@/shared'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export const Gallery = ({ children, className }: Props): ReturnComponent => {
  return <ul className={clsx(`grid`, className)}>{children}</ul>
}

Gallery.displayName = 'Gallery'
