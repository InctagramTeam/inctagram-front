import { PropsWithChildren, ReactElement } from 'react'

import { cn } from '@/utils/merge-cn'
import { Header, Navbar } from '@/widgets'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const links = [
  {
    disabled: false,
    href: '/home',
    name: 'Home',
  },
  {
    disabled: false,
    href: '/create',
    name: 'Create',
  },
  {
    disabled: false,
    href: '/profile',
    name: 'Profile',
  },
  {
    disabled: false,
    href: '/messenger',
    name: 'Messenger',
  },
  {
    disabled: false,
    href: '/search',
    name: 'Search',
  },
  {
    disabled: false,
    href: '/statistics',
    name: 'Statistics',
  },
  {
    disabled: true,
    href: '/favorites',
    name: 'Favorites',
  },
  {
    href: '/log-out',
    name: 'Log-out',
  },
]

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={cn(
          `flex flex-col justify-center pt-[var(--header-height)] w-full items-center mx-auto`,
          inter.variable
        )}
      >
        <Navbar links={links} />
        {children}
      </main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
// text-[color:var(--text-color)]
