import { PropsWithChildren, ReactElement } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
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
    disabled: true,
    href: '/create',
    name: 'Create',
  },
  {
    disabled: false,
    href: '/My Profile',
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
    disabled: false,
    href: '/favorites',
    name: 'Favorites',
  },
  {
    disabled: true,
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
        <Sidebar links={links} />
        {children}
      </main>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
