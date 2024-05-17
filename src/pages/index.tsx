import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'
import Link from 'next/link'

function Public() {
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
