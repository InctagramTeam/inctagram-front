import * as React from 'react'
import { useEffect, useState } from 'react'

import { Modal, useTranslation } from '@/shared'
import DialogHeader from '@/shared/ui/add-photo/DialogHeader'
import ImageHandler from '@/shared/ui/add-photo/ImageHandler'
import { useAddAvatarButton } from '@/shared/ui/add-profile-photo/add-avatar-button/hooks/useAddAvatarButton'

export const AddPost = () => {
  const { t } = useTranslation()
  const { modalUpdateAvatarOpen, setModalUpdateAvatarOpen } = useAddAvatarButton()
  const [modalTitle, setModalTitle] = useState(t.pages.create.title)
  const [imgSrc, setImgSrc] = useState<string>('') // Подняли состояние сюда

  // Устанавливаем модал в открытое состояние при монтировании
  useEffect(() => {
    setModalUpdateAvatarOpen(true)
  }, [setModalUpdateAvatarOpen])
  // Обработчик открытия/закрытия модального окна
  const handleOpenChange = (isOpen: boolean) => {
    setModalUpdateAvatarOpen(isOpen)
    if (!isOpen) {
      setModalTitle(t.pages.create.title) // Сбрасываем заголовок при закрытии модального окна
      setImgSrc('')
    }
  }

  return (
    <Modal onOpenChange={isOpen => handleOpenChange(isOpen)} open={modalUpdateAvatarOpen}>
      <Modal.Content
        classNameChildrenWrapper={'px-[24px] !py-0'}
        classNameContent={'!max-w-[492px]'}
        classNameTitle={'text-H1-20'}
        classNameTitleContainer={'h-[59px]'}
        headerControls={imgSrc ? 'navigation' : 'close'}
        {...(imgSrc ? { header: <DialogHeader title={modalTitle} /> } : { title: modalTitle })}
        isClose={imgSrc === ''}
      >
        <ImageHandler
          closeModal={() => setModalUpdateAvatarOpen(false)}
          imgSrc={imgSrc} // Передаем imgSrc как проп
          setImgSrc={setImgSrc}
          setModalTitle={setModalTitle}
        />
      </Modal.Content>
    </Modal>
  )
}
