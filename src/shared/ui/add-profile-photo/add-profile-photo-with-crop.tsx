import { Button, Modal } from '@/shared'
import { UserAvatar } from '@/entities/profile'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import * as React from 'react'
import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user-api'
import ImageCropper from '@/shared/ui/add-profile-photo/ImageCropper'
import 'react-image-crop/dist/ReactCrop.css'
import { DeleteAvatarIcon } from '@/shared/assets/icons/DeleteIcon'

export const AddProfilePhotoWithCrop = () => {
  const avatarUrl = useRef('')

  const { mutate: deleteAvatar, isPending: isPendingDeleteAvatar } = useMutation({
    mutationFn: async () => {
      return userService.deleteAvatar()
    },
    onSuccess: () => {},
    onError: (err: Error) => {},
  })

  const { mutate: updateAvatar, isPending: isPendingUpdatePhoto } = useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updateAvatar(formData)
    },
    onSuccess: () => {},
    onError: (err: Error) => {},
  })

  const [modalOpen, setModalOpen] = useState(false)
  const updateAvatarHandler = (imgSrc: string) => {
    avatarUrl.current = imgSrc
    // updatePhoto(imgSrc)
  }

  const deleteAvatarHandler = () => {
    deleteAvatar()
  }

  return (
    <div className={'flex flex-col gap-y-6'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar
          className={`h-full w-full`}
          bgColor={'bg-Dark-500'}
          children={<ImageOutlineIcon />}
          src={avatarUrl.current}
        />
        {avatarUrl.current && (
          <button className={`absolute right-4 top-4`} onClick={deleteAvatarHandler}>
            <DeleteAvatarIcon />
          </button>
        )}
      </div>
      <Modal open={modalOpen} onOpenChange={isOpen => setModalOpen(isOpen)}>
        <Modal.Button asChild>
          <Button variant={'outline'} onClick={() => setModalOpen(true)}>
            Add a Profile Photo
          </Button>
        </Modal.Button>
        <Modal.Content
          title="Add a Profile Photo"
          classNameChildrenWrapper={'px-[24px]'}
          classNameTitle={'text-H1-20'}
          classNameTitleContainer={'h-[59px]'}
          classNameContent={'!max-w-[492px]'}
        >
          <ImageCropper updateAvatar={updateAvatarHandler} closeModal={() => setModalOpen(false)} />
        </Modal.Content>
      </Modal>
    </div>
  )
}
