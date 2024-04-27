import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import Link from 'next/link'

export default function Public() {
  return (
    <PageWrapper title={'Main | Inctagram'}>
      <nav className={'navbar'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/messenger'}>Messenger</Link>
        <Link href={'/statistics'}>Statistics</Link>
        <Link href={'/search'}>Search</Link>
        <Link href={'/favorites'}>Favorites</Link>
        <button className={''}></button>
      </nav>
    </PageWrapper>
  )
}
