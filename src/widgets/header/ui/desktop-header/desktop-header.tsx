import { useState } from 'react'
import { Flex } from '@/shared/ui/flex'
import { NotificationProps, NotificationsDropdown } from '@/widgets/header'
import { LanguageSelection } from '../language-selection/language-selection'
import { AuthButtons } from '@/widgets/header/ui/auth-buttons/auth-buttons'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import { NotificationButton } from '@/widgets/header/ui/notification-button-mode/notification-button'

type Props = {
  countNotifications?: number
  isAuth?: boolean
  notifications?: NotificationProps[]
}

export const DesktopHeader = ({ countNotifications, isAuth, notifications }: Props) => {
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
