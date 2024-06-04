import { forwardRef } from 'react'

import { getIcon } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import { NavLink } from '@/shared/types/navlink'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip/tooltip'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  link: NavLink
}

const linkClasses = {
  active: ` text-Primary-500`,
  base: `block gap-[12px] font-medium-text-14 transition ease-in-out
  hover:text-Primary-100 last:mt-auto last:mb-0 relative`,
  default: `text-Light-100`,
  disabled: `pointer-events-none text-Dark-100 cursor-default`,
}

export const TabletSidebarItem = forwardRef<HTMLAnchorElement, Props>(
  ({ link }, ref): ReturnComponent => {
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
                className={
                  'rounded-1/2 flex h-8 w-full max-w-[100px] items-center gap-4 bg-Dark-500 !text-Light-100'
                }
                side={'right'}
              >
                {link.name}
              </TooltipContent>
              <div
                aria-hidden
                className={clsx(
                  isActive && `absolute -right-2 top-0 h-2 w-2 rounded bg-Primary-900`
                )}
              ></div>
            </Link>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    )
  }
)

TabletSidebarItem.displayName = 'DesktopSidebarItem'
