import { Flex, ReturnComponent, Text } from '@/shared'
import { Avatar } from '@/shared/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/shared/ui/avatar/avatar'
import { RequestItemProps } from '@/feature/search-users/model'

export const RequestItem = ({ ava, nickname, name }: RequestItemProps): ReturnComponent => {
  return (
    <Flex gap={'12'}>
      <Avatar className={'h-[3rem] w-[3rem]'}>
        <AvatarImage alt={'user-avatar'} src={ava} />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
      <div>
        <Text variant={'bold_text_14'} className={'block underline'}>
          {nickname}
        </Text>
        <Text variant={'regular-text-14'} className={'block text-Light-900'}>
          {name}
        </Text>
      </div>
    </Flex>
  )
}
