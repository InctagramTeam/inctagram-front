import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react'
import { ReturnComponent } from '@/shared/types'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

export type DropdownItemProps = {
  children: ReactNode
  disabled?: boolean
  endIcon?: ReactNode
  onSelect?: () => void
  startIcon?: ReactNode
  style?: CSSProperties
  direction?: DropdownDirection
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item>

export type DropdownDirection =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'default'

// mapping classes
export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': `top-[100%] right-0`,
  'bottom right': `top-[100%] left-0`,
  'top right': `bottom-[100%] left-0`,
  'top left': `bottom-[100%] right-0`,
  default: '',
}

const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))

const Item = ({
  children,
  disabled,
  endIcon,
  onSelect,
  startIcon,
  direction,
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

  const menuClasses = [mapDirectionClass[direction ?? 'default']]

  return (
    <DropdownRadix.Item
      asChild
      className={clsx(
        `flex w-40 cursor-pointer select-none items-center gap-[6px] border-b-[1px]
        border-b-Dark-100/10 bg-Dark-500 p-[0.75rem] py-1.5 text-Light-100 shadow-sm
        outline-none transition-all duration-150 ease-linear
        data-[highlighted]:bg-Dark-100 data-[highlighted]:text-Light-100 hover:bg-Dark-100/70 hover:text-Primary-100 data-[highlighted]:focus:outline-none`,
        menuClasses
      )}
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
