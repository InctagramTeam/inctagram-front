import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

import CrossIcon from '@/shared/assets/icons/CrossIcon'
import { EMPTY_STRING } from '@/shared/constants/base'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { ReturnComponent } from 'src/shared/types'

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
  classNameChildrenWrapper?: string
  classNameContent?: string
  classNameOverlay?: string
  customTitleComponent?: ReactNode
  style?: CSSProperties
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = ({
  children,
  classNameChildrenWrapper,
  classNameContent,
  classNameOverlay,
  style,
  title = EMPTY_STRING,
  ...rest
}: ModalContentProps): ReturnComponent => {
  const classes = {
    childrenWrapper: clsx('pt-[30px] pb-[36px] px-[24px]', classNameChildrenWrapper),
    close:
      'w-[24px] h-[24px] flex items-center justify-center text-Light-100 duration-300 hover:text-Primary-300 hover:transition-all',
    content: clsx(
      `fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded
        bg-Dark-300 text-Light-100 shadow-sm ring-1 ring-Dark-100
        data-[state=closed]:animate-[dialog-content-hide_200ms]
        data-[state=open]:animate-[dialog-content-show_200ms]`,
      classNameContent
    ),
    overlay: clsx(
      `fixed inset-0 bg-Dark-900/60 data-[state=closed]:animate-[dialog-overlay-hide_200ms]
          data-[state=open]:animate-[dialog-overlay-show_200ms]`,
      classNameOverlay
    ),
    title: 'text-xl',
    titleContainer: clsx(
      'relative flex items-center justify-between px-[24px] py-[12px] border-b border-b-Dark-100'
    ),
  }

  return (
    <Dialog.Portal {...rest}>
      <Dialog.Overlay className={classes.overlay} />
      <Dialog.Content className={classes.content} forceMount style={style}>
        <div className={classes.titleContainer}>
          <Dialog.Title className={classes.title}>{title}</Dialog.Title>
          <Dialog.Close className={classes.close}>
            <CrossIcon />
          </Dialog.Close>
        </div>
        <div className={classes.childrenWrapper}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

/*** API кнопки у Modal - делаем как у Dialog.Trigger, ModalContent, Dialog.Close */
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
