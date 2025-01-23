import { CSSProperties, ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { EMPTY_STRING, ReturnComponent, Text, cn, useTranslation } from '@/shared'
import { CrossIcon } from '@/shared/assets/icons'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

export const Modal = Dialog.Root

type ModalContentProps = {
  children?: ReactNode
  classNameChildrenWrapper?: string
  classNameContainer?: string
  classNameContent?: string
  classNameOverlay?: string
  classNameTitle?: string
  classNameTitleContainer?: string
  customTitleComponent?: ReactNode
  header?: ReactNode
  isClose?: boolean
  style?: CSSProperties
  title?: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const ModalContent = forwardRef<ElementRef<typeof Dialog.Content>, ModalContentProps>(
  (
    {
      children,
      classNameChildrenWrapper,
      classNameContent,
      classNameOverlay,
      classNameTitle,
      classNameTitleContainer,
      style,
      title = EMPTY_STRING,
      header,
      isClose,
      classNameContainer,
      ...rest
    },
    ref
  ): ReturnComponent => {
    const { t } = useTranslation()

    const classes = {
      close: `w-[24px] h-[24px] CENTER text-Light-100 
    rounded-[2px] outline-none duration-300 transition-color
    hover:text-Primary-300 focus:ring-2 focus:ring-offset-Primary-300`,
      content: cn(
        `z-20 w-full max-w-md relative rounded bg-Dark-300 text-Light-100 shadow-sm ring-1 ring-Dark-100 
      data-[state=closed]:animate-[dialog-content-hide_200ms] 
      data-[state=open]:animate-[dialog-content-show_200ms]`,
        classNameContent
      ),
      container: cn(
        'bg-Dark-900/60 h-full w-full fixed insert top-0 block overflow-y-auto',
        classNameContainer
      ),
      body: 'flex min-h-full w-full pt-[80px] pb-[20px] px-[20px] justify-center items-center',
      title: cn('text-xl', classNameTitle),
      titleContainer: cn(
        'relative flex items-center justify-between px-[24px] py-[12px] border-b border-b-Dark-100',
        classNameTitleContainer
      ),
      childrenWrapper: cn('pt-[30px] pb-[36px] px-[24px]', classNameChildrenWrapper),
    }

    return (
      <Dialog.Portal {...rest}>
        <div className={classes.container}>
          <div className={classes.body}>
            <Dialog.Content
              aria-describedby={undefined}
              className={classes.content}
              forceMount
              ref={ref}
              style={style}
            >
              <div className={classes.titleContainer}>
                <Dialog.Title asChild>
                  {header ? header : <Text className={classes.title}>{title}</Text>}
                </Dialog.Title>
                {isClose && (
                  <Dialog.Close aria-label={t.button.closeModal} className={classes.close}>
                    <CrossIcon aria-hidden />
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
)

export const ModalTrigger = Dialog.Trigger
export const ModalClose = Dialog.Close
