import React, { forwardRef } from 'react'
import { ComponentPropsWithoutRef } from 'react'

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
          `absolute top-[60px] left-1 w-full max-w-[80px] h-[calc(100vh-60px)]
          flex justify-center px-2 py-[20px] border-r border-r-Dark-300 shadow-sm`,
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
