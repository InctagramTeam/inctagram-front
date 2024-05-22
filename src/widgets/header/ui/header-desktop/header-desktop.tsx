import { useState } from 'react'
import * as React from 'react'

import { Flex } from '@/shared/ui/flex'
import { AuthButtons, NotificationProps, NotificationsDropdown } from '@/widgets/header'

type Props = {
  isAuth?: boolean
  notifications?: NotificationProps[]
}
export const HeaderDesktop = ({ isAuth, notifications }: Props) => {
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
          <AuthButtons />
        </Flex>
      )}
    </Flex>
  )
}
