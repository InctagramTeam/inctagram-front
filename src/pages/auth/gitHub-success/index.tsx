import { useEffect } from 'react'

import { useSingUpInGitHub } from '@/feature/auth/api/hooks/useSingUpInGitHub'
import { useRouter } from 'next/router'

const GitHubSuccess = () => {
  const router = useRouter()
  const { mutate } = useSingUpInGitHub()

  useEffect(() => {
    if (router.isReady) {
      const { code } = router.query

      if (typeof code === 'string') {
        mutate(code)
      }
    }
  }, [router.isReady, router.query])

  return null
}

export default GitHubSuccess
