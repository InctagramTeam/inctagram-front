'use client'
import { ComponentPropsWithoutRef, useState } from 'react'

import { ReturnComponent } from '@/shared/types'
import { MobileSidebarItem } from '@/widgets/sidebar'
import { clsx } from 'clsx'

import { NavLink } from '../../model/types/navlink.types'

const mobileLinks = [
  {
    disabled: false,
    href: '/home',
    name: 'Home',
  },
  {
    disabled: true,
    href: '/create',
    name: 'Create',
  },
  {
    disabled: false,
    href: '/messenger',
    name: 'Messenger',
  },
  {
    disabled: false,
    href: '/search',
    name: 'Search',
  },
  {
    disabled: false,
    href: '/profile',
    name: 'Profile',
  },
] as NavLink[]

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const MobileSidebar = ({ className }: Props): ReturnComponent => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <aside>
      <nav
        className={clsx(
          className,
          `fixed w-full bottom-0 left-0 right-0 flex justify-center h-[60px] border-t-[1px] border-t-Dark-300 shadow-sm pt-4`
        )}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <ul className="flex gap-[36px]">
          {mobileLinks.map(link => (
            <li key={link.href}>
              <MobileSidebarItem link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
