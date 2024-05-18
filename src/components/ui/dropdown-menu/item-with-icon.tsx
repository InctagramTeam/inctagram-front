import { CSSProperties, ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { ReturnComponent } from '@/common/types'
import { Text } from '@/components/ui/text'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import { DropdownItemProps } from './item'

export type DropdownItemWithIconProps = {
  className?: string
  disabled?: boolean
  icon: ReactNode
  onSelect: () => void
  style?: CSSProperties
  text?: string
} & ComponentPropsWithoutRef<'div'> &
  Omit<DropdownItemProps, 'children'>

const DropdownItemWithIcon = forwardRef<HTMLDivElement, DropdownItemWithIconProps>(
  (props, ref): ReturnComponent => {
    const { className, disabled, icon, onSelect, style, text, ...rest } = props

    const classNames = {
      item: clsx(
        `cursor-pointer flex gap-[6px] items-center p-[12px_0] text-regular-text-14 outline-none`,
        className
      ),
      itemIcon: clsx(
        `flex items-center justify-center w-6 h-6 disabled:opacity-20`,
        disabled && `disabled:opacity-20 opacity-20`
      ),
    }

    return (
      <DropdownRadix.Item
        asChild
        className={classNames.item}
        disabled={disabled}
        onClick={event => event.stopPropagation()}
        onSelect={onSelect}
        style={style}
        {...rest}
      >
        <div ref={ref}>
          <div className={classNames.itemIcon}>{icon}</div>
          <Text variant={'regular_text_16'}>{text}</Text>
        </div>
      </DropdownRadix.Item>
    )
  }
)

DropdownItemWithIcon.displayName = 'DropdownItemWithIcon'
export { DropdownItemWithIcon }
