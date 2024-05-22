'use client'
import { cn } from '@/shared/lib/utils'
import { Dropdown } from '@/shared/ui/dropdown-menu'
import { NotificationProps } from '@/widgets/header'

type Props = {
  alternativeText?: string
  notifications?: NotificationProps[]
}

export const NotificationDropdownList = ({ alternativeText, notifications }: Props) => {
  const classes = {
    alternativeText: `flex justify-center items-center h-full w-full text-center`,
    arrow: `absolute top-0 right-[1rem] w-[1.2rem] h-[0.6rem] translate-y-[-100%] translate-x-[50%]`,
    content: cn(
      `h-[360px] overflow-y-auto`,
      `scrollbar-thin scrollbar-thumb-Dark-100 scrollbar-track-Dark-300`,
      `scrollbar-thumb-rounded-full scrollbar-track-rounded-full`
    ),
    header: `block pb-[12px] text-regular-text-16 font-medium`,
    item: cn(
      `flex-col w-full !items-start gap-0 cursor-auto relative py-[12px] outline-0`,
      `hover:!text-Light-100 hover:!bg-transparent`,
      `after:content-[""] after:h-[1px] after:bg-Dark-100 after:absolute after:top-0 after:left-0 after:right-[4px]`
    ),
    longAgo: `text-small-text-12 text-Light-900`,
    menu: cn(
      `overflow-visible rounded-[4px] z-20 `,
      `before:top-0 before:left-[94%] before:translate-y-[-55%]`
    ),
    new: `text-small-text-12 text-bold text-Primary-500`,
    subtitle: `text-sm-bold-14`,
    text: `text-regular-text-14`,
    wrapper: `relative overflow-visible w-[355px] p-[12px] pr-[8px] bg-Dark-500 rounded-[4px]`,
  }

  return (
    <div className={'pr-[4px] h-full w-full'}>
      {notifications?.length ? (
        notifications.map((item, index) => (
          <Dropdown.Item className={classes.item} key={index}>
            <div>
              <a className={classes.subtitle} href={'#'}>
                {item.title}
              </a>
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
  )
}
