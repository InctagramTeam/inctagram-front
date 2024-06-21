import { RequestItemProps } from '@/feature/search-users/model'
import { Flex, ReturnComponent, Text } from '@/shared'
import { Avatar } from '@/shared/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/shared/ui/avatar/avatar'

export const RequestItem = ({ ava, name, nickname }: RequestItemProps): ReturnComponent => {
  return (
    <Flex gap={'12'}>
      <Avatar className={'h-[3rem] w-[3rem]'}>
        <AvatarImage alt={'user-avatar'} src={ava} />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
      <div>
        <Text className={'block underline'} variant={'bold_text_14'}>
          {nickname}
        </Text>
        <Text className={'block text-Light-900'} variant={'regular-text-14'}>
          {name}
        </Text>
      </div>
    </Flex>
  )
}
