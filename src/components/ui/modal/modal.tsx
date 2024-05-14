import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

import CrossIcon from '@/assets/icons/CrossIcon'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

type ModalProps = {
  children: ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = ({ children, onOpenChange, open, ...rest }: ModalProps) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open} {...rest}>
      {children}
    </Dialog.Root>
  )
}

type ModalContentProps = {
  children?: ReactNode
  classNameOverlay?: string
  customTitleComponent?: ReactNode
  padding?: CSSProperties['padding']
  style?: CSSProperties
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = ({
  children,
  classNameOverlay,
  padding = '12px 0 11px 36px',
  style,
  title = '',
  ...rest
}: ModalContentProps) => {
  const styles: CSSProperties = { padding: padding, ...style }

  return (
    <Dialog.Portal {...rest}>
      <Dialog.Overlay
        className={clsx(
          `fixed inset-0 bg-Dark-900/60 data-[state=closed]:animate-[dialog-overlay-hide_200ms]
          data-[state=open]:animate-[dialog-overlay-show_200ms]`,
          classNameOverlay
        )}
      />
      <Dialog.Content
        className={`fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded
        bg-Dark-300 p-8 text-Light-100 ring-1 ring-Dark-100 shadow-sm
        data-[state=closed]:animate-[dialog-content-hide_200ms]
        data-[state=open]:animate-[dialog-content-show_200ms]`}
        forceMount
        style={styles}
      >
        <div className={'flex justify-between items-center relative'}>
          <Dialog.Title className={'text-xl pb-[11px] border-b border-b-Dark-100'}>
            {title}
          </Dialog.Title>
          <Dialog.Close
            className={
              'text-Light-100 hover:text-Primary-300 hover:transition-all duration-150 pr-4'
            }
          >
            <CrossIcon />
          </Dialog.Close>
        </div>
        <div className={'pt-[18px]'}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

/**
 * API кнопки у Modal - делаем как у Dialog.Trigger, ModalContent
 */
Modal.Button = Dialog.Trigger
Modal.Content = ModalContent
Modal.Close = Dialog.Close

/**
 * Пример использования - Контролируемое "Модальное окно":
 * <Modal open={open} onOpenChange={setOpen}>
 *    <Modal.Button asChild className="rounded p-2 hover:bg-gray-200">
 *       <Button>Profile Setting</Button> --> children
 *    </Modal.Button>
 *    <Modal.Content title={`Edit Contact`}>
 *        <div>Card</div>
 *     </Modal.Content>
 *  </Modal>
 *
 *  - data-[state=closed]:animate-[dialog-content-hide_200ms] --> При изменении дата атрибутов делаем анимацию
 */
