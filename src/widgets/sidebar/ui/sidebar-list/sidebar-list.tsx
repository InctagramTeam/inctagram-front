import { SidebarLink } from '@/widgets/sidebar/ui'
import React from 'react'
import { cn } from '@/shared/lib/utils'
import { NavLink } from '@/shared/types'
import { useLayoutContext } from '@/shared/layouts'

type Props = {
  isMobile?: boolean
  links: NavLink[]
}

export const SidebarList = ({ links, isMobile = false }: Props) => {
  const { isCollapsed } = useLayoutContext()

  const classes = {
    list: cn(
      'w-full flex cursor-pointer rounded-md transition-colors',
      !isMobile && 'mb-[46px] flex-col gap-[24px] [&>*:nth-child(5)]:mb-[46px]',
      (isCollapsed || isMobile) && 'justify-center',
      isCollapsed && 'items-center',
      isMobile && 'gap-[36px]'
    ),
    item: cn(isMobile && `w-[24px] h-[24px]`, !isMobile && 'flex'),
  }

  return (
    <ul className={classes.list}>
      {links.map(link => {
        return (
          <li className={classes.item} key={link.href}>
            <SidebarLink isCollapsed={isCollapsed} link={link} />
          </li>
        )
      })}
    </ul>
  )
}

SidebarList.displayName = 'SidebarList'
