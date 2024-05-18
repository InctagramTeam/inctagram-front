import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ReactNode, CSSProperties } from 'react'
import { ReturnComponent } from '@/common/types'

export type DropdownItemProps = {
  children: ReactNode
  disabled?: boolean
  onSelect?: () => void
  endIcon?: ReactNode
  startIcon?: ReactNode
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item>

const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))

const Item = ({
  children,
  onSelect,
  endIcon,
  startIcon,
  disabled,
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
      onSelect={handleSelect}
      style={style}
      disabled={disabled}
      className="cursor-pointer bg-Dark-500 flex gap-[6px] items-center p-[0.75rem] outline-none
      w-40 select-none py-1.5 text-Light-100 data-[highlighted]:bg-Dark-100 data-[highlighted]:text-Light-100
      border-b-[1px] border-b-Dark-100/10 shadow-sm hover:text-Primary-100
      data-[highlighted]:focus:outline-none transition-all duration-150 ease-linear hover:bg-Dark-100/70"
      {...rest}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </DropdownRadix.Item>
  )
}

Item.displayName = 'Item'
export { Item }
