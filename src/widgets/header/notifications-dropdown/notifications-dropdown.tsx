import { ReactNode } from 'react'

import { Dropdown } from '@/components/ui/drop-down-menu'
import { MenuProps } from '@/components/ui/drop-down-menu/menu/menu'
import { cn } from '@/utils/merge-cn'

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
      `flex-col w-full !items-start gap-0 !pt-[12px] !p-0 cursor-auto`,
      `hover:!text-Light-100 hover:!bg-transparent`
    ),
    itemWrapper: `[&:not(:last-child)]:pb-[12px] px-[4px]`,
    longAgo: `text-small-text-12 text-Light-900`,
    menu: `w-[335px] p-[12px] pr-[8px] bg-Dark-500`,
    new: `text-small-text-12 text-bold text-Primary-500`,
    subtitle: `text-sm-bold-14`,
    text: `text-regular-text-14`,
  }

  return (
    <Dropdown.Menu onOpenChange={onOpenChange} open={open} trigger={trigger} {...rest}>
      <div className={classes.menu}>
        <span className={classes.header}>Уведомления!</span>
        <div className={classes.content}>
          <div className={'pr-[4px] h-full w-full'}>
            {notifications?.length ? (
              notifications.map((item, index) => (
                <div className={classes.itemWrapper} key={index}>
                  <Dropdown.Separator />
                  <Dropdown.Item className={classes.item}>
                    <div>
                      <span className={classes.subtitle}>{item.title}</span>
                      {item.isNew && <span className={classes.new}>&nbsp;Новое</span>}
                    </div>
                    <p className={classes.text}>{item.text}</p>
                    <span className={classes.longAgo}>{item.longAgo}</span>
                  </Dropdown.Item>
                </div>
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
