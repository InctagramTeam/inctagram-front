import { ReactNode, useEffect, useState } from 'react'

import { User } from '@/entities/user'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  ReturnComponent,
  Text,
  cn,
  useTranslation,
} from '@/shared'
import { MoreIcon } from '@/shared/assets/icons'
import EditIcon from '@/shared/assets/icons/EditIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import { getStoreLocalStorage } from '@/shared/lib/utils'
import { DropdownItemWithIcon } from '@/shared/ui/dropdown-menu/item-with-icon'

export const AvatarUser = ({
  classNameWrapper,
  actions,
}: {
  actions?: ReactNode
  classNameWrapper?: string
}): ReturnComponent => {
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState<string | undefined>(undefined)
  const { t } = useTranslation()

  useEffect(() => {
    const user: User = getStoreLocalStorage('user')

    if (user) {
      setUserName(user.userName)
      //user.profile.url && setAvatar(user.profile.url)
    }
  }, [])

  return (
    <div className={cn('mb-[24px] flex items-center gap-[12px]', classNameWrapper)}>
      <Avatar>
        <AvatarImage alt={t.layout.alts.userAvatar} height={36} size={36} src={''} width={36} />
        <AvatarFallback className={'bg-Light-900'}>{userName?.[0] || 'U'}</AvatarFallback>
      </Avatar>
      {userName && <Text variant={'H3'}>{userName}</Text>}
      {actions}
    </div>
  )
}
