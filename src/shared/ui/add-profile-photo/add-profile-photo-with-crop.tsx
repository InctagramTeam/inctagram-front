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
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'

export const AddProfilePhotoWithCrop = () => {
  const [modalUpdateAvatarOpen, setModalUpdateAvatarOpen] = useState(false)
  const [modalDeleteAvatarOpen, setModalDeleteAvatarOpen] = useState(false)

  const queryClient = useQueryClient()

  const { data: profile } = useQuery({ queryKey: ['me'], queryFn: authApi.me })

  const { data: avatar } = useQuery({
    queryFn: () => userService.getAvatar(Number(profile?.id)),
    queryKey: ['avatar'],
    enabled: !!profile?.id,
  })

  const { mutate: deleteAvatar } = useMutation({
    mutationFn: userService.deleteAvatar,
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
  })

  const { mutate: updateAvatar } = useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updateAvatar(formData)
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
    <div className={'flex flex-col gap-y-6'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar
          className={`h-full w-full`}
          bgColor={'bg-Dark-500'}
          children={<ImageOutlineIcon />}
          src={avatar?.url || ''}
        />
        {avatar?.url && (
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
              classNameChildrenWrapper={'px-[24px] !py-0'}
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
          classNameChildrenWrapper={'px-[24px] !py-0'}
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
