import {
  PageWrapper,
  getBaseAppLayout,
  useTranslation,
  Text,
  Input,
  Flex,
  ReturnComponent,
} from '@/shared'
import { ChangeEvent, useState } from 'react'
import { Avatar } from '@/shared/ui/avatar'
import { AvatarFallback, AvatarImage } from '@/shared/ui/avatar/avatar'

const Search = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  return (
    <PageWrapper
      paddingBlock={'35px'}
      title={t.pages.search.metaTitle}
      description={t.pages.search.metaDescription}
      className={'block'}
    >
      <Text asComponent={'h1'} variant={'H1'} mb={'13px'}>
        {t.pages.search.title}
      </Text>
      <Input
        type={'search'}
        placeholder={'Search'}
        name={'search'}
        label={'Enter name of user'}
        value={value}
        onChange={changeValueHandler}
        labelProps={{ className: 'sr-only' }}
        divContainerProps={{ className: 'mb-[30px]' }}
      />
      <Text asComponent={'h2'} variant={'bold_text_16'} mb={'17px'}>
        {t.pages.search.requests}
      </Text>
      <RequestItems items={requests} />
    </PageWrapper>
  )
}

type RequestItemProps = {
  ava: string
  nickname: string
  name: string
}

const requests: RequestItemProps[] = [
  { ava: 'https://github.com/shadcn.png', name: 'Ekaterina Ivanova', nickname: 'Ekat_Ivanova' },
  { ava: 'https://github.com/shadcn.png', name: 'Ekaterina Ivanova', nickname: 'Ekat_Ivanova' },
  { ava: 'https://github.com/shadcn.png', name: 'Ekaterina Ivanova', nickname: 'Ekat_Ivanova' },
  { ava: 'https://github.com/shadcn.png', name: 'Ekaterina Ivanova', nickname: 'Ekat_Ivanova' },
  { ava: 'https://github.com/shadcn.png', name: 'Ekaterina Ivanova', nickname: 'Ekat_Ivanova' },
]

type RequestItemsProps = {
  items: RequestItemProps[]
}

const RequestItems = ({ items }: RequestItemsProps): ReturnComponent => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.nickname}>
          <RequestItem {...item} />
        </li>
      ))}
    </ul>
  )
}

export const RequestItem = ({ ava, nickname, name }: RequestItemProps): ReturnComponent => {
  return (
    <Flex gap={'12'}>
      <Avatar className={''}>
        <AvatarImage alt={'user-avatar'} src={ava} />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
      <div>
        <Text> {nickname} </Text>
        <Text> {name} </Text>
      </div>
    </Flex>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
