import { useState } from 'react'

import { BellIcon, BellOutlineIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Flex } from '@/shared/ui/flex'
import { NotificationProps, NotificationsDropdown } from '@/widgets/header'
import Link from 'next/link'

type Props = {
  countNotifications?: number
  isAuth?: boolean
  notifications?: NotificationProps[]
}
export const HeaderDesktop = ({ countNotifications, isAuth, notifications }: Props) => {
  const classes = {
    button: `py-[6px] text-center !text-H3-16 hover:translate-y-0`,
    countNotifications: cn(
      `bg-Danger-500 text-Light-100 rounded-full w-[13px] h-[13px] flex items-center justify-center`,
      `absolute top-0 right-0 text-[0.6rem] leading-[0.5rem]`
    ),
    dropdownTrigger: cn(
      `w-[24px] !h-[24px] justify-center hover:translate-y-0 !p-0 relative`,
      `hover:bg-Primary-500 active:opacity-50 duration-300 transition-opacity`
    ),
    loginLink: cn(
      `px-[26px] !text-Primary-500 duration-300`,
      `hover:no-underline hover:!text-Primary-100`,
      `active:!text-Primary-700`,
      `focus:no-underline`
    ),
    signupLink: `px-[20px]`,
  }

  const [openDropdown, setOpenDropdown] = useState(false)

  const trigger = (
    <Button
      aria-label={openDropdown ? 'close notifications' : 'open notifications'}
      className={classes.dropdownTrigger}
      variant={'text'}
    >
      <>
        {openDropdown ? (
          <BellIcon aria-hidden className={'fill-Primary-500'} />
        ) : (
          <BellOutlineIcon aria-hidden className={'fill-Light-100'} />
        )}
        {countNotifications && (
          <span className={classes.countNotifications}>
            {countNotifications < 100 ? countNotifications : '...'}
          </span>
        )}
      </>
    </Button>
  )

  return (
    <Flex className={'flex-nowrap'} gap={'40'}>
      <NotificationsDropdown
        align={'end'}
        modal
        notifications={notifications}
        onOpenChange={setOpenDropdown}
        open={openDropdown}
        sideOffset={10}
        trigger={trigger}
      />
      <div>Select</div>
      {!isAuth && (
        <Flex className={'flex-nowrap'} gap={'24'}>
          <Button
            asComponent={Link}
            className={`${classes.button} ${classes.loginLink}`}
            href={'/auth/sign-in'}
            variant={'link'}
          >
            Log&nbsp;in
          </Button>
          <Button
            asComponent={Link}
            className={`${classes.button} ${classes.signupLink}`}
            href={'/auth/sign-up'}
          >
            Sign&nbsp;up
          </Button>
        </Flex>
      )}
    </Flex>
  )
}
