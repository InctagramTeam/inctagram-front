import * as Dialog from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react'
import CrossIcon from '@/assets/icons/CrossIcon'
import { clsx } from 'clsx'

type ModalProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = ({ open, onOpenChange, children, ...rest }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} {...rest}>
      {children}
    </Dialog.Root>
  )
}

type ModalContentProps = {
  title?: string
  classNameOverlay?: string
  children?: ReactNode
  customTitleComponent?: ReactNode
  paddingTop?: CSSProperties['paddingTop']
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = ({
  title = '',
  children,
  classNameOverlay,
  paddingTop = '12px',
  style,
  ...rest
}: ModalContentProps) => {
  const styles: CSSProperties = { paddingTop: paddingTop, ...style }

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
        style={styles}
        forceMount
        className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded
        bg-Dark-300 p-8 text-Light-100 ring-1 ring-Dark-100 shadow-sm
        data-[state=closed]:animate-[dialog-content-hide_200ms]
        data-[state=open]:animate-[dialog-content-show_200ms]"
      >
        <div className="flex justify-between items-center relative">
          <Dialog.Title className="text-xl pb-[11px] w-full border-b border-b-Dark-100">
            {title}
          </Dialog.Title>
          <Dialog.Close
            className="text-Light-100 hover:text-Light-700 absolute
          -right-[25px] top-[6px] -translate-x-1/2 -translate-y-1/2
          "
          >
            <CrossIcon />
          </Dialog.Close>
        </div>
        {children}
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
 */
