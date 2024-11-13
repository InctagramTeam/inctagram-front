import * as React from 'react'
import { useEffect, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Modal, useTranslation } from '@/shared'
import { AddPhotoFormContainer, ModalHeaderForAddPhoto } from '@/shared/ui/add-post-photo'

export const AddPhotoForm = () => {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const modalState = useAddPostPhotoStore(state => state.modalState)
  const images = useAddPostPhotoStore(state => state.images)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Modal onOpenChange={isOpen => setIsOpen(isOpen)} open={isOpen}>
      <Modal.Content
        classNameChildrenWrapper={'px-[24px] !py-0'}
        classNameContent={'!max-w-[492px]'}
        classNameTitle={'text-H1-20'}
        classNameTitleContainer={'h-[59px]'}
        header={modalState === 'cropping' ? <ModalHeaderForAddPhoto title={'Cropping'} /> : null}
        isClose={images.length > 0}
        title={images.length === 0 ? t.pages.create.title : undefined}
      >
        <AddPhotoFormContainer />
      </Modal.Content>
    </Modal>
  )
}
