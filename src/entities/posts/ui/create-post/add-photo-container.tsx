import * as React from 'react'
import { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { AppRoutes, Modal, ModalContent, ReturnComponent, useTranslation } from '@/shared'
import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import { AddPhotoForm } from './add-post-form/add-photo-form'
import { AddPhotoModalHeaderContent } from './add-post-modal-header/add-photo-modal-header-content'
import { CroppingPhoto } from './cropping-photo/cropping-photo'
import { FiltersPhoto } from './filters-photo/filters-photo'
import { ModalCloseAddPhotoModal } from './modal-close-add-photo-modal'
import { PublicationPost } from './publication-post/publication-post'

export const AddPhotoContainer = (): ReturnComponent => {
  const { t } = useTranslation()
  const modalState = useAddPostPhotoStore(state => state.modalState)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isOpenModalClose, setIsOpenModalClose] = useState<boolean>(false)
  const router = useRouter()

  const openChange = () => {
    if (modalState === 'add-photo') {
      setIsOpen(false)
      router.replace(AppRoutes.MAIN)
    } else {
      setIsOpenModalClose(true)
    }
  }

  return (
    <Modal onOpenChange={openChange} open={isOpen}>
      <ModalContent
        classNameChildrenWrapper={'!px-0 !py-0'}
        classNameContent={clsx(
          modalState === 'filters' || modalState === 'publication'
            ? '!max-w-[972px]'
            : 'max-w-[492px]'
        )}
        classNameTitle={'text-H1-20'}
        header={
          modalState !== 'add-photo' && (
            <AddPhotoModalHeaderContent onChangeModalClose={setIsOpenModalClose} />
          )
        }
        isClose={modalState === 'add-photo'}
        title={modalState === 'add-photo' ? t.uploadPhoto.addPhoto : undefined}
      >
        <ModalCloseAddPhotoModal isOpen={isOpenModalClose} openChange={setIsOpenModalClose} />
        {modalState === 'add-photo' && <AddPhotoForm />}
        {modalState === 'cropping' && <CroppingPhoto openChangeModalClose={setIsOpenModalClose} />}
        {modalState === 'filters' && <FiltersPhoto />}
        {modalState === 'publication' && <PublicationPost />}
      </ModalContent>
    </Modal>
  )
}
