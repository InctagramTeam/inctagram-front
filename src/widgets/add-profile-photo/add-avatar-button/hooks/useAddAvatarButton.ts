import { useTranslation } from '@/shared'
import { toast } from '@/shared/ui/toast/use-toast'
import { useUpdateAvatar } from '@/widgets/add-profile-photo/add-avatar-button/hooks/useUpdateAvatar'

export const useAddAvatarButton = () => {
  const { t } = useTranslation()

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

  return { updateAvatarHandler }
}
