import * as React from 'react'
import { useEffect, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Modal, ReturnComponent, useTranslation } from '@/shared'
import { clsx } from 'clsx'

import { AddPhotoForm } from './add-photo-form/add-photo-form'
import { AddPhotoModalHeaderContent } from './add-photo-modal-header/add-photo-modal-header-content'
import { CroppingPhoto } from './cropping-photo/cropping-photo'
import { FiltersPhoto } from './filters-photo/filters-photo'
import { PublicationPost } from './publication-post/publication-post'

export const AddPhotoContainer = (): ReturnComponent => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const modalState = useAddPostPhotoStore(state => state.modalState)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Modal onOpenChange={isOpen => setIsOpen(isOpen)} open={isOpen}>
      <Modal.Content
        classNameChildrenWrapper={'!px-0 !py-0'}
        classNameContent={clsx(
          modalState === 'filters' || modalState === 'publication'
            ? '!max-w-[972px]'
            : 'max-w-[492px]'
        )}
        classNameTitle={'text-H1-20'}
        header={modalState !== 'add-photo' && <AddPhotoModalHeaderContent />}
        isClose={modalState === 'add-photo'}
        title={modalState === 'add-photo' ? t.uploadPhoto.addPhoto : undefined}
      >
        {modalState === 'add-photo' && <AddPhotoForm />}
        {modalState === 'cropping' && <CroppingPhoto />}
        {modalState === 'filters' && <FiltersPhoto />}
        {modalState === 'publication' && <PublicationPost />}
      </Modal.Content>
    </Modal>
  )
}
