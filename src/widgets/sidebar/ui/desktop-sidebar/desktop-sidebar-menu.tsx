import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'

import { DesktopSidebarList } from './desktop-sidebar-list'

export const DesktopSidebarMenu = forwardRef<HTMLElement, ComponentPropsWithoutRef<'nav'>>(
  ({ ...rest }, ref): ReturnComponent => {
    const { isCollapsed } = useLayoutContext()

    const classes = {
      nav: cn(
        `h-[calc(100vh-60px)] top-[60px] pt-[72px] overflow-auto fixed l-0 w-full max-w-[240px] border-r-[1px] pb-[36px] border-r-Dark-300 pl-[60px] pr-[20px] shadow-sm`,
        rest.className,
        isCollapsed && `flex w-full max-w-[80px] justify-center shadow-sm`
      ),
    }

    return (
      <nav className={classes.nav} ref={ref} {...rest}>
        <DesktopSidebarList />
      </nav>
    )
  }
)

DesktopSidebarMenu.displayName = 'DesktopSidebarMenu'
