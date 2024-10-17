import * as React from 'react'
import { useState } from 'react'

import { UserAvatar } from '@/entities/profile'
import { userService } from '@/entities/user/api/user-api'
import authApi from '@/feature/auth/api/auth-api'
import { Button, Modal, Text } from '@/shared'
import { DeleteAvatarIcon } from '@/shared/assets/icons/DeleteIcon'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import ImageCropper from '@/shared/ui/add-profile-photo/ImageCropper'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import 'react-image-crop/dist/ReactCrop.css'

export const AddProfilePhotoWithCrop = ({ userId }: { userId: number }) => {
  const [modalUpdateAvatarOpen, setModalUpdateAvatarOpen] = useState(false)
  const [modalDeleteAvatarOpen, setModalDeleteAvatarOpen] = useState(false)

  const queryClient = useQueryClient()

  const { data: avatar } = useQuery({
    enabled: !!userId,
    queryFn: () => userService.getAvatar(Number(userId)),
    queryKey: ['avatar'],
  })

  const { mutate: deleteAvatar } = useMutation({
    mutationFn: userService.deleteAvatar,
    onError: (error: Error, _, context: any) => {
      toast({
        description: navigator.onLine
          ? error.message
          : 'You are currently offline. Changes may not be saved.',
        title: 'Error',
        variant: 'destructive',
      })

      if (context?.previousAvatar) {
        queryClient.setQueryData(['avatar'], context.previousAvatar)
      }
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['avatar'] })
      const previousAvatar = queryClient.getQueryData(['avatar'])

      queryClient.setQueryData(['avatar'], null)

      return { previousAvatar }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['avatar'] })
      toast({
        description: 'The photo has been successfully deleted.',
        title: 'Success',
        variant: 'default',
      })
    },
  })

  const { mutate: updateAvatar } = useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updateAvatar(formData)
    },
    onError: (error: Error, _, context: any) => {
      toast({
        description: navigator.onLine
          ? error.message
          : 'You are currently offline. Changes may not be saved.',
        title: 'Error',
        variant: 'destructive',
      })

      if (context?.previousAvatar) {
        queryClient.setQueryData(['avatar'], context.previousAvatar)
      }
    },
    onMutate: async (formData: FormData) => {
      await queryClient.cancelQueries({ queryKey: ['avatar'] })
      const previousAvatar = queryClient.getQueryData(['avatar'])
      const newAvatarUrl = URL.createObjectURL(formData.get('file') as Blob)

      queryClient.setQueryData(
        ['avatar'],
        previousAvatar ? { ...previousAvatar, url: newAvatarUrl } : { url: newAvatarUrl }
      )

      return { previousAvatar }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['avatar'] })
      toast({
        description: 'The photo has been successfully updated.',
        title: 'Success',
        variant: 'default',
      })
    },
  })

  const deleteAvatarHandler = () => {
    if (navigator.onLine) {
      deleteAvatar()
    } else {
      toast({
        description: 'You are currently offline. Please check your internet connection.',
        title: 'Error',
        variant: 'destructive',
      })
    }
    setModalDeleteAvatarOpen(false)
  }

  const updateAvatarHandler = (formData: FormData) => {
    if (navigator.onLine) {
      updateAvatar(formData)
    } else {
      toast({
        description: 'You are currently offline. Please check your internet connection.',
        title: 'Error',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className={'flex flex-col gap-y-6 py-[1.5rem]'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar bgColor={'bg-Dark-500'} className={`h-full w-full`} src={avatar?.url || ''}>
          <ImageOutlineIcon />
        </UserAvatar>
        {avatar?.url && (
          <Modal
            onOpenChange={isOpen => setModalDeleteAvatarOpen(isOpen)}
            open={modalDeleteAvatarOpen}
          >
            <Modal.Button asChild>
              <button
                className={`absolute right-3 top-3`}
                onClick={() => setModalDeleteAvatarOpen(true)}
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
      <Modal onOpenChange={isOpen => setModalUpdateAvatarOpen(isOpen)} open={modalUpdateAvatarOpen}>
        <Modal.Button asChild>
          <Button onClick={() => setModalUpdateAvatarOpen(true)} variant={'outline'}>
            Add a Profile Photo
          </Button>
        </Modal.Button>
        <Modal.Content
          classNameChildrenWrapper={'px-[24px] !py-0'}
          classNameContent={'!max-w-[492px]'}
          classNameTitle={'text-H1-20'}
          classNameTitleContainer={'h-[59px]'}
          title={'Add a Profile Photo'}
        >
          <ImageCropper
            closeModal={() => setModalUpdateAvatarOpen(false)}
            updateAvatar={updateAvatarHandler}
          />
        </Modal.Content>
      </Modal>
    </div>
  )
}
