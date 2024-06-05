'use client'

import { LG_BREAKPOINT, SM_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { getBaseLinks, getSidebarLinks } from '@/widgets/sidebar/model/ulils/sidebar-links'
import React from 'react'
import { useLayoutContext } from '@/shared/layouts'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import { LogoutButton } from '@/shared/ui/logout-button'
import { SidebarList, ToggleCollapsedButtons } from '@/widgets/sidebar/ui'

export const Sidebar = (): ReturnComponent => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const tablet = width > SM_BREAKPOINT && width < LG_BREAKPOINT
  const mobile = width < SM_BREAKPOINT
  const desktop = width > LG_BREAKPOINT

  const classes = {
    wrapper: cn(
      `w-full fixed shadow-sm`,
      !mobile &&
        `max-w-[250px] h-[calc(100vh-var(--header-height))] top-[var(--header-height)] pb-[36px] pt-[72px] 
        overflow-y-auto scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300 scrollbar-thumb-rounded-full
        border-r-[1px] border-r-Dark-300`,
      !mobile && !isCollapsed && `pl-[60px] pr-[20px]`,
      (tablet || isCollapsed) && 'max-w-[80px] px-[12px] justify-center',
      mobile &&
        'z-2 bottom-0 right-0 h-[var(--header-height)] w-full border-t-[1px] border-t-Dark-300 pt-4 bg-Dark-700'
    ),
    navigation: `h-full flex justify-between items-center flex-col`,
    button: cn('mt-auto', (tablet || isCollapsed) && 'mx-auto'),
  }

  return (
    <div className={classes.wrapper}>
      <nav className={classes.navigation}>
        {desktop && <ToggleCollapsedButtons />}
        {mobile ? (
          <SidebarList links={getBaseLinks()} isMobile />
        ) : (
          <>
            <SidebarList links={getSidebarLinks()} />
            <LogoutButton className={classes.button} onlyIcon={tablet || isCollapsed} />
          </>
        )}
      </nav>
    </div>
  )
}

Sidebar.displayName = 'Sidebar'
