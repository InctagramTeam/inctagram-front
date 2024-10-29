import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

import { CrossIcon } from '@/shared/assets/icons'
import { EMPTY_STRING } from '@/shared/constants'
import { useTranslation } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { Text } from '@/shared/ui'
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
  classNameChildrenWrapper?: string
  classNameContent?: string
  classNameTitle?: string
  classNameTitleContainer?: string
  customTitleComponent?: ReactNode
  header?: ReactNode
  isClose?: boolean
  style?: CSSProperties
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = ({
  children,
  classNameChildrenWrapper,
  classNameContent,
  classNameTitle,
  classNameTitleContainer,
  style,
  title = EMPTY_STRING,
  header,
  isClose,
  ...rest
}: ModalContentProps): ReturnComponent => {
  const { t } = useTranslation()

  const classes = {
    close: `w-[24px] h-[24px] CENTER text-Light-100 
    rounded-[2px] outline-none duration-300 transition-color
    hover:text-Primary-300 focus:ring-2 focus:ring-offset-Primary-300`,
    content: clsx(
      `z-20 w-full max-w-md relative rounded bg-Dark-300 text-Light-100 shadow-sm ring-1 ring-Dark-100 
      data-[state=closed]:animate-[dialog-content-hide_200ms] 
      data-[state=open]:animate-[dialog-content-show_200ms]`,
      classNameContent
    ),
    container: 'bg-Dark-900/60 h-full w-full fixed insert top-0 block overflow-y-auto',
    body: 'flex min-h-full w-full pt-[80px] pb-[20px] px-[20px] justify-center items-center',
    title: clsx('text-xl', classNameTitle),
    titleContainer: clsx(
      'relative flex items-center justify-between px-[24px] py-[12px] border-b border-b-Dark-100',
      classNameTitleContainer
    ),
    childrenWrapper: clsx('pt-[30px] pb-[36px] px-[24px]', classNameChildrenWrapper),
  }

  return (
    <Dialog.Portal {...rest}>
      <div className={classes.container}>
        <div className={classes.body}>
          <Dialog.Content className={classes.content} forceMount style={style}>
            <div className={classes.titleContainer}>
              <Dialog.Title asChild>
                {title ? <Text className={classes.title}>{title}</Text> : header}
              </Dialog.Title>
              {isClose && (
                <Dialog.Close aria-label={t.button.closeModal} className={classes.close}>
                  <CrossIcon />
                </Dialog.Close>
              )}
            </div>
            <div className={classes.childrenWrapper}>{children}</div>
          </Dialog.Content>
        </div>
      </div>
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
