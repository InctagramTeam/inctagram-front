import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'
import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import s from './dropdown.module.scss'

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
   * Выравнивание относительно триггера (кнопки)
   */
  align?: 'center' | 'end' | 'start'
  /**
   * Расстояние в "px" от trigger-a
   */
  sideOffset?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
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
      sideOffset = 8,
      side = 'top',
      trigger,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        <RadixDropdown.Root modal={modal} onOpenChange={onOpenChange} open={open}>
          <RadixDropdown.Trigger
            className={clsx(
              `cursor-pointer block select-none rounded
        hover:text-Primary-100 hover:transition-all duration-150 ease-in-out
        focus-visible:outline-none`,
              className
            )}
            asChild
          >
            {trigger}
          </RadixDropdown.Trigger>
          <RadixDropdown.Portal>
            <RadixDropdown.Content
              side={side}
              align={align}
              sideOffset={sideOffset}
              className={clsx(
                `_Content_ relative left-1/2 top-1/2 z-200 bg-Dark-700 ring-1 ring-Dark-100 rounded
           -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center mt-4 will-change-transform
          transition-all duration-150 ease-in out
          overflow-hidden text-left shadow-xs shadow-Dark-500 backdrop-blur
          data-[side=top]:animate-[slide-down-and-fade_150ms]
          data-[side=right]:animate-[slide-left-and-fade_150ms]
          data-[side=bottom]:animate-[slide-up-and-fade_150ms]
          data-[side=left]:animate-[slide-right-and-fade_150ms]
`,
                className
              )}
              ref={ref}
              {...rest}
              onPointerDownOutside={e => e.detail.originalEvent.preventDefault()}
            >
              <div className={``}>
                <RadixDropdown.Arrow className={s.DropdownMenuArrow} height={10} width={14} />
                <RadixDropdown.Arrow className={s.DropdownMenuTwoArrow} height={10} width={14} />
              </div>
              {children}
            </RadixDropdown.Content>
          </RadixDropdown.Portal>
        </RadixDropdown.Root>
      </div>
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
