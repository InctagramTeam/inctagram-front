import React from 'react'

import { Button, Card, Input, useTranslation } from '@/shared'
import { ImageOutlineIcon } from '@/shared/assets/icons'

import { useAddPhotoForm } from './hooks/use-add-photo-form'

export const AddPhotoForm = () => {
  const { t } = useTranslation()

  const { handleAddImageClick, imgChangeCallback, fileInputRef } = useAddPhotoForm()

  return (
    <div className={'pb-[50px] pt-[72px]'}>
      <Input
        accept={'image/jpeg,image/png'}
        aria-hidden
        className={'hidden'}
        multiple
        onChange={imgChangeCallback}
        ref={fileInputRef}
        type={'file'}
      />
      <div className={'flex w-full flex-col items-center'}>
        <Card className={'mb-[60px] flex aspect-square w-full max-w-[222px]'}>
          <ImageOutlineIcon aria-hidden className={'m-auto'} />
        </Card>
        <Button
          className={'px-[24px] py-[6px] !text-H3-16'}
          onClick={handleAddImageClick}
          type={'button'}
          variant={'primary'}
        >
          {t.button.selectFromComputer}
        </Button>
      </div>
    </div>
  )
}
