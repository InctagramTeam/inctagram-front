import * as React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent, useTranslation } from '@/shared'

import { usePublicPost } from '../use-public-post'
import { AddPhotoModalHeader } from './add-photo-modal-header'

export const AddPhotoModalHeaderContent = (): ReturnComponent => {
  const { t } = useTranslation()
  const { publicPost, setModalStateTo, removeImages } = usePublicPost()
  const modalState = useAddPostPhotoStore(state => state.modalState)

  if (modalState === 'cropping') {
    return (
      <AddPhotoModalHeader
        nextHandler={() => {
          setModalStateTo('filters')
        }}
        prevHandler={() => {
          removeImages()
          setModalStateTo('add-photo')
        }}
        title={t.uploadPhoto.croppingTitle}
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
        title={t.uploadPhoto.filtersTitle}
      />
    )
  }

  if (modalState === 'publication') {
    return (
      <AddPhotoModalHeader
        nextButtonText={'Publish'}
        nextHandler={publicPost}
        prevHandler={() => {
          setModalStateTo('filters')
        }}
        title={t.uploadPhoto.publicationTitle}
      />
    )
  }
}
