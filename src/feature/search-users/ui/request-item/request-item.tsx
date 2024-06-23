import { RequestItemProps } from '@/feature/search-users/model'
import { Flex, ReturnComponent, Text, UserAvatar } from '@/shared'

export const RequestItem = ({ ava, name, nickname }: RequestItemProps): ReturnComponent => {
  return (
    <Flex gap={'12'}>
      <UserAvatar src={ava} userName={name} className={'h-[3rem] w-[3rem]'} />
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
