import * as React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent, useTranslation } from '@/shared'

import { AddPhotoModalHeader } from './add-photo-modal-header'

export const AddPhotoModalHeaderContent = (): ReturnComponent => {
  const { t } = useTranslation()
  const modalState = useAddPostPhotoStore(state => state.modalState)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)

  if (modalState === 'cropping') {
    return (
      <AddPhotoModalHeader
        nextHandler={() => {
          setModalStateTo('filters')
        }}
        prevHandler={() => {
          setModalStateTo('add-photo')
        }}
        title={t.uploadPhoto.crop}
      />
    )
  }

  if (modalState === 'filters') {
    return (
      <AddPhotoModalHeader
        nextHandler={() => {
          setModalStateTo('publication')
        }}
        prevHandler={() => {
          setModalStateTo('cropping')
        }}
        title={'Filters'}
      />
    )
  }
}
