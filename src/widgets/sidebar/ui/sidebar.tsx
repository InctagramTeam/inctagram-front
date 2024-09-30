'use client'

import React, { useState } from 'react'

import { NavigationElement, ReturnComponent, cn } from '@/shared'
import { LogOutIcon } from '@/shared/assets/icons'
import { useBreakpointMode } from '@/widgets/sidebar/model'
import { SidebarList, ToggleCollapsedButtons } from '@/widgets/sidebar/ui'
import { LogoutModal, useLogout } from '@/feature'

type Props = {
  isAuth: boolean
}
export const Sidebar = ({ isAuth }: Props): ReturnComponent => {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false)
  const { isCollapsed, mobile, mobileSidebarLinks, onlyIcons, sidebarLinks, t, tablet } =
    useBreakpointMode()
  const { mutate } = useLogout()
  const classes = {
    button: cn('mt-auto', onlyIcons && 'mx-auto'),
    navigation: cn(`h-full flex justify-between flex-col items-start`, mobile && 'items-center'),
    wrapper: cn(
      `w-full fixed bottom-0 overflow-y-scroll shadow-sm`,
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
  const handleLogout = () => {
    mutate()
  }
  const handleClickLogoutBtn = () => {
    setIsOpenLogoutModal(true)
  }

  const displayModeSidebar = () => {
    if (mobile) {
      return <SidebarList isMobile links={mobileSidebarLinks} onlyIcons />
    }

    if (tablet) {
      return (
        <>
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

    return (
      <>
        <ToggleCollapsedButtons />
        <SidebarList links={sidebarLinks} onlyIcons={onlyIcons} />
        {isAuth && (
          <>
            <NavigationElement
              className={classes.button}
              name={t.button.logOut}
              onlyIcon={onlyIcons}
              onClick={handleClickLogoutBtn}
              startIcon={<LogOutIcon />}
            />
            <LogoutModal
              open={isOpenLogoutModal}
              onOpenChange={setIsOpenLogoutModal}
              logout={handleLogout}
            />
          </>
        )}
      </>
    )
  }

  return (
    <div className={classes.wrapper}>
      <nav className={classes.navigation}>{displayModeSidebar()}</nav>
    </div>
  )
}
