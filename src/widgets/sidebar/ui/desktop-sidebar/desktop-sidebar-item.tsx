import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavLink } from '../../model/types/navlink.types'
import { getIcon } from '../../model/utils/getIcon'

type Props = {
  isCollapsed?: boolean
  link: NavLink
} & ComponentPropsWithoutRef<'li'>

const linkClasses = {
  active: ` text-Primary-500`,
  base: `flex items-center gap-[8px] font-medium-text-14 transition ease-in-out
  hover:text-Primary-100`,
  default: `text-Light-100 `,
  disabled: `pointer-events-none text-Dark-100 cursor-default`,
}

export const DesktopSidebarItem = forwardRef<HTMLAnchorElement, Props>(
  ({ isCollapsed, link }, ref) => {
    const pathname = usePathname()
    const isActive = pathname!.startsWith(link.href)

    return (
      <li className={'last:mt-auto'}>
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
          {!isCollapsed && link.name}
          <div
            className={clsx(isActive && `absolute right-4 w-2 h-2 rounded bg-Primary-900`)}
          ></div>
        </Link>
      </li>
    )
  }
)

DesktopSidebarItem.displayName = 'DesktopSidebarItem'
