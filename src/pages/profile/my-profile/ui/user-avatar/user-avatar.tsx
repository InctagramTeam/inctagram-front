import { Avatar } from '@/shared/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/shared/ui/avatar/avatar'

export const UserAvatar = ({ classname }: { classname?: string }) => {
  return (
    <Avatar className={classname}>
      <AvatarImage alt={'user-avatar'} src={'https://github.com/shadcn.png'} />
      <AvatarFallback>USER</AvatarFallback>
    </Avatar>
  )
}
