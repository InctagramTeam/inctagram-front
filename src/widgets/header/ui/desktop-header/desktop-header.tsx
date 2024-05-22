import { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Flex } from '@/shared/ui/flex'
import { NotificationProps, NotificationsDropdown } from '@/widgets/header'
import Link from 'next/link'
import { LanguageSelection } from "../language-selection/language-selection"
import { NotificationButtonMode } from "../notification-button-mode/notification-button-mode"

type Props = {
  countNotifications?: number
  isAuth?: boolean
  notifications?: NotificationProps[]
}

export const DesktopHeader = ({ countNotifications, isAuth, notifications }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const classes = {
    button: `py-[6px] text-center !text-H3-16 hover:translate-y-0`,
    loginLink: cn(
      `px-[26px] !text-Primary-500 duration-300`,
      `hover:no-underline hover:!text-Primary-100`,
      `active:!text-Primary-700`,
      `focus:no-underline`
    ),
    signupLink: `px-[20px]`,
  }

  const trigger = (
    <NotificationButtonMode countNotifications={countNotifications} openDropdown={openDropdown} />
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
      <div>
        <LanguageSelection />
      </div>
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
