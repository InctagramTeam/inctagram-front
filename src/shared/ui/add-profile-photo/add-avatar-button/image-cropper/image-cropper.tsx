import React, { useCallback, useRef, useState } from 'react'
import {
  Crop,
  PixelCrop,
  ReactCrop,
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from 'react-image-crop'

import { Button, Card, Text, useTranslation } from '@/shared'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import setCanvasPreview from '@/shared/ui/add-profile-photo/add-avatar-button/image-cropper/set-canvas-preview'
import Image from 'next/image'

import 'react-image-crop/dist/ReactCrop.css'

const ASPECT_RATIO = 1
const MIN_DIMENSION = 192
const MAX_SIZE_MB = 10 * 1024 * 1024
const VALID_FORMATS = ['image/jpeg', 'image/png']

type ImageCropperProps = {
  closeModal: () => void
  updateAvatar: (formData: FormData) => void
}

const ImageCropper: React.FC<ImageCropperProps> = ({ closeModal, updateAvatar }) => {
  const { t } = useTranslation()

  const imgRef = useRef<HTMLImageElement>(null)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const [imgSrc, setImgSrc] = useState<string>('')
  const [crop, setCrop] = useState<Crop | undefined>(undefined)
  const [error, setError] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File): null | string => {
    if (!VALID_FORMATS.includes(file.type)) {
      return t.pages.profile.addProfilePhoto.errors.validateFile.fileType
    }
    if (file.size > MAX_SIZE_MB) {
      return t.pages.profile.addProfilePhoto.errors.validateFile.fileSize
    }

    return null
  }

  const onSelectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    const validationError = validateFile(file)

    if (validationError) {
      setError(validationError)

      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const imageUrl = reader.result?.toString() || ''
      const imageElement: HTMLImageElement = document.createElement('img')

      imageElement.src = imageUrl
      imageElement.onload = (e: Event) => {
        const { naturalHeight, naturalWidth } = e.currentTarget as HTMLImageElement

        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError(t.pages.profile.addProfilePhoto.errors.minDimension(MIN_DIMENSION))
          setImgSrc('')
        } else {
          setError('')
          setImgSrc(imageUrl)
        }
      }
    }
    reader.readAsDataURL(file)
  }, [])

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { height, width } = e.currentTarget
    const crop = makeAspectCrop(
      { unit: '%', width: (MIN_DIMENSION / width) * 100 },
      ASPECT_RATIO,
      width,
      height
    )

    setCrop(centerCrop(crop, width, height))
  }, [])

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const handleSave = useCallback(() => {
    if (!imgRef.current || !previewCanvasRef.current || !crop) {
      return
    }

    setCanvasPreview(
      imgRef.current,
      previewCanvasRef.current,
      convertToPixelCrop(crop as PixelCrop, imgRef.current.width, imgRef.current.height)
    )

    previewCanvasRef.current.toBlob(blob => {
      if (blob) {
        const file = new File([blob], 'avatar.jpg', { type: 'image/jpeg' })
        const formData = new FormData()

        formData.append('file', file)

        updateAvatar(formData)
      }
    }, 'image/jpeg')

    closeModal()
  }, [crop, updateAvatar, closeModal])

  return (
    <>
      {error && (
        <div
          className={
            'my-[24px] flex items-center justify-center border border-Danger-500 bg-Danger-900 px-[24px] py-[6px]'
          }
        >
          <div className={'w-[80%] text-center'}>
            <Text variant={'bold_text_14'}>{t.label.error}! </Text>
            <Text variant={'regular-text-14'}>{error}</Text>
          </div>
        </div>
      )}

      {!imgSrc ? (
        <div className={`flex w-full flex-col items-center ${!error ? 'mt-[72px]' : ''}`}>
          <Card className={'h-[228px] w-[222px]'}>
            <div className={'flex h-full w-full items-center justify-center'}>
              <ImageOutlineIcon />
            </div>
          </Card>

          <input
            accept={'image/jpeg,image/png'}
            className={'hidden'}
            onChange={onSelectFile}
            ref={fileInputRef}
            type={'file'}
          />

          <Button
            className={'mb-[108px] mt-[60px] px-6 py-1.5'}
            onClick={triggerFileInput}
            type={'button'}
            variant={'primary'}
          >
            <Text variant={'H3'}>{t.button.selectFromComputer}</Text>
          </Button>
        </div>
      ) : (
        <div className={`flex w-full flex-col items-center ${!error ? 'mt-[28px]' : ''}`}>
          <ReactCrop
            aspect={ASPECT_RATIO}
            circularCrop
            crop={crop}
            keepSelection
            minWidth={MIN_DIMENSION}
            onChange={percentCrop => setCrop(percentCrop)}
          >
            <div className={'relative !max-h-[340px]'}>
              <Image
                alt={'Upload'}
                height={340}
                objectFit={'contain'}
                onLoad={onImageLoad}
                ref={imgRef}
                src={imgSrc}
                width={340}
              />
            </div>
          </ReactCrop>

          <div className={'my-[36px] flex w-full justify-end'}>
            <Button className={'px-[24px] py-[6px]'} onClick={handleSave} variant={'primary'}>
              {t.button.simple_save}
            </Button>
          </div>
        </div>
      )}

      {crop && (
        <canvas
          className={'hidden'}
          height={MIN_DIMENSION}
          ref={previewCanvasRef}
          width={MIN_DIMENSION}
        />
      )}
    </>
  )
}

export default ImageCropper
