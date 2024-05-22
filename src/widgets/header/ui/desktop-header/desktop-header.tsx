import { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Flex } from '@/shared/ui/flex'
import { NotificationProps, NotificationsDropdown } from '@/widgets/header'
import Link from 'next/link'
import { LanguageSelection } from '../language-selection/language-selection'
import { NotificationButtonMode } from '../notification-button-mode/notification-button-mode'
import { AuthButtons } from '@/widgets/header/ui/auth-buttons/auth-buttons'

type Props = {
  countNotifications?: number
  isAuth?: boolean
  notifications?: NotificationProps[]
}

export const DesktopHeader = ({ countNotifications, isAuth, notifications }: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false)

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
          <NotificationButtonMode
            countNotifications={countNotifications}
            openDropdown={openDropdown}
          />
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
