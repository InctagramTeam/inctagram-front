import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { LG_BREAKPOINT, SM_BREAKPOINT, XS_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { cn, getIcon } from '@/shared/lib/utils'
import { NavLink } from '@/shared/types/navlink'
import { Button } from '@/shared/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip/tooltip'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  isCollapsed?: boolean
  link: NavLink
} & ComponentPropsWithoutRef<'a'>

export const SidebarLink = forwardRef<HTMLAnchorElement, Props>(
  ({ isCollapsed, link, ...rest }, ref) => {
    const pathname = usePathname()
    const isActive = pathname!.startsWith(link.href)
    const { width } = useResponsive()

    if (width === null) {
      return null
    }

    const tablet = width > XS_BREAKPOINT && width < LG_BREAKPOINT
    const mobile = width < SM_BREAKPOINT
    const desktop = !tablet && !mobile

    const classes = {
      content:
        'rounded-1/2 flex h-8 w-full max-w-[100px] items-center gap-4 bg-Dark-500 !text-Light-100',
      icon: 'h-[24px] basis-[24px]',
      link: cn(
        `relative h-auto flex !items-start gap-[12px] py-[0]
      !text-medium-text-14 text-Light-100 !whitespace-normal !text-left 
      transition ease-in-out hover:text-Primary-100
      before:absolute before:right-[-20%] before:content-[''] before:h-2 before:w-2 before:bg-Primary-900 before:rounded
      before:opacity-0 before:transition-opacity before:duration-300`,
        link.disabled && '!cursor-default !text-Dark-100',
        isActive && `text-Primary-500 before:opacity-1`,
        link.className
      ),
    }

    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button
              aria-label={isCollapsed ? link.name : ''}
              asComponent={Link}
              className={classes.link}
              disabled={link.disabled}
              href={link.href}
              onClick={link.handleClick}
              ref={ref}
              startIcon={
                <span aria-hidden className={classes.icon}>
                  {getIcon(link.href, isActive)}
                </span>
              }
              variant={'text'}
              {...rest}
            >
              {desktop && !isCollapsed && link.name}
              {(!desktop || isCollapsed) && (
                <TooltipContent className={classes.content} side={'right'}>
                  {link.name}
                </TooltipContent>
              )}
            </Button>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    )
  }
)

SidebarLink.displayName = 'DesktopSidebarItem'
