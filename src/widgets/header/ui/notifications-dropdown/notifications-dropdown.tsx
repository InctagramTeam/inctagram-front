import { ReactNode } from 'react'

import { cn } from '@/shared/lib/utils'
import { Dropdown, MenuProps } from '@/shared/ui/dropdown-menu'
import { NotificationDropdownList } from '@/widgets/header/ui/notification-droddown-list/notification-dropdown-list'

export type NotificationsDropdownProps = {
  alternativeText?: string
  notifications?: NotificationProps[]
} & MenuProps

export type NotificationProps = {
  isNew?: boolean
  longAgo: string
  text: ReactNode
  title: string
}
export const NotificationsDropdown = ({
  alternativeText = 'Уведомлений еще нет',
  notifications,
  onOpenChange,
  open,
  trigger,
  ...rest
}: NotificationsDropdownProps) => {
  const classes = {
    arrow: `absolute top-0 right-[1rem] w-[1.2rem] h-[0.6rem] translate-y-[-100%] translate-x-[50%]`,
    content: cn(
      `h-[360px] overflow-y-auto`,
      `scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300`,
      `scrollbar-thumb-rounded-full scrollbar-track-rounded-full`
    ),
    header: `block pb-[12px] text-regular-text-16 font-medium`,
    menu: cn(
      `overflow-visible rounded-[4px] z-20 `,
      `before:top-0 before:left-[94%] before:translate-y-[-55%]`
    ),
    wrapper: `relative overflow-visible w-[355px] p-[12px] pr-[8px] bg-Dark-500 rounded-[4px]`,
  }

  return (
    <Dropdown.Menu
      className={classes.menu}
      onOpenChange={onOpenChange}
      open={open}
      trigger={trigger}
      {...rest}
    >
      <div className={classes.wrapper}>
        <span className={classes.header}>Уведомления!</span>
        <div className={classes.content}>
          <NotificationDropdownList
            notifications={notifications}
            alternativeText={alternativeText}
          />
        </div>
      </div>
    </Dropdown.Menu>
  )
}

NotificationsDropdown.displayName = 'NotificationsDropdown'
