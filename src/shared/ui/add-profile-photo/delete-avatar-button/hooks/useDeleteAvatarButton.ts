import { useState } from 'react'
import { useDeleteAvatar } from '@/shared/ui/add-profile-photo/delete-avatar-button/hooks/useDeleteAvatar'
import { toast } from '@/shared/ui/toast/use-toast'
import { useTranslation } from '@/shared'

export const useDeleteAvatarButton = () => {
  const { t } = useTranslation()
  const [modalDeleteAvatarOpen, setModalDeleteAvatarOpen] = useState(false)

  const { mutate: deleteAvatar } = useDeleteAvatar()

  const deleteAvatarHandler = () => {
    if (navigator.onLine) {
      deleteAvatar()
    } else {
      toast({
        description: t.pages.profile.deletePhoto.errors.offline,
        title: t.label.error,
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
