import * as React from 'react'

import { Button, Modal, ModalContent, ReturnComponent, useTranslation } from '@/shared'

import { usePublicPost } from './use-public-post'

type Props = {
  isOpen: boolean
  openChange: (value: boolean) => void
}
export const ModalCloseAddPhotoModal = ({ isOpen, openChange }: Props): ReturnComponent => {
  const { t } = useTranslation()
  const { publicPost, clearState } = usePublicPost()

  const discardButtonHandler = () => {
    clearState()
    openChange(false)
  }

  return (
    <Modal onOpenChange={_ => openChange(false)} open={isOpen}>
      <ModalContent classNameContent={'!max-w-[378px]'} isClose title={t.button.close}>
        <p className={'mb-[18px]'}>{t.pages.createPost.wantToCloseCreation}</p>
        <div className={'flex justify-between gap-[20px]'}>
          <Button onClick={discardButtonHandler} type={'button'} variant={'outline'}>
            {t.button.discard}
          </Button>
          <Button
            className={'px-[24px] py-[6px]'}
            onClick={() => publicPost(true)}
            type={'button'}
            variant={'primary'}
          >
            {t.button.saveDraft}
          </Button>
        </div>
      </ModalContent>
    </Modal>
  )
}
