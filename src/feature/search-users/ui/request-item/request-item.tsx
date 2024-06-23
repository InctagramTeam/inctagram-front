import { RequestItemProps } from '@/feature/search-users/model'
import { Flex, ReturnComponent, Text, UserAvatar } from '@/shared'
import Link from 'next/link'

export const RequestItem = ({ ava, name, nickname }: RequestItemProps): ReturnComponent => {
  return (
    <Flex gap={'12'}>
      <UserAvatar src={ava} userName={name} className={'h-[3rem] w-[3rem]'} />
      <div>
        <Text
          asComponent={Link}
          href={
            {
              // todo: данные с сервера для редиректа на страницу конкретного профиля
              // `${AppRoutes.PROFILE}/${data?.id}`
            }
          }
          className={'block underline'}
          variant={'bold_text_14'}
        >
          {nickname}
        </Text>
        <Text className={'block text-Light-900'} variant={'regular-text-14'}>
          {name}
        </Text>
      </div>
    </Flex>
  )
}
