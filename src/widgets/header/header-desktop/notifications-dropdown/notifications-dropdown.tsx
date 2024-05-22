import { ReactNode } from 'react'
import * as React from 'react'

import { BellIcon, BellOutlineIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Dropdown } from '@/shared/ui/dropdown-menu'

export type NotificationsDropdownProps = {
  alternativeText?: string
  notifications?: NotificationProps[]
  onOpenChange?: (value: boolean) => void
  open?: boolean
}

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
}: NotificationsDropdownProps) => {
  const classes = {
    alternativeText: `flex justify-center items-center h-full w-full text-center`,
    arrow: `absolute top-0 right-[1rem] w-[1.2rem] h-[0.6rem] translate-y-[-100%] translate-x-[50%]`,
    content: `h-[360px] overflow-y-auto
      scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300
      scrollbar-thumb-rounded-full scrollbar-track-rounded-full`,
    countNotifications: `bg-Danger-500 text-Light-100 rounded-full w-[13px] h-[13px] flex items-center justify-center absolute top-0 right-0 text-[0.6rem] leading-[0.5rem]`,
    dropdownTrigger: cn(
      `w-[24px] !h-[24px] py-0 px-0 justify-center relative duration-300 transition-colors
      hover:translate-y-0 hover:text-Primary-500 active:opacity-50 `,
      open ? `text-Primary-500` : `text-Light-100`
    ),
    header: `block pb-[12px] text-regular-text-16 font-medium`,
    item: `flex-col w-full !items-start gap-0 cursor-auto relative py-[12px] outline-0
      hover:!text-Light-100 hover:!bg-transparent
      after:content-[""] after:h-[1px] after:bg-Dark-100 after:absolute after:top-0 after:left-0 after:right-[4px]`,
    longAgo: `text-small-text-12 text-Light-900`,
    menu: `overflow-visible rounded-[4px] z-20 before:top-0 before:left-[94%] before:translate-y-[-55%]`,
    new: `text-small-text-12 text-bold text-Primary-500`,
    subtitle: `text-sm-bold-14`,
    text: `text-regular-text-14`,
    wrapper: `relative overflow-visible w-[355px] p-[12px] pr-[8px] bg-Dark-500 rounded-[4px]`,
  }

  const countNotifications = notifications?.length

  const trigger = (
    <Button
      aria-label={open ? 'close notifications' : 'open notifications'}
      className={classes.dropdownTrigger}
      variant={'text'}
    >
      <>
        {open ? <BellIcon aria-hidden /> : <BellOutlineIcon aria-hidden />}
        {countNotifications && (
          <span className={classes.countNotifications}>
            {countNotifications < 100 ? countNotifications : '...'}
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
        {notifications?.length && <span className={classes.header}>Уведомления!</span>}
        <div className={classes.content}>
          <div className={'pr-[4px] h-full w-full'}>
            {notifications?.length ? (
              notifications.map((item, index) => (
                <Dropdown.Item className={classes.item} key={index}>
                  <div>
                    <span className={classes.subtitle}>{item.title}</span>
                    {item.isNew && <span className={classes.new}>&nbsp;Новое</span>}
                  </div>
                  <p className={classes.text}>{item.text}</p>
                  <span className={classes.longAgo}>{item.longAgo}</span>
                </Dropdown.Item>
              ))
            ) : (
              <span className={classes.alternativeText}>{alternativeText}</span>
            )}
          </div>
        </div>
      </div>
    </Dropdown.Menu>
  )
}

NotificationsDropdown.displayName = 'NotificationsDropdown'
