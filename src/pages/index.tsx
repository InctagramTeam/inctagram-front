import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { en, ru } from 'locales'

function Public() {
  const router = useRouter()

  const t = router.locale === 'en' ? en : ru

  return (
    <PageWrapper title={'Main | Instagram'}>
      <nav className={'navbar'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/messenger'}>Messenger</Link>
        <Link href={'/statistics'}>Statistics</Link>
        <Link href={'/search'}>Search</Link>
        <Link href={'/favorites'}>Favorites</Link>
      </nav>
    </PageWrapper>
  )
}

Public.getLayout = getLayout
export default Public
