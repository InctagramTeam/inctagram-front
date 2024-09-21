import { Button, Modal } from '@/shared'
import { UserAvatar } from '@/entities/profile'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import * as React from 'react'
import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user-api'
import ImageCropper from '@/shared/ui/add-profile-photo/ImageCropper'
import 'react-image-crop/dist/ReactCrop.css'

export const AddProfilePhotoWithCrop = () => {
  const avatarUrl = useRef('')

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updatePhoto(formData)
    },
    onSuccess: () => {},
    onError: (err: Error) => {},
  })

  const [modalOpen, setModalOpen] = useState(false)
  const updateAvatar = (imgSrc: string) => {
    avatarUrl.current = imgSrc
    // mutate(imgSrc)
  }

  return (
    <div className={'flex flex-col gap-y-6'}>
      <UserAvatar
        className={`h-[192px] w-[192px]`}
        bgColor={'bg-Dark-500'}
        children={<ImageOutlineIcon />}
        src={avatarUrl.current}
      />
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
          <ImageCropper updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} />
        </Modal.Content>
      </Modal>
    </div>
  )
}
