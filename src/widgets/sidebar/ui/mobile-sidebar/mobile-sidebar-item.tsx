import { forwardRef } from 'react'

import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
  MessageIcon,
  MessageOutlineIcon,
  PersonIcon,
  PersonOutlineIcon,
  PlusIcon,
  PlusOutlineIcon,
  SearchOutline,
  TrendingIcon,
} from '@/shared/assets/icons'
import { NavLink } from '@/widgets/sidebar'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReturnComponent } from '@/shared/types'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip/tooltip'

type Props = {
  link: NavLink
}

const linkClasses = {
  active: `text-Primary-500`,
  base: `flex gap-[12px] font-medium-text-14 transition ease-in-out hover:text-Primary-100 first:ml-0`,
  default: `text-Light-100`,
  disabled: `pointer-events-none text-Dark-100 cursor-default`,
}

export const MobileSidebarItem = forwardRef<HTMLAnchorElement, Props>(
  ({ link }, ref): ReturnComponent => {
    const pathname = usePathname()
    const isActive = pathname!.startsWith(link.href)

    const getIcon = (href: string, isActive: boolean) => {
      switch (href) {
        case '/home':
          return isActive ? <HomeIcon /> : <HomeOutlineIcon />
        case '/create':
          return isActive ? <PlusIcon /> : <PlusOutlineIcon />
        case '/messenger':
          return isActive ? <MessageIcon /> : <MessageOutlineIcon />
        case '/profile':
          return isActive ? <PersonIcon /> : <PersonOutlineIcon />
        case '/favorites':
          return isActive ? <BookmarkIcon /> : <BookmarkOutlineIcon />
        case '/search':
          return <SearchOutline />
        case '/statistics':
          return <TrendingIcon />
        case '/log-out':
        default:
          return null
      }
    }

    return (
      <Tooltip key={link.href} delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            aria-disabled={link.disabled}
            className={clsx(
              `ml-10 mb-0`,
              isActive
                ? linkClasses.active
                : link.disabled
                  ? linkClasses.disabled
                  : linkClasses.default,
              linkClasses.base
            )}
            href={link.href}
            onClick={link.handleClick}
            ref={ref}
          >
            {getIcon(link.href, isActive)}
            <TooltipContent
              side="top"
              className="flex text-Light-100 bg-Dark-500 items-center gap-4"
            >
              {link.name !== 'Log-out' && link.name}
            </TooltipContent>
          </Link>
        </TooltipTrigger>
      </Tooltip>
    )
  }
)
//

MobileSidebarItem.displayName = 'MobileSidebarItem'
