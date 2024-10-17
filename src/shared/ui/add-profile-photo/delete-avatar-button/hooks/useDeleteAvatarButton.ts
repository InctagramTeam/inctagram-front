import { useState } from 'react'
import { useDeleteAvatar } from '@/shared/ui/add-profile-photo/delete-avatar-button/hooks/useDeleteAvatar'
import { toast } from '@/shared/ui/toast/use-toast'

export const useDeleteAvatarButton = () => {
  const [modalDeleteAvatarOpen, setModalDeleteAvatarOpen] = useState(false)

  const { mutate: deleteAvatar } = useDeleteAvatar()

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

  return {
    modalDeleteAvatarOpen,
    setModalDeleteAvatarOpen,
    deleteAvatarHandler,
  }
}
