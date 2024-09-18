import { Button, Card, Modal, Text } from '@/shared'
import { UserAvatar } from '@/entities/profile'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { userService } from '@/entities/user/api/user-api'

type Props = {}

export const AddProfilePhoto = ({}: Props) => {
  // Состояния для фото, ошибок и открытия модального окна
  const [photo, setPhoto] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null) // Добавляем состояние для файла
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Валидация файла по типу и размеру
  const validateFile = (file: File): string | null => {
    const validFormats = ['image/jpeg', 'image/png']
    const maxSize = 10 * 1024 * 1024

    if (!validFormats.includes(file.type)) {
      setPhoto(null)
      return 'Error! The format of the uploaded photo must be PNG and JPEG'
    }
    if (file.size > maxSize) {
      setPhoto(null)
      return 'Error! Photo size must be less than 10 MB!'
    }
    return null
  }

  // Обработчик изменения файла
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    const validationError = validateFile(selectedFile)
    if (validationError) {
      setError(validationError)
      return
    }

    setPhoto(URL.createObjectURL(selectedFile))
    setFile(selectedFile)
    setError('')
  }

  // Мутация для отправки данных
  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      // const response = await fetch('/api/profile/photo', {
      //   method: 'POST',
      //   body: formData,
      // })
      // if (!response.ok) {
      //   throw new Error('Ошибка загрузки фото')
      // }
      // return response.json()
      return userService.updatePhoto(formData)
    },
    onSuccess: () => {
      setIsOpen(false)
      setPhoto(null)
      setFile(null)
    },
    onError: (err: Error) => {
      setError(err.message)
    },
  })

  // Обработчик сохранения
  const handleSave = () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      mutate(formData)
    }
  }

  // Триггер для открытия файлового диалога
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Сброс состояния при закрытии модального окна
  useEffect(() => {
    if (!isOpen) {
      // Задержка для завершения анимации закрытия
      const timeout = setTimeout(() => {
        setPhoto(null)
        setFile(null)
        setError('')
      }, 200)

      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  return (
    <div className={'flex flex-col gap-y-6'}>
      <UserAvatar
        className={`h-[192px] w-[192px]`}
        bgColor={'bg-Dark-500'}
        children={<ImageOutlineIcon />}
      />
      <Modal open={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
        <Modal.Button asChild>
          <Button variant={'outline'} onClick={() => setIsOpen(true)}>
            Add a Profile Photo
          </Button>
        </Modal.Button>
        <Modal.Content
          title="Add a Profile Photo"
          classNameChildrenWrapper={'px-[24px]'}
          classNameTitle={'text-H1-20'}
          classNameTitleContainer={'h-[59px]'}
          classNameContent={'max-w-[492px]'}
        >
          {/* Сообщение об ошибке */}
          {error && (
            <div className={`${error ? 'my-[24px]' : ''} bg-Danger-900 px-6 py-1.5 text-center`}>
              <Text variant={'bold_text_14'}>{error}</Text>
            </div>
          )}

          {/* Превью загруженного фото */}
          {photo ? (
            <div className={`${!error ? 'mt-[28px]' : ''} flex w-full flex-col items-center`}>
              <Image
                src={photo}
                alt="Profile Preview"
                width={332}
                height={340}
                className=" max-h-[340px] max-w-[332px] object-cover"
              />
              <div className={'my-[36px] flex w-full justify-end'}>
                <Button
                  onClick={handleSave}
                  className="justify-end px-[24px] py-[6px]"
                  disabled={isPending}
                >
                  <Text variant={'H3'}>{isPending ? 'Saving...' : 'Save'}</Text>
                </Button>
              </div>
            </div>
          ) : (
            <div className={`${!error ? 'mt-[72px]' : ''} flex w-full flex-col items-center`}>
              <div>
                <Card className={'h-[228px] w-[222px]'}>
                  <span className={'flex h-full w-full items-center justify-center'}>
                    <ImageOutlineIcon />
                  </span>
                </Card>
              </div>

              {/* Скрытое поле выбора файла */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />

              {/* Кнопка для выбора файла */}
              <Button
                type="button"
                onClick={triggerFileInput}
                variant={'primary'}
                className={'mb-[72px] mt-[60px] px-6 py-1.5'}
              >
                <Text variant={'H3'}>Select from Computer</Text>
              </Button>
            </div>
          )}
        </Modal.Content>
      </Modal>
    </div>
  )
}
