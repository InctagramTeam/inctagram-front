import React, { ChangeEvent, useRef } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button, Card, Text, useTranslation } from '@/shared'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import { toast } from '@/shared/ui/toast/use-toast'

export const AddPhotoFormContainer = () => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const addImage = useAddPostPhotoStore(state => state.addImage)
  const images = useAddPostPhotoStore(state => state.images)
  const modalState = useAddPostPhotoStore(state => state.modalState)

  const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string

      callBack(file64)
    }
    reader.readAsDataURL(file)
  }

  const imgChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size > 20 * 1024 * 1024) {
        toast({
          title: 'error',
          description: 'Фотография должна быть размером менее 20 Мб',
          variant: 'destructive',
        })

        return
      }
      convertFileToBase64(file, (file64: string) => {
        if (images.length < 1) {
          setModalStateTo('cropping')
        }
        addImage(file64)
      })
    }
  }
  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    imgChangeCallback(e)
  }

  const handleAddImageClick = () => fileInputRef.current?.click()

  return (
    <>
      {modalState === 'add-photo' && (
        <>
          <input
            accept={'image/jpeg,image/png'}
            className={'hidden'}
            multiple
            onChange={handleImgChange}
            ref={fileInputRef}
            type={'file'}
          />
          <div className={'mt-[72px] flex w-full flex-col items-center'}>
            <Card className={'h-[228px] w-[222px]'}>
              <div className={'flex h-full w-full items-center justify-center'}>
                <ImageOutlineIcon />
              </div>
            </Card>
            <Button
              className={'mb-[108px] mt-[60px] px-6 py-1.5'}
              onClick={handleAddImageClick}
              type={'button'}
              variant={'primary'}
            >
              <Text variant={'H3'}>{t.button.selectFromComputer}</Text>
            </Button>
          </div>
        </>
      )}
    </>
  )
}
