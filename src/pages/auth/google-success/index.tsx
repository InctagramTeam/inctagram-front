import { useEffect } from 'react'

import { getAuthUrl } from '@/shared/config/url/api.config'
import { useRouter } from 'next/router'

const GoogleSuccess = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const { accessToken } = router.query

      if (accessToken) {
        localStorage.setItem('accessToken', JSON.stringify({ accessToken: accessToken as string }))
        // router.push('/home')
      }
      setTimeout(() => {
        router.push('/home')
      }, 100) // 100 мс
    } else {
      router.push(getAuthUrl('/sign-in'))
    }
  }, [router.isReady, router.query])

  return null
}

export default GoogleSuccess
