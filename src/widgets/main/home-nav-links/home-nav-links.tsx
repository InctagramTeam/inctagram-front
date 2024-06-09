import Link from 'next/link'

export const HomeNavLinks = () => {
  return (
    <nav className={'navbar'}>
      <Link href={'/home'}>Home</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/messenger'}>Messenger</Link>
      <Link href={'/statistics'}>Statistics</Link>
      <Link href={'/search'}>Search</Link>
      <Link href={'/favorites'}>Favorites</Link>
    </nav>
  )
}
