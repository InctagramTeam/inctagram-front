import { useState } from 'react'
import { useUpdateAvatar } from '@/shared/ui/add-profile-photo/add-avatar-button/hooks/useUpdateAvatar'
import { toast } from '@/shared/ui/toast/use-toast'
import { useTranslation } from '@/shared'

export const useAddAvatarButton = () => {
  const { t } = useTranslation()

  const [modalUpdateAvatarOpen, setModalUpdateAvatarOpen] = useState(false)

  const { mutate: updateAvatar } = useUpdateAvatar()

  const updateAvatarHandler = (formData: FormData) => {
    if (navigator.onLine) {
      updateAvatar(formData)
    } else {
      toast({
        description: t.pages.profile.addProfilePhoto.errors.offline,
        title: t.label.error,
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
