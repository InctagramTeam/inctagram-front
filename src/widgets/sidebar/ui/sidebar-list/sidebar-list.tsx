import React from 'react'

import { useLayoutContext } from '@/shared/layouts'
import { cn } from '@/shared/lib/utils'
import { NavLink } from '@/shared/types'
import { NavigationElement } from '@/shared/ui/navigation-element/navigation-element'
import Link from 'next/link'

type Props = {
  isMobile?: boolean
  links: NavLink[]
  onlyIcons?: boolean
}

export const SidebarList = ({ isMobile = false, links, onlyIcons = false }: Props) => {
  const { isCollapsed } = useLayoutContext()

  const classes = {
    item: cn(isMobile && `w-[24px] h-[24px]`, !isMobile && 'flex'),
    list: cn(
      'w-full flex cursor-pointer rounded-md transition-colors',
      !isMobile && 'mb-[46px] flex-col gap-[24px] [&>*:nth-child(5)]:mb-[46px]',
      (isCollapsed || isMobile) && 'justify-center',
      (isCollapsed || onlyIcons) && 'items-center',
      isMobile && 'gap-[36px]'
    ),
  }

  return (
    <ul className={classes.list}>
      {links.map(link => {
        return (
          <li className={classes.item} key={link.href}>
            <NavigationElement asComponent={Link} onlyIcon={onlyIcons} {...link} />
          </li>
        )
      })}
    </ul>
  )
}

SidebarList.displayName = 'SidebarList'
