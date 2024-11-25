import * as React from 'react'
import { useEffect, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Modal, useTranslation } from '@/shared'

import { AddPhotoForm } from './add-photo-form/add-photo-form'
import { CroppingPhoto } from './cropping-photo/cropping-photo'
import { ModalHeaderForAddPhoto } from './modal-header-for-add-photo'

export const AddPhotoContainer = () => {
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
        classNameChildrenWrapper={'!px-0 !py-0'}
        classNameContent={'max-w-[492px]'}
        classNameTitle={'text-H1-20'}
        header={
          modalState === 'cropping' ? (
            <ModalHeaderForAddPhoto returnCallback={setIsOpen} title={t.uploadPhoto.crop} />
          ) : null
        }
        isClose={images.length > 0}
        title={images.length === 0 ? t.uploadPhoto.addPhoto : undefined}
      >
        {modalState === 'add-photo' && <AddPhotoForm />}
        {modalState === 'cropping' && <CroppingPhoto />}
      </Modal.Content>
    </Modal>
  )
}
