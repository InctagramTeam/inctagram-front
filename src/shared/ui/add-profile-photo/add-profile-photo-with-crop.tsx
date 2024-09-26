import { Button, Modal, Text } from '@/shared'
import { UserAvatar } from '@/entities/profile'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import * as React from 'react'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user-api'
import ImageCropper from '@/shared/ui/add-profile-photo/ImageCropper'
import 'react-image-crop/dist/ReactCrop.css'
import { DeleteAvatarIcon } from '@/shared/assets/icons/DeleteIcon'

export const AddProfilePhotoWithCrop = () => {
  const [modalUpdateAvatarOpen, setModalUpdateAvatarOpen] = useState(false)
  const [modalDeleteAvatarOpen, setModalDeleteAvatarOpen] = useState(false)

  const queryClient = useQueryClient()

  const avatar = useQuery({
    queryFn: async () => {
      return userService.getAvatar('5')
    },
    queryKey: ['avatar'],
  })

  console.log(avatar.data?.url)

  const { mutate: deleteAvatar, isPending: isPendingDeleteAvatar } = useMutation({
    mutationFn: async () => {
      return userService.deleteAvatar()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['avatar'] })
    },
    onError: (err: Error) => {},
  })

  const { mutate: updateAvatar, isPending: isPendingUpdatePhoto } = useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updateAvatar(formData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['avatar'] })
    },
    onError: (err: Error) => {},
  })

  const deleteAvatarHandler = () => {
    deleteAvatar()
    setModalDeleteAvatarOpen(false)
  }

  const updateAvatarHandler = (formData: FormData) => {
    updateAvatar(formData)
  }

  return (
    <div className={'flex flex-col gap-y-6'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar
          className={`h-full w-full`}
          bgColor={'bg-Dark-500'}
          children={<ImageOutlineIcon />}
          src={avatar.data?.url || null}
        />
        {avatar.data?.url && (
          <Modal
            open={modalDeleteAvatarOpen}
            onOpenChange={isOpen => setModalDeleteAvatarOpen(isOpen)}
          >
            <Modal.Button asChild>
              <button
                className={`absolute right-3 top-3`}
                onClick={() => setModalDeleteAvatarOpen(true)}
              >
                <DeleteAvatarIcon />
              </button>
            </Modal.Button>
            <Modal.Content
              title="Delete Photo"
              classNameChildrenWrapper={'px-[24px]'}
              classNameTitle={'text-H1-20'}
              classNameTitleContainer={'h-[59px]'}
              classNameContent={'!max-w-[438px]'}
            >
              <div className={'flex flex-col'}>
                <Text className={'mb-[54px] mt-[30px]'} variant={'regular_text_16'}>
                  Are you sure you want to delete the photo?
                </Text>
                <div className={'mb-[36px] flex justify-end gap-x-[24px]'}>
                  <Button
                    variant={'outline'}
                    className={'h-[36px] w-[96px] !p-0'}
                    onClick={deleteAvatarHandler}
                  >
                    Yes
                  </Button>
                  <Button
                    className={'h-[36px] w-[96px]'}
                    onClick={() => setModalDeleteAvatarOpen(false)}
                  >
                    No
                  </Button>
                </div>
              </div>
            </Modal.Content>
          </Modal>
        )}
      </div>
      <Modal open={modalUpdateAvatarOpen} onOpenChange={isOpen => setModalUpdateAvatarOpen(isOpen)}>
        <Modal.Button asChild>
          <Button variant={'outline'} onClick={() => setModalUpdateAvatarOpen(true)}>
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
          <ImageCropper
            updateAvatar={updateAvatarHandler}
            closeModal={() => setModalUpdateAvatarOpen(false)}
          />
        </Modal.Content>
      </Modal>
    </div>
  )
}
