import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { DesktopSidebarItem } from './desktop-sidebar-item'
import { NavLink } from '@/widgets/sidebar'
import { Button } from '@/shared/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/assets/icons'

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
    href: '/profile',
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
    href: '/statistics',
  },
  {
    disabled: false,
    href: '/favorites',
  },
  {
    disabled: true,
    href: '/log-out',
  },
] as NavLink[]

type Props = {
  className?: string
  isCollapsed?: boolean
  onToggleIsCollapsedClick: (isCollapsed: boolean) => void
} & ComponentPropsWithoutRef<'aside'>

export const DesktopSidebar = forwardRef<HTMLElement, Props>(
  ({ className, onToggleIsCollapsedClick, isCollapsed }, ref): ReturnComponent => {
    return (
      <>
        {isCollapsed ? (
          <Button
            onClick={() => onToggleIsCollapsedClick(!isCollapsed)}
            className={'absolute z-10 left-[100px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
            variant={'text'}
          >
            <ChevronRightIcon className={'!fill-Light-100/70'} />
          </Button>
        ) : (
          <Button
            onClick={() => onToggleIsCollapsedClick(!isCollapsed)}
            className={'absolute z-10 left-[200px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
            variant={'text'}
          >
            <ChevronLeftIcon className={'!fill-Light-100/70'} />
          </Button>
        )}
        <aside className="w-full h-full" ref={ref}>
          <nav
            className={cn(
              `fixed top-[60px] left-0 h-screen  pt-[72px] pl-[50px] pr-[40px] pb-[36px] w-full max-w-[240px]  border-r-[1px] border-r-Dark-300 [&>*:nth-child(5)]:mb-[46px] shadow-sm`,
              className,
              isCollapsed &&
                `absolute top-[80px] left-0 w-full max-w-[80px] h-full flex justify-center p-2 border-r-Dark-300 [&>*:nth-child(5)]:mb-[46px] shadow-sm`
            )}
          >
            <ul className="rounded-md cursor-pointer transition-colors">
              {isCollapsed
                ? links.map(link => (
                    <DesktopSidebarItem key={link.href} isCollapsed={isCollapsed} link={link} />
                  ))
                : desktopLinks.map(link => (
                    <DesktopSidebarItem key={link.href} isCollapsed={isCollapsed} link={link} />
                  ))}
            </ul>
          </nav>
        </aside>
      </>
    )
  }
)

DesktopSidebar.displayName = 'DesktopSidebar'
