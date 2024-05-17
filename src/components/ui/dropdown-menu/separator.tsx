import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'

/**
 * Разделяет элементы меню - Необязателен, вместо него можно:
 * <RadixDropdownMenuItem присвоить className="w-40 select-none rounded px-2 py-1.5 text-Dark-100
 * data-[highlighted]:bg-Primary-500 data-[highlighted]:text-white data-[highlighted]:focus:outline-none">
 */

type SeparatorProps = ComponentPropsWithoutRef<typeof DropdownRadix.Separator>

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownRadix.Separator
      className={clsx(`h-[0.5px] bg-Light-900 shadow-sm shadow-Dark-100`, className)}
      {...rest}
      ref={ref}
    />
  )
})
