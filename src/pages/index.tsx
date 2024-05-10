import { getLayout } from '@/components/Layout/Layout'
import Link from 'next/link'
import { PageWrapper } from '@/components/ui/page'

function Public() {
  return (
    <PageWrapper title={'Main | Instagram'} className={`w-full`}>
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
