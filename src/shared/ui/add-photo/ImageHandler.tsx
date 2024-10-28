import React, { useCallback, useRef, useState } from 'react'

import { Button, Card, Text, useTranslation } from '@/shared'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import Dropdown from '@/shared/ui/add-photo/Dropdown'
import Image from 'next/image'

const ASPECT_RATIOS = { '1:1': 1, '4:5': 4 / 5, '16:9': 16 / 9 }

type ImageHandlerProps = {
  closeModal?: () => void
  imgSrc?: string
  setImgSrc?: (imgSrc: string) => void
  setModalTitle?: (title: string) => void
}

const ImageHandler = ({ setModalTitle, setImgSrc }: ImageHandlerProps) => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [zoom, setZoom] = useState(1)
  const [imgList, setImgList] = useState([]) // Список изображений и аспектов
  const [currentImageIndex, setCurrentImageIndex] = useState(0) // Индекс текущего изображения

  // Функция для обработки выбора файлов
  const onSelectFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || [])
      const newImgList = [...imgList]

      if (files.length > 0) {
        // Если файлы загружены, обрабатываем их
        files.forEach(file => {
          if (newImgList.length < 10) {
            // Лимит на 10 изображений
            const reader = new FileReader()

            reader.onload = () => {
              const imgSrc = reader.result?.toString() || ''

              newImgList.push({
                src: imgSrc,
                aspect: ASPECT_RATIOS['1:1'], // Устанавливаем начальный аспект
              })
              setImgList(newImgList)
              setImgSrc(imgSrc) // Устанавливаем imgSrc
              setModalTitle?.('Cropping')
            }
            reader.readAsDataURL(file)
          }
        })
      } else {
        // Если файлы не загружены, устанавливаем imgSrc в пустую строку
        setImgSrc('')
      }
    },
    [imgList, setImgSrc]
  )

  // Обработчик изменения соотношения сторон
  const handleAspectChange = (ratio: keyof typeof ASPECT_RATIOS) => {
    setImgList(prevList => {
      const updatedList = [...prevList]

      updatedList[currentImageIndex].aspect = ASPECT_RATIOS[ratio]

      return updatedList
    })
  }

  // Обработчик для открытия диалога выбора файлов
  const handleAddImageClick = () => fileInputRef.current?.click()

  return (
    <>
      <input
        accept={'image/jpeg,image/png'}
        className={'hidden'}
        multiple
        onChange={onSelectFile}
        ref={fileInputRef}
        type={'file'}
      />
      {!imgList.length ? (
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
      ) : (
        <div className={'mt-[28px] flex w-full flex-col items-center'}>
          <div
            className={'relative flex items-center justify-center overflow-hidden'}
            style={{
              width: '100%',
              maxWidth: '340px',
              paddingTop: `${100 / (imgList[currentImageIndex].aspect || 1)}%`, // Установка соотношения
            }}
          >
            <Image
              alt={'Upload'}
              height={340}
              src={imgList[currentImageIndex].src}
              style={{
                transform: `scale(${zoom})`,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              width={340}
            />
          </div>
          <Dropdown onAspectChange={handleAspectChange} />
          <div className={'mt-2 flex space-x-2'}>
            {imgList.map((_, index) => (
              <Button
                className={`h-2 w-2 rounded-full ${
                  index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                key={index}
                onClick={() => setCurrentImageIndex(index)}
              ></Button>
            ))}
          </div>
          <input
            className={'my-4'}
            max={'3'}
            min={'1'}
            onChange={e => setZoom(Number(e.target.value))}
            step={'0.1'}
            type={'range'}
            value={zoom}
          />
          <Button
            className={'mb-4 mt-2 rounded bg-blue-500 px-4 py-2 text-white'}
            onClick={handleAddImageClick}
          >
            Добавить изображение
          </Button>
          {imgList.length === 10 && (
            <p className={'mt-2 text-red-500'}>
              Достигнуто максимальное количество изображений (10)
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default ImageHandler
