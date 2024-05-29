import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'

import { DesktopSidebarList } from './desktop-sidebar-list'

export const DesktopSidebarMenu = forwardRef<HTMLElement, ComponentPropsWithoutRef<'nav'>>(
  ({ ...rest }, ref): ReturnComponent => {
    const { isCollapsed } = useLayoutContext()

    return (
      <nav
        className={cn(
          `fixed left-0 top-[60px] h-[calc(100vh-60px)] w-full max-w-[240px] border-r-[1px] border-r-Dark-300 pb-[36px] pl-[50px] pr-[40px] pt-[72px] shadow-sm`,
          rest.className,
          isCollapsed && `flex w-full max-w-[80px] justify-center shadow-sm`
        )}
        ref={ref}
        {...rest}
      >
        <DesktopSidebarList />
      </nav>
    )
  }
)

DesktopSidebarMenu.displayName = 'DesktopSidebarMenu'
