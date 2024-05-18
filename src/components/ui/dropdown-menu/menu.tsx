import { CSSProperties, ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { ReturnComponent } from '@/common/types'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

type MenuProps = {
  /** Выравнивание относительно триггера (кнопки) */
  align?: 'center' | 'end' | 'start'
  className?: string
  modal?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
  /**
   * onPointerDownOutside - Обработчик события мыши или "касание" пальцем экрана,
   * вызываемый при возникновении события с указателем за пределами компонента.
   * Его можно предотвратить, вызвав event.preventDefault.
   */
  portal?: boolean
  /** Расстояние в "px" от trigger-a */
  sideOffset?: number
  style?: CSSProperties
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownRadix.Content>

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref): ReturnComponent => {
  const {
    align = 'start',
    children,
    className,
    modal,
    onOpenChange,
    open,
    portal = true,
    sideOffset = 0,
    style,
    trigger,
    ...rest
  } = props

  const menuContent = (
    <DropdownRadix.Content
      align={align}
      className={clsx(
        `relative overflow-visible mt-[10px]
         border border-Dark-100 rounded-[10px] p-[5px] pb-0 bg-Dark-500 text-Light-100 shadow-sm
         before:content-[''] before:absolute before:bg-Dark-500 before:left-[10px] before:w-[10px] before:h-[10px]
         before:-top-[6px] before:shadow-[0_07px_Dark-500] before:rotate-45 before:z-1
         before:border-Dark-100
         before:border-l-[1px] before:border-t-[1px] before:rounded-xs`,
        className
      )}
      ref={ref}
      {...rest}
      onPointerDownOutside={e => {
        if (!portal) {
          e.detail.originalEvent.preventDefault()
        }
      }}
    >
      {children}
    </DropdownRadix.Content>
  )

  return (
    <DropdownRadix.Root modal={modal} onOpenChange={onOpenChange} open={open}>
      <DropdownRadix.Trigger className={'outline-none'}>{trigger}</DropdownRadix.Trigger>
      {portal ? <DropdownRadix.Portal>{menuContent}</DropdownRadix.Portal> : menuContent}
    </DropdownRadix.Root>
  )
})

Menu.displayName = 'Menu'
export { Menu }
