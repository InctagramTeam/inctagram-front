'use client'
import { ComponentPropsWithoutRef, useState } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import { MobileSidebarItem } from '@/widgets/sidebar'

import { NavLink } from '../../model/types/navlink.types'

type Props = {
  className?: string
  links: NavLink[]
} & ComponentPropsWithoutRef<'aside'>

export const MobileSidebar = ({ className, links }: Props): ReturnComponent => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <aside className={'w-full'}>
      <nav
        className={cn(
          className,
          'fixed flex justify-center items-end h-[660px] border-r-[1px]' + 'border-r-Dark-300'
        )}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        {links.map(link => (
          <MobileSidebarItem key={link.href} link={link} />
        ))}
      </nav>
    </aside>
  )
}
MobileSidebar.displayName = 'MobileSidebar'
