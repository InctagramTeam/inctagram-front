'use client'

import { memo, useMemo } from 'react'

import { AppLink, NavLink, NavigationElement, cn, getIcon, useLayoutContext } from '@/shared'

type Props = {
  isMobile?: boolean
  links: NavLink[]
  onlyIcons?: boolean
  userId: null | number
}

export const SidebarList = memo(({ isMobile = false, links, userId, onlyIcons = false }: Props) => {
  const { isCollapsed } = useLayoutContext()

  const classes = useMemo(
    () => ({
      item: cn(isMobile && `w-[24px] h-[24px]`, !isMobile && 'flex'),
      list: cn(
        'w-full flex cursor-pointer rounded-md transition-colors',
        !isMobile && 'mb-[46px] flex-col gap-[24px] [&>*:nth-child(5)]:mb-[46px]',
        (isCollapsed || isMobile) && 'justify-center',
        (isCollapsed || onlyIcons) && 'items-center',
        isMobile && 'gap-[36px]'
      ),
    }),
    [isCollapsed, isMobile, onlyIcons]
  )

  const renderLink = (link: NavLink) => {
    if (link.disabled) {
      return (
        <li className={classes.item} key={link.href}>
          <NavigationElement
            disabled={link.disabled}
            isButton={false}
            name={link.name}
            onlyIcon={onlyIcons}
            startIcon={getIcon(link.href, false, userId)}
            userId={userId}
          >
            <span>{link.name}</span>
          </NavigationElement>
        </li>
      )
    }

    return (
      <li className={classes.item} key={link.href}>
        <NavigationElement
          isButton={false}
          onlyIcon={onlyIcons}
          startIcon={getIcon(link.href, false, userId)}
          userId={userId}
          {...link}
        >
          <AppLink href={link.href}>{link.name}</AppLink>
        </NavigationElement>
      </li>
    )
  }

  return <ul className={classes.list}>{links.map(renderLink)}</ul>
})

SidebarList.displayName = 'SidebarList'
