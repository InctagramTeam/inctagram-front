import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { NavLink } from '@/widgets/sidebar'

import { DesktopSidebarItem } from './desktop-sidebar-item'

const links = [
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

type Props = {
  className?: string
  isCollapsed?: boolean
  onToggleIsCollapsedClick: (isCollapsed: boolean) => void
} & ComponentPropsWithoutRef<'aside'>

export const DesktopSidebar = forwardRef<HTMLElement, Props>(
  ({ className, isCollapsed, onToggleIsCollapsedClick }, ref): ReturnComponent => {
    return (
      <>
        {isCollapsed ? (
          <Button
            className={'fixed z-10 left-[30px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
            onClick={() => onToggleIsCollapsedClick(!isCollapsed)}
            variant={'text'}
          >
            <ChevronRightIcon className={'!fill-Light-100/70'} />
          </Button>
        ) : (
          <Button
            className={'fixed z-10 left-[200px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
            onClick={() => onToggleIsCollapsedClick(!isCollapsed)}
            variant={'text'}
          >
            <ChevronLeftIcon className={'!fill-Light-100/70'} />
          </Button>
        )}

        <aside>
          <nav
            className={cn(
              `fixed top-[60px] left-0 pt-[72px] pl-[50px] pr-[40px] pb-[36px] w-full max-w-[240px] h-[calc(100vh-60px)] border-r-[1px] border-r-Dark-300 shadow-sm`,
              className,
              isCollapsed && `w-full max-w-[80px] flex justify-center shadow-sm`
            )}
            ref={ref}
          >
            <ul
              className={
                'flex flex-col gap-[24px] rounded-md cursor-pointer transition-colors [&>*:nth-child(5)]:mb-[46px] h-full'
              }
            >
              {links.map(link => (
                <DesktopSidebarItem isCollapsed={isCollapsed} key={link.href} link={link} />
              ))}
            </ul>
          </nav>
        </aside>
      </>
    )
  }
)

DesktopSidebar.displayName = 'DesktopSidebar'
