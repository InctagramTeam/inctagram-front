import { Button } from '@/shared/ui/button'
import { LogOutIcon } from '@/shared/assets/icons'
import React, { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from '@/shared/lib/hooks'
import { clsx } from 'clsx'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip/tooltip'

type Props = {
  iconClassName?: string
  onlyIcon?: boolean
} & ComponentPropsWithoutRef<'button'>
export const LogoutButton = ({
  disabled,
  className,
  iconClassName,
  onlyIcon = false,
  ...rest
}: Props) => {
  const { t } = useTranslation()
  const classes = {
    button: clsx(
      'h-auto !justify-normal self-start py-[0] !text-left !text-medium-text-14',
      disabled && '!cursor-default !text-Dark-100',
      className
    ),
    content:
      'rounded-1/2 flex h-8 w-full max-w-[100px] items-center gap-4 bg-Dark-500 !text-Light-100',
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            className={clsx(
              'h-auto !justify-normal self-start py-[0] !text-left !text-medium-text-14',
              disabled && '!cursor-default !text-Dark-100',
              className
            )}
            onClick={() => {}}
            disabled={disabled}
            startIcon={<LogOutIcon className={iconClassName} />}
            variant={'text'}
            aria-label={onlyIcon ? t.button.logOut : ''}
            {...rest}
          >
            {onlyIcon ? (
              <TooltipContent className={classes.content} side={'right'}>
                {t.button.logOut}
              </TooltipContent>
            ) : (
              t.button.logOut
            )}
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}
