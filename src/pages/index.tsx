import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import Link from 'next/link'
import inctagram from 'public/inctagram.png'

function Public() {
  return (
    <>
      <HeadMeta favicon={inctagram.src} title={'Main | Inctagram'} />
      <nav className={'navbar'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/messenger'}>Messenger</Link>
        <Link href={'/statistics'}>Statistics</Link>
        <Link href={'/search'}>Search</Link>
        <Link href={'/favorites'}>Favorites</Link>
        <Link href={'/favorites'}>Favorites</Link>
      </nav>
    </>
  )
}

Public.getLayout = getLayout
export default Public
