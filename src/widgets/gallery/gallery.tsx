import { EMPTY_STRING, ReturnComponent } from '@/shared'
import Image from 'next/image'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export const Gallery = ({ children, className }: Props): ReturnComponent => {
  return (
    <ul className={clsx(`grid max-w-[972px] gap-1 grid-cols-ideal-[234px]`, className)}>
      {children}
    </ul>
  )
}

Gallery.displayName = 'Gallery'
