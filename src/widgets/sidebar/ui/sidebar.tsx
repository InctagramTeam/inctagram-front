'use client'

import { LG_BREAKPOINT, SM_BREAKPOINT, XS_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { getSidebarLinks } from '@/widgets/sidebar/model/ulils/sidebar-links'
import { DesktopSidebarItem } from '@/widgets/sidebar/ui/desktop-sidebar/desktop-sidebar-item'
import { ToggleCollapsedButtons } from '@/widgets/sidebar/ui/desktop-sidebar/toggle-collapsed-buttons'
import React from 'react'
import { useLayoutContext } from '@/shared/layouts'
import { cn } from '@/shared/lib/utils'
import { TabletSidebarItem } from '@/widgets/sidebar/ui/tablet-sidebar/tablet-sidebar-item'

export const Sidebar = () => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const tablet = width > XS_BREAKPOINT && width < LG_BREAKPOINT
  const mobile = width < SM_BREAKPOINT
  const desktop = !tablet && !mobile

  const classes = {
    wrapper: cn(
      `h-[calc(100vh-60px)] top-[60px] pt-[72px] fixed w-full max-w-[240px] border-r-[1px] border-r-Dark-300 shadow-sm`,
      desktop && `pb-[36px] pt-[72px]`,
      desktop && !isCollapsed && `pl-[60px] pr-[20px]`,
      isCollapsed && `flex w-full max-w-[80px] px-[12px] justify-center shadow-sm `,
      tablet && `max-w-[80px]`
    ),
    list: cn(
      'flex h-full cursor-pointer flex-col gap-[24px] rounded-md transition-colors [&>*:nth-child(5)]:mb-[46px]',
      tablet && 'justify-center items-center'
    ),
    item: cn(!desktop && `w-[24px] h-[24px]`),
    toggleButton: ``,
  }

  return (
    <aside className={classes.wrapper}>
      <nav>
        {desktop && <ToggleCollapsedButtons />}
        <ul className={classes.list}>
          {getSidebarLinks().map(link => {
            return (
              <li className={classes.item} key={link.href}>
                {desktop && <DesktopSidebarItem isCollapsed={isCollapsed} link={link} />}
                {(tablet || mobile) && <TabletSidebarItem link={link} />}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
