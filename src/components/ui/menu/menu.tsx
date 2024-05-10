import {
  Home,
  HomeOutline,
  MessageCircle,
  MessageCircleOutline,
  Person,
  PersonOutline,
  PlusSquare,
  PlusSquareOutline,
  Search,
  SearchOutline,
} from '@/assets/icons'
import { getLayout } from '@/components/Layout/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Menu = () => {
  const router = useRouter()
  const isActive = (href: string) => router.pathname === href

  return (
    <div
      className={
        'flex items-center justify-around w-[360px] h-[60px] border border-Dark-300 bg-Dark-700 '
      }
    >
      <Link href={'/home'}>
        {isActive('/home') ? <Home className={'text-[#397DF6]'} /> : <HomeOutline />}
      </Link>
      <Link href={'/publication'}>
        {isActive('/publication') ? (
          <PlusSquare className={'text-[#397DF6]'} />
        ) : (
          <PlusSquareOutline />
        )}
      </Link>
      <Link href={'/messenger'}>
        {isActive('/messenger') ? (
          <MessageCircle className={'text-[#397DF6]'} />
        ) : (
          <MessageCircleOutline />
        )}
      </Link>
      <Link href={'/search'}>
        {isActive('/search') ? <Search className={'text-[#397DF6]'} /> : <SearchOutline />}
      </Link>
      <Link href={'/profile'}>
        {isActive('/profile') ? <Person className={'text-[#397DF6]'} /> : <PersonOutline />}
      </Link>
    </div>
  )
}

Menu.getlayout = getLayout
export default Menu
