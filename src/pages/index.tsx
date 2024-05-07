import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import Link from 'next/link'
import instagram from 'public/inctagram.png'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

function Public() {
  return (
    <>
      <HeadMeta favicon={instagram.src} title={'Main | Instagram'} />
      <nav className={'navbar'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/messenger'}>Messenger</Link>
        <Link href={'/statistics'}>Statistics</Link>
        <Link href={'/search'}>Search</Link>
        <Link href={'/favorites'}>Favorites</Link>
      </nav>
      <Input />
      <br />
      <Checkbox />
    </>
  )
}

Public.getLayout = getLayout
export default Public
