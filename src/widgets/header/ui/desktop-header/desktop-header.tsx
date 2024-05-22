'use client'
import { useState } from 'react'
import { Flex } from '@/shared/ui/flex'
import { NotificationButton, NotificationProps, NotificationsDropdown } from '@/widgets/header'
import { LanguageSelection } from '../language-selection/language-selection'
import { AuthButtons } from '../auth-buttons/auth-buttons'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'

type Props = {
  countNotifications?: number
  isAuth?: boolean
  notifications?: NotificationProps[]
}

export const DesktopHeader = (props: Props): ReturnComponent => {
  const { countNotifications, isAuth, notifications } = props
  const [openDropdown, setOpenDropdown] = useState(false)

  const classes = {
    dropdownTrigger: cn(
      `w-[24px] !h-[24px] justify-center hover:translate-y-0 !p-0 relative`,
      `hover:bg-Primary-500 active:opacity-50 duration-300 transition-opacity`
    ),
  }

  return (
    <Flex className={'flex-nowrap'} gap={'40'}>
      <NotificationsDropdown
        align={'end'}
        modal
        notifications={notifications}
        onOpenChange={setOpenDropdown}
        open={openDropdown}
        sideOffset={10}
        trigger={
          <Button
            aria-label={openDropdown ? 'close notifications' : 'open notifications'}
            className={classes.dropdownTrigger}
            onClick={() => setOpenDropdown(!openDropdown)}
            variant={'text'}
          >
            <NotificationButton
              openDropdown={openDropdown}
              countNotifications={countNotifications}
            />
          </Button>
        }
      />
      <div>
        <LanguageSelection />
      </div>
      {!isAuth && (
        <Flex className={'flex-nowrap'} gap={'24'}>
          <AuthButtons />
        </Flex>
      )}
    </Flex>
  )
}
