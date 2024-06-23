import { Avatar } from '@/shared/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/shared/ui/avatar/avatar'

export const UserAvatar = ({ classname }: { classname?: string }) => {
  return (
    <div className={`_Avatar-photo_ min-h-[160px] max-w-[160px]`}>
      <Avatar className={classname}>
        <AvatarImage alt={'user-avatar'} src={'https://github.com/shadcn.png'} />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
    </div>
  )
}