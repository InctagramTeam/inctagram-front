import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'

import { TabletSidebarList } from './tablet-sidebar-list'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'nav'>

export const TabletSidebarMenu = forwardRef<HTMLElement, Props>(
  ({ className, ...rest }, ref): ReturnComponent => {
    return (
      <nav
        className={cn(
          `absolute left-1 top-[60px] flex h-[calc(100vh-60px)] w-full
          max-w-[80px] justify-center border-r border-r-Dark-300 px-2 py-[20px] shadow-sm`,
          className
        )}
        ref={ref}
        {...rest}
      >
        <TabletSidebarList {...rest} />
      </nav>
    )
  }
)
