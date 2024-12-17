import React, { useRef } from 'react'

import { Button, Card, ReturnComponent, useTranslation } from '@/shared'
import { ImageOutlineIcon } from '@/shared/assets/icons'

import { AddPhotoInput } from './add-photo-input'

export const AddPhotoForm = (): ReturnComponent => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const handleAddImageClick = () => fileInputRef.current?.click()

  return (
    <div className={'pb-[50px] pt-[72px]'}>
      <AddPhotoInput ref={fileInputRef} />
      <div className={'flex w-full flex-col items-center'}>
        <Card aria-hidden className={'mb-[60px] flex aspect-square w-full max-w-[222px]'}>
          <ImageOutlineIcon className={'m-auto'} />
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
