import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, CSSProperties, ReactNode, forwardRef } from 'react'
import { ReturnComponent } from '@/common/types'
import { clsx } from 'clsx'
import { Text } from '@/components/ui/text'
import { DropdownItemProps } from './item'

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text?: string
  disabled?: boolean
  onSelect: () => void
  className?: string
  style?: CSSProperties
} & ComponentPropsWithoutRef<'div'>

const DropdownItemWithIcon = forwardRef<HTMLDivElement, DropdownItemWithIconProps>(
  (props, ref): ReturnComponent => {
    const { icon, text, disabled, onSelect, className, style, ...rest } = props

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
        className={classNames.item}
        disabled={disabled}
        onSelect={onSelect}
        onClick={event => event.stopPropagation()}
        style={style}
        asChild
        {...rest}
      >
        <div ref={ref}>
          <div className={classNames.itemIcon}>{icon}</div>
          <Text variant="regular_text_16">{text}</Text>
        </div>
      </DropdownRadix.Item>
    )
  }
)

DropdownItemWithIcon.displayName = 'DropdownItemWithIcon'
export { DropdownItemWithIcon }
