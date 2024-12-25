import * as React from 'react'

import { Button, Modal, Text, useTranslation } from '@/shared'
import { DeleteAvatarIcon } from '@/shared/assets/icons/DeleteIcon'
import { useDeleteAvatarButton } from '@/shared/ui/add-profile-photo/delete-avatar-button/hooks/useDeleteAvatarButton'
import { ModalContent, ModalTrigger } from '@/shared/ui/modal'

export const DeleteAvatarButton = () => {
  const { t } = useTranslation()

  const { modalDeleteAvatarOpen, setModalDeleteAvatarOpen, deleteAvatarHandler } =
    useDeleteAvatarButton()

  return (
    <Modal onOpenChange={isOpen => setModalDeleteAvatarOpen(isOpen)} open={modalDeleteAvatarOpen}>
      <ModalTrigger asChild>
        <Button
          className={`absolute right-3 top-3 border-none bg-transparent hover:scale-110 hover:bg-transparent active:scale-110 active:bg-transparent`}
          onClick={() => setModalDeleteAvatarOpen(true)}
          title={t.pages.profile.deletePhoto.title}
          type={'button'}
        >
          <DeleteAvatarIcon />
        </Button>
      </ModalTrigger>
      <ModalContent
        classNameChildrenWrapper={'px-[24px] !py-0'}
        classNameContent={'!max-w-[438px]'}
        classNameTitle={'text-H1-20'}
        classNameTitleContainer={'h-[59px]'}
        title={t.pages.profile.deletePhoto.title}
      >
        <div className={'flex flex-col'}>
          <Text className={'mb-[54px] mt-[30px]'} variant={'regular_text_16'}>
            {t.pages.profile.deletePhoto.deleteProfilePhotoQuestion}
          </Text>
          <div className={'mb-[36px] flex justify-end gap-x-[24px]'}>
            <Button
              className={'h-[36px] w-[96px] !p-0'}
              onClick={deleteAvatarHandler}
              variant={'outline'}
            >
              {t.button.yes}
            </Button>
            <Button className={'h-[36px] w-[96px]'} onClick={() => setModalDeleteAvatarOpen(false)}>
              {t.button.no}
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}
