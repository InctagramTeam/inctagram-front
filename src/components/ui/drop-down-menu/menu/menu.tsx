import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

type MenuProps = {
  /**
   * Выравнивание относительно триггера (кнопки)
   */
  align?: 'center' | 'end' | 'start'
  className?: string
  /**
   * Модальность выпадающего меню. Если установлено значение true,
   * взаимодействие с внешними элементами будет отключено, будет видно только содержимое меню.
   */
  modal?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
  portal?: boolean
  side?: 'bottom' | 'left' | 'right' | 'top'
  /**
   * Расстояние в "px" от trigger до RadixDropdown.Content
   */
  sideOffset?: number
  trigger: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof RadixDropdown.Content>, 'asChild'>

export const Menu = forwardRef<ElementRef<typeof RadixDropdown.Content>, MenuProps>(
  (
    {
      align = 'center',
      children,
      className,
      modal,
      onOpenChange,
      open,
      portal,
      side = 'bottom',
      sideOffset = 0,
      trigger,
      ...rest
    },
    ref
  ) => {
    return (
      <RadixDropdown.Root modal={modal} onOpenChange={onOpenChange} open={open}>
        <RadixDropdown.Trigger
          asChild
          className={clsx(
            `_Trigger_ cursor-pointer block select-none rounded
        hover:text-Primary-100 hover:transition-all duration-150 ease-in-out
        focus-visible:outline-none cus-visible:outline-none`,
            className
          )}
        >
          {trigger}
        </RadixDropdown.Trigger>
        <RadixDropdown.Portal>
          <RadixDropdown.Content
            align={align}
            className={clsx(
              `_Content_ relative z-10 bg-Dark-700 ring-1 ring-Dark-100 rounded
          will-change-transform
          transition-all duration-150 ease-in out
          overflow-hidden text-left shadow-xs shadow-Dark-500 backdrop-blur
          data-[side=top]:animate-[slide-down-and-fade_150ms]
          data-[side=right]:animate-[slide-left-and-fade_150ms]
          data-[side=bottom]:animate-[slide-up-and-fade_150ms]
          data-[side=left]:animate-[slide-right-and-fade_150ms]`,
              className,
              align === 'center' && ``
            )}
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            {...rest}
            onPointerDownOutside={e => !portal && e.detail.originalEvent.preventDefault()}
          >
            {children}
          </RadixDropdown.Content>
        </RadixDropdown.Portal>
      </RadixDropdown.Root>
    )
  }
)

/**
 * Пример использования:
 *     <Dropdown.menu
 *       align="center"
 *       modal={false}
 *       trigger={
 *         <Button style={{ padding: '0' }} variant="text">
 *           <More />
 *         </Button>
 *       }
 *     >
 *       <Dropdown.item onClick={onOpenEditModal} startIcon={<Edit />}>
 *         <Typography variant="regular14">{t.pages.post.editPost}</Typography>
 *       </Dropdown.item>
 *       <Dropdown.item onClick={onOpenConfirmDeleteModal} startIcon={<Trash />}>
 *         <Typography variant="regular14">{t.pages.post.deletePost}</Typography>
 *       </Dropdown.item>
 *     </Dropdown.menu>
 */
