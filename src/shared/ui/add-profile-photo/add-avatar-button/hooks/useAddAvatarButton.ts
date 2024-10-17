import { useState } from 'react'
import { useUpdateAvatar } from '@/shared/ui/add-profile-photo/add-avatar-button/hooks/useUpdateAvatar'
import { toast } from '@/shared/ui/toast/use-toast'

export const useAddAvatarButton = () => {
  const [modalUpdateAvatarOpen, setModalUpdateAvatarOpen] = useState(false)

  const { mutate: updateAvatar } = useUpdateAvatar()

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

  return {
    modalUpdateAvatarOpen,
    setModalUpdateAvatarOpen,
    updateAvatarHandler,
  }
}
