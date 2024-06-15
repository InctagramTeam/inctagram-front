import * as React from 'react'

import { ReturnComponent } from '@/shared/types'
import { Flex } from '@/shared/ui'
import { clsx } from 'clsx'

import { HeaderMenu, Logo, NotificationProps } from './ui'

type Props = {
  className?: string
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}

export const Header = ({ className, ...props }: Props): ReturnComponent => {
  const classes = {
    header: clsx(
      `fixed inset-0 border-b-[1px] shadow-sm shadow-Dark-300 border-Dark-100 w-full h-[60px] py-[15px] z-10 bg-Dark-700`,
      className
    ),
    wrapper: `max-w-[1186px] w-full mx-auto px-[15px]`,
  }

  return (
    <header className={classes.header}>
      <Flex className={classes.wrapper} gap={'20'} items={'center'} justify={'spaceBetween'}>
        <Logo />
        <HeaderMenu {...props} />
      </Flex>
    </header>
  )
}
