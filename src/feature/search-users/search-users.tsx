import { Input, ReturnComponent, Text, useTranslation } from '@/shared'
import { ChangeEvent, useState } from 'react'
import { RequestResult } from '@/feature/search-users/ui'
import { requests } from '@/feature/search-users/model'

export const SearchUsers = (): ReturnComponent => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <div className={'block w-full'}>
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
        className={'mb-[30px]'}
      />
      <Text asComponent={'h2'} variant={'bold_text_16'} mb={'17px'}>
        {t.pages.search.requests}
      </Text>
      <RequestResult items={requests} />
    </div>
  )
}
