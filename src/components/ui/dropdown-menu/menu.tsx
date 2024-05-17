import { ComponentPropsWithoutRef, CSSProperties, ReactNode, forwardRef } from 'react'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { ReturnComponent } from '@/common/types'
import { clsx } from 'clsx'

type MenuProps = {
  trigger: ReactNode
  /**
   * onPointerDownOutside - Обработчик события мыши или "касание" пальцем экрана,
   * вызываемый при возникновении события с указателем за пределами компонента.
   * Его можно предотвратить, вызвав event.preventDefault.
   */
  portal?: boolean
  /** Выравнивание относительно триггера (кнопки) */
  align?: 'center' | 'end' | 'start'
  /** Расстояние в "px" от trigger-a */
  sideOffset?: number
  className?: string
  modal?: boolean
  style?: CSSProperties
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & ComponentPropsWithoutRef<typeof DropdownRadix.Content>

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref): ReturnComponent => {
  const {
    children,
    portal = true,
    align = 'start',
    style,
    className,
    sideOffset = 0,
    trigger,
    modal,
    open,
    onOpenChange,
    ...rest
  } = props

  const menuContent = (
    <DropdownRadix.Content
      className={clsx(
        `relative overflow-visible mt-[10px]
         border border-Dark-100 rounded-[10px] p-[5px] pb-0 bg-Dark-500 text-Light-100 shadow-sm
         before:content-[''] before:absolute before:bg-Dark-500 before:left-[10px] before:w-[10px] before:h-[10px]
         before:-top-[6px] before:shadow-[0_07px_Dark-500] before:rotate-45 before:z-1
         before:border-Dark-100
         before:border-l-[1px] before:border-t-[1px] before:rounded-xs`,
        className
      )}
      align={align}
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
