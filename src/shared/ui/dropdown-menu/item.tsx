import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

import { ReturnComponent } from '@/shared/types'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'

export type DropdownItemProps = {
  children: ReactNode
  disabled?: boolean
  endIcon?: ReactNode
  onSelect?: () => void
  startIcon?: ReactNode
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item>

const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))

const Item = ({
  children,
  disabled,
  endIcon,
  onSelect,
  startIcon,
  style,
  ...rest
}: DropdownItemProps): ReturnComponent => {
  const handleSelect = async (e: any) => {
    e.preventDefault()
    await sleep(0.075)
    if (onSelect) {
      onSelect()
    }
  }

  return (
    <DropdownRadix.Item
      asChild
      className={`cursor-pointer bg-Dark-500 flex gap-[6px] items-center p-[0.75rem] outline-none
        w-40 select-none py-1.5 text-Light-100 data-[highlighted]:bg-Dark-100 data-[highlighted]:text-Light-100
        border-b-[1px] border-b-Dark-100/10 shadow-sm hover:text-Primary-100
        data-[highlighted]:focus:outline-none transition-all duration-150 ease-linear hover:bg-Dark-100/70`}
      disabled={disabled}
      onSelect={handleSelect}
      style={style}
      {...rest}
    >
      <>
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </>
    </DropdownRadix.Item>
  )
}

Item.displayName = 'Item'
export { Item }
