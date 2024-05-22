import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { TabletSidebarItem } from 'src/widgets/sidebar/ui/tablet-sidebar/tablet-sidebar-item'
import { NavLink } from '@/widgets/sidebar'

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
      <aside className="w-full" ref={ref}>
        <nav
          className={cn(
            `absolute top-[60px] left-1 w-full max-w-[80px] h-[calc(100vh-60px)] flex justify-center px-2 py-[20px] border-r border-r-Dark-300 shadow-sm`,
            className
          )}
        >
          <ul className="flex flex-col gap-[24px] rounded-md cursor-pointer transition-colors [&>*:nth-child(5)]:mb-[46px] h-full">
            {tabletLinks.map(link => (
              <li key={link.href} className="last:mt-auto">
                <TabletSidebarItem link={link} />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    )
  }
)

TabletSidebar.displayName = 'DesktopSidebar'
