import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { ReturnComponent } from '@/common/types'
import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

type Props = {
  endIcon?: ReactNode
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Item>

export const Item = ({
  children,
  className,
  endIcon,
  startIcon,
  ...rest
}: Props): ReturnComponent => {
  return (
    <RadixDropdown.Item
      className={clsx(
        `_Item_ cursor-pointer bg-Dark-500 flex gap-[6px] items-center p-[0.75rem] outline-none
      w-40 select-none rounded px-2 py-1.5 text-Light-100 data-[highlighted]:bg-Dark-100
       data-[highlighted]:text-Primary-100 hover:data-[highlighted]:text-Primary-100`,
        className
      )}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </RadixDropdown.Item>
  )
}
