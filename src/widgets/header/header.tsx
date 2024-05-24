import * as React from 'react'

import { Flex } from '@/shared/ui/flex'
import { HeaderMenu } from '@/widgets/header/ui/header-menu'
import { Logo } from '@/widgets/header/ui/logo'
import { NotificationProps } from '@/widgets/header/ui/notifications-dropdown-list'
import { clsx } from 'clsx'

type Props = {
  className?: string
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}

export const Header = ({ className, ...rest }: Props) => {
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
        <HeaderMenu {...rest} />
      </Flex>
    </header>
  )
}

Header.displayName = 'Header'
