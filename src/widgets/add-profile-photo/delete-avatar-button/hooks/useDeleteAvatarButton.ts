import { useState } from 'react'

import { useTranslation } from '@/shared'
import { toast } from '@/shared/ui/toast/use-toast'
import { useDeleteAvatar } from '@/widgets/add-profile-photo/delete-avatar-button/hooks/useDeleteAvatar'

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
