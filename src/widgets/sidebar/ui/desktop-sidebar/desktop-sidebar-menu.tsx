import React, { forwardRef, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/shared/lib/utils'
import { DESKTOP_SIDEBAR_LINKS, DesktopSidebarList } from '@/widgets/sidebar'

type Props = {
  isCollapsed?: boolean
} & ComponentPropsWithoutRef<'aside'>

export const DesktopSidebarMenu = forwardRef<HTMLElement, Props>(
  ({ isCollapsed, ...rest }, ref) => {
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
        <DesktopSidebarList links={DESKTOP_SIDEBAR_LINKS} collapsed={isCollapsed} />
      </nav>
    )
  }
)

DesktopSidebarMenu.displayName = 'DesktopSidebarMenu'
