import { ComponentPropsWithoutRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'

import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<typeof RadixDropdown.Separator>

export const Separator = ({ className, ...rest }: Props) => {
  return <RadixDropdown.Separator className={clsx(`h-[1px] bg-Dark-100`, className)} {...rest} />
}
