import { ReactNode } from 'react'

import { Dropdown } from '@/components/ui/drop-down-menu'
import { MenuProps } from '@/components/ui/drop-down-menu/menu/menu'
import { cn } from '@/utils/merge-cn'
import { BeakIcon } from '@/assets/icons'

export type NotificationsDropdownProps = {
  alternativeText?: string
  notifications?: NotificationProps[]
  trigger: ReactNode
} & Omit<MenuProps, 'trigger'>

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
    alternativeText: `flex justify-center items-center h-full w-full text-center`,
    content: cn(
      `h-[360px] overflow-y-auto`,
      `scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300`,
      `scrollbar-thumb-rounded-full scrollbar-track-rounded-full`
    ),
    header: `block pb-[12px] pl-[4px] text-regular-text-16 font-medium`,
    item: cn(
      `flex-col w-full !items-start gap-0 cursor-auto relative py-[12px]`,
      `hover:!text-Light-100 hover:!bg-transparent`,
      `after:content-[""] after:h-[1px] after:bg-Dark-100 after:absolute after:top-0 after:left-[4px] after:right-[4px]`
    ),
    longAgo: `text-small-text-12 text-Light-900`,
    menu: `overflow-visible rounded-[4px]`,
    wrapper: `relative overflow-visible w-[355px] p-[12px] pr-[8px] bg-Dark-500 rounded-[4px]`,
    new: `text-small-text-12 text-bold text-Primary-500`,
    subtitle: `text-sm-bold-14`,
    text: `text-regular-text-14`,
    arrow: `absolute top-0 right-[1rem] w-[1.2rem] h-[0.6rem] translate-y-[-100%] translate-x-[50%]`,
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
          <BeakIcon className={classes.arrow} />
        </div>
      </div>
    </Dropdown.Menu>
  )
}

NotificationsDropdown.displayName = 'NotificationsDropdown'
