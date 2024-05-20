import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { NavLink } from '@/widgets/sidebar'

import { DesktopSidebarItem } from './desktop-sidebar-item'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

const desktopLinks = [
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
    href: '/profile',
    name: 'My Profile',
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
    href: '/statistics',
    name: 'Statistics',
  },
  {
    disabled: false,
    href: '/favorites',
    name: 'Favorites',
  },
  {
    disabled: true,
    href: '/log-out',
    name: 'Log-out',
  },
] as NavLink[]

export const DesktopSidebar = forwardRef<HTMLElement, Props>(
  ({ className }, ref): ReturnComponent => {
    return (
      <aside className={'w-full'}>
        <nav
          className={cn(
            className,
            'pt-[72px] pl-[50px] pr-[40px] pb-[36px] h-[660px] w-full max-w-[240px] fixed top-[60px] left-0' +
              'border-r-[1px] border-r-Dark-300 [&>*:nth-child(5)]:mb-[46px] shadow-sm'
          )}
          ref={ref}
        >
          <ul className={`rounded-md cursor-pointer transition-colors`}>
            {desktopLinks.map(link => {
              return <DesktopSidebarItem key={link.href} link={link} />
            })}
          </ul>
        </nav>
      </aside>
    )
  }
)

DesktopSidebar.displayName = 'DesktopSidebar'
