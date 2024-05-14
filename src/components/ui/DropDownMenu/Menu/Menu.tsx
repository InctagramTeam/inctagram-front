import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'
import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

type MenuProps = {
  className?: string
  /**
   * Модальность выпадающего меню. Если установлено значение true,
   * взаимодействие с внешними элементами будет отключено, будет видно только содержимое меню.
   */
  modal?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
  /**
   * onPointerDownOutside - Обработчик события мыши или "касание" пальцем экрана,
   * вызываемый при возникновении события с указателем за пределами компонента.
   * Его можно предотвратить, вызвав event.preventDefault.
   */
  portal?: boolean
  /**
   * Выравнивание относительно триггера (кнопки)
   */
  align?: 'center' | 'end' | 'start'
  /**
   * Расстояние в "px" от trigger-a
   */
  sideOffset?: number
  trigger: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof RadixDropdown.Content>, 'asChild'>

export const Menu = forwardRef<ElementRef<typeof RadixDropdown.Content>, MenuProps>(
  (
    {
      children,
      className,
      modal,
      onOpenChange,
      open,
      align = 'center',
      sideOffset = 0,
      portal = true,
      trigger,
      ...rest
    },
    ref
  ) => {
    const menuContent = (
      <RadixDropdown.Content
        align={align}
        sideOffset={sideOffset}
        className={clsx(
          `_Content_ relative z-100 bg-Dark-500 border-1 border-Dark-100 rounded will-change-transform mt-1
overflow-hidden p-2 text-left shadow-sm shadow-Dark-500 backdrop-blur
data-[side=top]:animate-[slide-down-and-fade_150ms]
data-[side=right]:animate-[slide-left-and-fade_150ms]
data-[side=bottom]:animate-[slide-up-and-fade_150ms]
data-[side=left]:animate-[slide-right-and-fade_150ms]
focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50 focus:ring-offset-Dark-300
focus-visible:outline-none focus-visible:ring-1 focus-visible:offset-1
focus-visible:ring-opacity-50 focus-visible:ring-offset-Dark-300`,
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
        <RadixDropdown.Arrow
          style={{ color: 'white' }}
          className={`absolute z-1 bg-Dark-100 fill-Dark-500`}
          height={10}
          width={14}
        />
        <RadixDropdown.Arrow
          style={{ color: 'white' }}
          className={`absolute z-1 bg-Dark-100 fill-Dark-500 -top-1 left-0`}
          height={10}
          width={14}
        />
        {children}
      </RadixDropdown.Content>
    )

    return (
      <RadixDropdown.Root modal={modal} onOpenChange={onOpenChange} open={open}>
        <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>
        {portal ? <RadixDropdown.Portal>{menuContent}</RadixDropdown.Portal> : menuContent}
      </RadixDropdown.Root>
    )
  }
)
/**
 * Пример использования:
 *     <Dropdown.Menu
 *       align="end"
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
