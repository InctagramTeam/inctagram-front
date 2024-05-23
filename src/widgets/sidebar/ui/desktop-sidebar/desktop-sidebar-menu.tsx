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
          `fixed top-[60px] left-0 pt-[72px] pl-[50px] pr-[40px] pb-[36px] w-full max-w-[240px] h-[calc(100vh-60px)] border-r-[1px] border-r-Dark-300 shadow-sm`,
          rest.className,
          isCollapsed && `w-full max-w-[80px] flex justify-center shadow-sm`
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
