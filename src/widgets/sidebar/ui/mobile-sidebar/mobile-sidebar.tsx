'use client'
import { ComponentPropsWithoutRef, useState } from 'react'

import { ReturnComponent } from '@/shared/types'
import { getMobileLinks } from '@/widgets/sidebar/model/ulils/sidebar-links'
import { clsx } from 'clsx'

import { MobileSidebarItem } from './mobile-sidebar-item'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const MobileSidebar = ({ className }: Props): ReturnComponent => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <aside>
      <nav
        className={clsx(
          className,
          `fixed bottom-0 left-0 right-0 flex h-[60px] w-full justify-center border-t-[1px] border-t-Dark-300 pt-4 shadow-sm`
        )}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <ul className={'flex gap-[36px]'}>
          {getMobileLinks().map(link => (
            <li key={link.href}>
              <MobileSidebarItem link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
