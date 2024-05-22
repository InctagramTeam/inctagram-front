import { useState } from 'react'
import * as React from 'react'

import { Button } from '@/shared/ui/button'
import { Flex } from '@/shared/ui/flex'
import { NotificationProps, NotificationsDropdown } from '@/widgets/header'
import Link from 'next/link'

type Props = {
  isAuth?: boolean
  notifications?: NotificationProps[]
}
export const HeaderDesktop = ({ isAuth, notifications }: Props) => {
  const classes = {
    button: `py-[6px] text-center !text-H3-16 hover:translate-y-0`,
    loginLink: `px-[26px] !text-Primary-500 duration-300
      hover:no-underline hover:!text-Primary-100
      active:!text-Primary-700
      focus:no-underline`,
    signupLink: `px-[20px]`,
  }

  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <Flex className={'flex-nowrap'} gap={'40'}>
      <NotificationsDropdown
        notifications={notifications}
        onOpenChange={setOpenDropdown}
        open={openDropdown}
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
