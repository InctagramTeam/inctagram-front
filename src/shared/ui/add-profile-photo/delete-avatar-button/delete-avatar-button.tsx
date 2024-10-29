import * as React from 'react'

import { Button, Modal, Text, useTranslation } from '@/shared'
import { DeleteAvatarIcon } from '@/shared/assets/icons/DeleteIcon'
import { useDeleteAvatarButton } from '@/shared/ui/add-profile-photo/delete-avatar-button/hooks/useDeleteAvatarButton'

export const DeleteAvatarButton = () => {
  const { t } = useTranslation()

  const { modalDeleteAvatarOpen, setModalDeleteAvatarOpen, deleteAvatarHandler } =
    useDeleteAvatarButton()

  return (
    <Modal onOpenChange={isOpen => setModalDeleteAvatarOpen(isOpen)} open={modalDeleteAvatarOpen}>
      <Modal.Button asChild>
        <button
          className={`absolute right-3 top-3`}
          onClick={() => setModalDeleteAvatarOpen(true)}
          title={t.pages.profile.deletePhoto.title}
          type={'button'}
        >
          <DeleteAvatarIcon />
        </button>
      </Modal.Button>
      <Modal.Content
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
      </Modal.Content>
    </Modal>
  )
}
