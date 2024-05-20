'use client'
import { ComponentPropsWithoutRef, useState } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { MobileSidebarItem } from '@/widgets/sidebar'

import { NavLink } from '../../model/types/navlink.types'
import { Flex } from '@/shared/ui/flex'

const links = [
  {
    disabled: false,
    href: '/home',
  },
  {
    disabled: true,
    href: '/create',
  },
  {
    disabled: false,
    href: '/messenger',
  },
  {
    disabled: false,
    href: '/search',
  },
  {
    disabled: false,
    href: '/profile',
  },
] as NavLink[]

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const MobileSidebar = ({ className }: Props): ReturnComponent => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <nav
      className={cn(
        className,
        `fixed w-full bottom-0  left-0 right-0 flex flex justify-center h-[60px] border-t-[1px] border-t-Dark-300 shadow-sm pt-4`
      )}
      onClick={() => setIsOpenMenu(!isOpenMenu)}
    >
      {links.map(link => (
        <MobileSidebarItem key={link.href} link={link} />
      ))}
    </nav>
  )
}
MobileSidebar.displayName = 'MobileSidebar'
