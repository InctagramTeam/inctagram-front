import { Button, Modal, Text } from '@/shared'
import { DeleteAvatarIcon } from '@/shared/assets/icons/DeleteIcon'
import * as React from 'react'
import { useDeleteAvatarButton } from '@/shared/ui/add-profile-photo/delete-avatar-button/hooks/useDeleteAvatarButton'

export const DeleteAvatarButton = () => {
  const { modalDeleteAvatarOpen, setModalDeleteAvatarOpen, deleteAvatarHandler } =
    useDeleteAvatarButton()

  return (
    <Modal onOpenChange={isOpen => setModalDeleteAvatarOpen(isOpen)} open={modalDeleteAvatarOpen}>
      <Modal.Button asChild>
        <button className={`absolute right-3 top-3`} onClick={() => setModalDeleteAvatarOpen(true)}>
          <DeleteAvatarIcon />
        </button>
      </Modal.Button>
      <Modal.Content
        classNameChildrenWrapper={'px-[24px] !py-0'}
        classNameContent={'!max-w-[438px]'}
        classNameTitle={'text-H1-20'}
        classNameTitleContainer={'h-[59px]'}
        title={'Delete Photo'}
      >
        <div className={'flex flex-col'}>
          <Text className={'mb-[54px] mt-[30px]'} variant={'regular_text_16'}>
            Are you sure you want to delete the photo?
          </Text>
          <div className={'mb-[36px] flex justify-end gap-x-[24px]'}>
            <Button
              className={'h-[36px] w-[96px] !p-0'}
              onClick={deleteAvatarHandler}
              variant={'outline'}
            >
              Yes
            </Button>
            <Button className={'h-[36px] w-[96px]'} onClick={() => setModalDeleteAvatarOpen(false)}>
              No
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}
