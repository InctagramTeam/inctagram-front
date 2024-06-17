import * as React from 'react'

import { BellIcon, BellOutlineIcon } from '@/shared/assets/icons'
import { ELLIPSIS_STRING } from '@/shared/constants/base'
import { useTranslation } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Dropdown } from '@/shared/ui/dropdown-menu'
import { maxShowNumberNotifications } from '@/widgets/header/model/constants/base'
import { NotificationProps, NotificationsDropdownList } from '@/widgets/header/ui'
import { memo } from 'react'

export type NotificationsDropdownProps = {
  alternativeText?: string
  notifications?: NotificationProps[]
  onOpenChange?: (value: boolean) => void
  open?: boolean
}

export const NotificationsDropdown = memo((props: NotificationsDropdownProps) => {
  const { t } = useTranslation()
  const {
    alternativeText = t.layout.notificationsDropdown.alternativeText,
    notifications,
    onOpenChange,
    open,
  } = props
  const classes = {
    arrow: `absolute top-0 right-[1rem] w-[1.2rem] h-[0.6rem] translate-y-[-100%] translate-x-[50%]`,
    content: `h-[360px] overflow-y-auto
      scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300
      scrollbar-thumb-rounded-full scrollbar-track-rounded-full`,
    countNotifications: `bg-Danger-500 text-Light-100 rounded-full w-[13px] h-[13px] flex items-center justify-center absolute top-0 right-0 text-[0.6rem] leading-[0.5rem]`,
    dropdownTrigger: cn(
      `!w-[24px] !h-[24px] !p-0 justify-center relative duration-300 transition-colors
      hover:translate-y-0 hover:text-Primary-500 active:opacity-50 `,
      open ? `text-Primary-500` : `text-Light-100`
    ),
    header: `block pb-[12px] text-regular-text-16 font-medium`,
    menu: `overflow-visible rounded-[4px] z-20 before:top-0 before:left-[94%] before:translate-y-[-55%]`,
    wrapper: `relative overflow-visible w-[355px] p-[12px] pr-[8px] bg-Dark-500 rounded-[4px]`,
  }

  const countNotifications = notifications?.length

  const trigger = (
    <Button
      aria-label={open ? t.button.notifications.hide : t.button.notifications.show}
      className={classes.dropdownTrigger}
      variant={'text'}
    >
      <>
        {open ? <BellIcon aria-hidden /> : <BellOutlineIcon aria-hidden />}
        {countNotifications && (
          <span className={classes.countNotifications}>
            {countNotifications < maxShowNumberNotifications ? countNotifications : ELLIPSIS_STRING}
          </span>
        )}
      </>
    </Button>
  )

  return (
    <Dropdown.Menu
      align={'end'}
      className={classes.menu}
      modal
      onOpenChange={onOpenChange}
      open={open}
      sideOffset={10}
      trigger={trigger}
    >
      <div className={classes.wrapper}>
        {notifications?.length && (
          <span className={classes.header}>{t.layout.notificationsDropdown.title}</span>
        )}
        <div className={classes.content}>
          <NotificationsDropdownList
            alternativeText={alternativeText}
            notifications={notifications}
          />
        </div>
      </div>
    </Dropdown.Menu>
  )
})

NotificationsDropdown.displayName = 'NotificationsDropdown'
