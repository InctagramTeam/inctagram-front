import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { TooltipProvider } from '@/shared/ui/tooltip/tooltip'
import { NavLink } from '@/widgets/sidebar'
import { TabletSidebarItem } from 'src/widgets/sidebar/ui/tablet-sidebar/tablet-sidebar-item'

const tabletLinks = [
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
    name: 'Profile',
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
    name: 'Logout',
  },
] as NavLink[]

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const TabletSidebar = forwardRef<HTMLElement, Props>(
  ({ className }, ref): ReturnComponent => {
    return (
      <TooltipProvider>
        <aside className={'w-full'} ref={ref}>
          <nav
            className={cn(
              `absolute top-[80px] left-1 w-full max-w-[80px] min-h-[80px]
            flex justify-center p-2 border-r-Dark-300 [&>*:nth-child(5)]:mb-[46px] shadow-sm`,
              className
            )}
          >
            <ul className={'rounded-md cursor-pointer transition-colors'}>
              {tabletLinks.map(link => (
                <TabletSidebarItem key={link.href} link={link} />
              ))}
            </ul>
          </nav>
        </aside>
      </TooltipProvider>
    )
  }
)

TabletSidebar.displayName = 'DesktopSidebar'
