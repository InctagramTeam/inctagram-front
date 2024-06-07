'use client'

import React from 'react'

import { LogOutIcon } from '@/shared/assets/icons'
import { LG_BREAKPOINT, SM_BREAKPOINT } from '@/shared/constants'
import { useLayoutContext } from '@/shared/layouts'
import { useResponsive, useTranslation } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import { NavigationElement } from '@/shared/ui/navigation-element'
import { getBaseLinks, getSidebarLinks } from '@/widgets/sidebar/model/ulils/sidebar-links'
import { SidebarList, ToggleCollapsedButtons } from '@/widgets/sidebar/ui'

export const Sidebar = (): ReturnComponent => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()
  const { t } = useTranslation()

  if (width === null) {
    return null
  }

  const tablet = width > SM_BREAKPOINT && width < LG_BREAKPOINT
  const mobile = width < SM_BREAKPOINT
  const desktop = width > LG_BREAKPOINT
  const onlyIcons = tablet || isCollapsed

  const classes = {
    button: cn('mt-auto', onlyIcons && 'mx-auto'),
    navigation: cn(`h-full flex justify-between flex-col items-start`, mobile && 'items-center'),
    wrapper: cn(
      `w-full fixed shadow-sm`,
      !mobile &&
        `max-w-[250px] h-[calc(100vh-var(--header-height))] top-[var(--header-height)] pb-[36px] pt-[72px] 
        overflow-y-auto scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300 scrollbar-thumb-rounded-full
        border-r-[1px] border-r-Dark-300`,
      !mobile && !isCollapsed && `pl-[60px] pr-[20px]`,
      onlyIcons && 'max-w-[80px] px-[12px] justify-center',
      mobile &&
        'max-w-full z-2 bottom-0 right-0 h-[var(--header-height)] w-full border-t-[1px] border-t-Dark-300 pt-4 bg-Dark-700'
    ),
  }

  return (
    <div className={classes.wrapper}>
      <nav className={classes.navigation}>
        {desktop && <ToggleCollapsedButtons />}
        {mobile ? (
          <SidebarList isMobile links={getBaseLinks()} onlyIcons />
        ) : (
          <>
            <SidebarList links={getSidebarLinks()} onlyIcons={onlyIcons} />
            <NavigationElement
              className={classes.button}
              name={t.button.logOut}
              onClick={() => {}}
              onlyIcon={onlyIcons}
              startIcon={<LogOutIcon />}
            />
          </>
        )}
      </nav>
    </div>
  )
}

Sidebar.displayName = 'Sidebar'
