import authApi from '@/feature/auth/api/auth-api'
import { AppRoutes } from '@/shared'
import saveToLocalStorage from '@/shared/lib/utils/locale-storage/save-local-storage'
import { useRouter } from 'next/router'

export const handleSignInSuccess = async (router: ReturnType<typeof useRouter>) => {
  const user = await authApi.me()

  if (user) {
    saveToLocalStorage('user', user)

    await fetch(`/api/setUserIdCookie?userId=${user.id}`, {
      method: 'GET',
    })

    if (user.profile) {
      await router.replace(AppRoutes.PROFILE + user.id)
    } else {
      await router.replace(AppRoutes.PROFILE + user.id + AppRoutes.PROFILE_SETTINGS + '/general')
    }
  }
}
