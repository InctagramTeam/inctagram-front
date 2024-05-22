import { forwardRef } from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip/tooltip'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavLink } from '../../model/types/navlink.types'
import { getIcon } from '../helpers/getIcon'

type Props = {
  link: NavLink
}

const linkClasses = {
  active: ` text-Primary-500`,
  base: `flex gap-[12px] font-medium-text-14 transition ease-in-out
  hover:text-Primary-100 last:mt-auto last:mb-0`,
  default: `text-Light-100`,
  disabled: `pointer-events-none text-Dark-100 cursor-default`,
}

export const TabletSidebarItem = forwardRef<HTMLAnchorElement, Props>(({ link }, ref) => {
  const pathname = usePathname()
  const isActive = pathname!.startsWith(link.href)

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            aria-disabled={link.disabled}
            className={clsx(
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
              className="flexrounded-1/2 h-8 w-full max-w-[100px] !text-Light-100 bg-Dark-500
              items-center gap-4"
              side={'right'}
            >
              {link.name}
            </TooltipContent>
            <div
              className={clsx(isActive && `absolute right-6 w-2 h-2 rounded bg-Primary-900`)}
            ></div>
          </Link>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
})

TabletSidebarItem.displayName = 'DesktopSidebarItem'
