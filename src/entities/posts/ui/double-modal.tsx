import * as React from 'react'
import { ReactNode } from 'react'

import { Modal, ModalContent, ReturnComponent } from '@/shared'

type Props = {
  children: ReactNode
  isOpen: boolean
  modalTitle: string
  openChange: (value: boolean) => void
  text?: string
}

export const DoubleModal = ({
  children,
  text,
  openChange,
  isOpen,
  modalTitle,
}: Props): ReturnComponent => {
  return (
    <Modal onOpenChange={_ => openChange(false)} open={isOpen}>
      <ModalContent classNameContent={'!max-w-[378px]'} isClose title={modalTitle}>
        {text && <p className={'mb-[18px]'}>{text}</p>}
        <div className={'flex justify-between gap-[20px]'}>{children}</div>
      </ModalContent>
    </Modal>
  )
}
