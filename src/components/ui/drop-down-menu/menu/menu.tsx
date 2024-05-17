import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { ReturnComponent } from '@/common/types'

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
   * Расстояние в "px" от trigger до DropdownRadix.Content
   */
  sideOffset?: number
  trigger: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof DropdownRadix.Content>, 'asChild'>

export const Menu = forwardRef<ElementRef<typeof DropdownRadix.Content>, MenuProps>(
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
  ): ReturnComponent => {
    return (
      <DropdownRadix.Root modal={modal} onOpenChange={onOpenChange} open={open}>
        <DropdownRadix.Trigger
          asChild
          className={clsx(
            `_Trigger_ cursor-pointer block select-none rounded
        hover:text-Primary-100 hover:transition-all duration-150 ease-in-out
        focus-visible:outline-none focus-visible:outline-none`,
            className
          )}
        >
          {trigger}
        </DropdownRadix.Trigger>
        <DropdownRadix.Portal>
          <DropdownRadix.Content
            align={align}
            className={clsx(
              `_Content_ relative z-10 mt-3 bg-Dark-700 ring-1 ring-Dark-100 rounded
          will-change-transform
          transition-all duration-150 ease-in out
          overflow-hidden text-left shadow-xs shadow-Dark-500 backdrop-blur
          data-[side=top]:animate-[slide-down-and-fade_150ms]
          data-[side=right]:animate-[slide-left-and-fade_150ms]
          data-[side=bottom]:animate-[slide-up-and-fade_150ms]
          data-[side=left]:animate-[slide-right-and-fade_150ms]`,
              className
            )}
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            {...rest}
            onPointerDownOutside={e => !portal && e.detail.originalEvent.preventDefault()}
          >
            {children}
            <DropdownRadix.Arrow
              className={`absolute -top-[0.4rem] left-[50%] rotate-45
            w-[1rem] h-[1rem] bg-Dark-700 border-2 border-Dark-500 border-t-0 border-l-0
            fill-Dark-500`}
            />
          </DropdownRadix.Content>
        </DropdownRadix.Portal>
      </DropdownRadix.Root>
    )
  }
)
// position: absolute;
//   top: -0.4rem;
//   left: calc(50% - 3px);
//   transform: rotate(45deg);
//
//   width: 1rem;
//   height: 1rem;
//
//   background-color: var(--color-dark-700);
//   border: 1px solid var(--color-dark-500);
//   border-top: none;
//   border-left: none;
//
//   fill: var(--color-dark-700);

/**
 * Пример использования:
 *     <Dropdown.Menu
 *       align="center"
 *       modal={false}
 *       trigger={
 *         <Button style={{ padding: '0' }} variant="text">
 *           <More />
 *         </Button>
 *       }
 *     >
 *       <Dropdown.Item onClick={onOpenEditModal} startIcon={<Edit />}>
 *         <Typography variant="regular14">{t.pages.post.editPost}</Typography>
 *       </Dropdown.Item>
 *       <Dropdown.Item onClick={onOpenConfirmDeleteModal} startIcon={<Trash />}>
 *         <Typography variant="regular14">{t.pages.post.deletePost}</Typography>
 *       </Dropdown.Item>
 *     </Dropdown.Menu>
 */
