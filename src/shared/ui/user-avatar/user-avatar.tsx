import { Avatar, AvatarFallback, AvatarImage } from '@/shared'
import { ReturnComponent } from '@/shared'

type Props = {
  className?: string
  src?: string
  userName?: string
}
export const UserAvatar = ({ userName, className, src }: Props): ReturnComponent => {
  return (
    <Avatar className={className}>
      <AvatarImage alt={'user-avatar'} src={'src'} />
      <AvatarFallback className={'bg-Light-900'}>{userName?.[0] || 'U'}</AvatarFallback>
    </Avatar>
  )
}
