import { ComponentPropsWithoutRef, CSSProperties, forwardRef, ReactNode } from 'react'

import { Text } from '@/shared/ui/text'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { ReturnComponent } from 'src/shared/types'

import { DropdownItemProps } from './item'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip/tooltip'

export type DropdownItemWithIconProps = {
  className?: string
  disabled?: boolean
  icon: ReactNode
  onSelect: () => void
  style?: CSSProperties
  text?: string
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item> &
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
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <TooltipContent>
                  <Text asComponent={'p'} variant={'regular_text_16'}>
                    {text}
                  </Text>
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DropdownRadix.Item>
    )
  }
)

DropdownItemWithIcon.displayName = 'DropdownItemWithIcon'
export { DropdownItemWithIcon }
