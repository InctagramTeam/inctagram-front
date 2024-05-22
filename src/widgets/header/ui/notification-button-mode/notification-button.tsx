'use client'
import React from 'react'
import { BellIcon, BellOutlineIcon } from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils'

type Props = {
  openDropdown: boolean
  countNotifications?: number
}

export const NotificationButton = ({ countNotifications, openDropdown }: Props) => {
  const classes = {
    countNotifications: cn(
      `bg-Danger-500 text-Light-100 rounded-full w-[13px] h-[13px] flex items-center justify-center`,
      `absolute top-0 right-0 text-[0.6rem] leading-[0.5rem]`
    ),
  }

  return (
    <>
      {openDropdown ? (
        <BellIcon aria-hidden className={'fill-Primary-500'} />
      ) : (
        <BellOutlineIcon aria-hidden className={'fill-Light-100'} />
      )}
      {countNotifications && (
        <span className={classes.countNotifications}>
          {countNotifications < 100 ? countNotifications : '...'}
        </span>
      )}
    </>
  )
}
