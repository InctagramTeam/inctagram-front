'use client'

import React from 'react'

import { LogOutIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { NavigationElement } from '@/shared/ui'
import { SidebarList, ToggleCollapsedButtons } from '@/widgets/sidebar/ui'

import { useBreakpointMode } from '../model/hooks/use-breakpoin-mode'

export const Sidebar = ({ isAuth }: { isAuth: boolean }): ReturnComponent => {
  const { desktop, isCollapsed, mobile, mobileSidebarLinks, onlyIcons, sidebarLinks, t, width } =
    useBreakpointMode()

  if (width === null) {
    return null
  }

  const classes = {
    button: cn('mt-auto', onlyIcons && 'mx-auto'),
    navigation: cn(`h-full flex justify-between flex-col items-start`, mobile && 'items-center'),
    wrapper: cn(
      `w-full fixed top-0 bottom-0 overflow-y-scroll shadow-sm`,
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

  const displayModeSidebar = () => {
    if (desktop) {
      return (
        <>
          <ToggleCollapsedButtons />
          <SidebarList links={sidebarLinks} onlyIcons={onlyIcons} />
          {isAuth && (
            <NavigationElement
              className={classes.button}
              name={t.button.logOut}
              onlyIcon={onlyIcons}
              startIcon={<LogOutIcon />}
            />
          )}
        </>
      )
    }

    if (mobile) {
      return <SidebarList isMobile links={mobileSidebarLinks} onlyIcons />
    }

    return (
      <>
        <SidebarList links={sidebarLinks} onlyIcons={onlyIcons} />
        <NavigationElement
          className={classes.button}
          name={t.button.logOut}
          onlyIcon={onlyIcons}
          startIcon={<LogOutIcon />}
        />
      </>
    )
  }

  return (
    <div className={classes.wrapper}>
      <nav className={classes.navigation}>{displayModeSidebar()}</nav>
    </div>
  )
}
