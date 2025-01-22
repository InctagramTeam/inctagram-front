import { ReactNode } from 'react'

import {
  Button,
  EMPTY_STRING,
  ReturnComponent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  cn,
  getIcon,
} from '@/shared'
import { usePathname } from 'next/navigation'

type Props = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  href?: string
  isButton?: boolean
  name: string
  onClick?: () => void
  onlyIcon?: boolean
  startIcon?: ReactNode
  userId?: null | number
}

export function NavigationElement({
  className,
  disabled,
  name,
  onClick,
  onlyIcon,
  startIcon,
  userId,
  children,
  isButton = true,
  ...rest
}: Props): ReturnComponent {
  const pathname = usePathname()
  const isActive = rest.href && pathname?.startsWith(rest.href)
  const classes = {
    content:
      'rounded-1/2 flex h-8 w-full max-w-[100px] items-center gap-4 bg-Dark-500 !text-Light-100',
    icon: 'h-[24px] basis-[24px]',
    link: cn(
      `relative h-auto flex !items-start gap-[12px] !p-[0]
        !text-medium-text-14 text-Light-100 !whitespace-normal !text-left 
        transition ease-in-out hover:text-Primary-100
        before:absolute before:right-[-20%] before:content-[''] before:h-2 before:w-2 before:bg-Primary-900 before:rounded
        before:opacity-0 before:transition-opacity before:duration-300`,
      disabled && '!cursor-default !pointer-events-none !text-Dark-100',
      isActive && `text-Primary-500 before:opacity-1 !cursor-default !pointer-events-none`,
      className
    ),
  }
  const handleClick = () => {
    onClick?.()
  }

  const childrenButton = (
    <Button
      asChild
      className={classes.link}
      startIcon={
        (rest.href || startIcon) && (
          <span aria-hidden className={classes.icon}>
            {rest.href ? getIcon(rest.href, isActive as boolean, userId) : startIcon}
          </span>
        )
      }
      variant={'text'}
    >
      {children}
    </Button>
  )

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            aria-label={onlyIcon ? name : EMPTY_STRING}
            asChild={!isButton && !onlyIcon}
            className={classes.link}
            disabled={disabled}
            onClick={handleClick}
            startIcon={
              isButton || onlyIcon
                ? (rest.href || startIcon) && (
                    <span aria-hidden className={classes.icon}>
                      {rest.href ? getIcon(rest.href, isActive as boolean, userId) : startIcon}
                    </span>
                  )
                : undefined
            }
            variant={'text'}
            {...rest}
          >
            {onlyIcon ? (
              <TooltipContent className={classes.content} side={'right'}>
                {name}
              </TooltipContent>
            ) : (
              <>{!isButton ? childrenButton : name}</>
            )}
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}
