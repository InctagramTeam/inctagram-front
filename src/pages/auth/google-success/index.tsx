import { useEffect } from 'react'

import { useRouter } from 'next/router'

const GoogleSuccess = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const { accessToken } = router.query

      if (accessToken) {
        localStorage.setItem('accessToken', JSON.stringify({ accessToken: accessToken as string }))
        router.push('/home')
      }
    }
  }, [router.isReady, router.query])

  return null
}

export default GoogleSuccess
