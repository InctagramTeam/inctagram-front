import { RequestItemProps } from '@/feature/search-users/model'
import { Flex, ReturnComponent, Text, UserAvatar } from '@/shared'
import Link from 'next/link'

export const RequestItem = ({ ava, name, nickname }: RequestItemProps): ReturnComponent => {
  return (
    <Flex gap={'12'}>
      <UserAvatar className={'h-[3rem] w-[3rem]'} src={ava} userName={name} />
      <div>
        <Text
          asComponent={Link}
          className={'block underline'}
          href={
            {
              // todo: данные с сервера для редиректа на страницу конкретного профиля
              // `${AppRoutes.PROFILE}/${data?.id}`
            }
          }
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
