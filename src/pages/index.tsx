import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import Menu from '@/components/ui/menu/menu'
import { Page } from '@/components/ui/page'
import Link from 'next/link'
import instagram from 'public/inctagram.png'

function Public() {
  return (
    <Page>
      <HeadMeta favicon={instagram.src} title={'Main | Instagram'} />
      <nav className={'navbar'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/messenger'}>Messenger</Link>
        <Link href={'/statistics'}>Statistics</Link>
        <Link href={'/search'}>Search</Link>
        <Link href={'/favorites'}>Favorites</Link>
      </nav>
      <Menu />
    </Page>
  )
}

Public.getLayout = getLayout
export default Public
