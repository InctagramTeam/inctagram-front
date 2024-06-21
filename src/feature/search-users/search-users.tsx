import { ChangeEvent, useState } from 'react'

import { requests } from '@/feature/search-users/model'
import { RequestResult } from '@/feature/search-users/ui'
import { Input, ReturnComponent, Text, useTranslation } from '@/shared'

export const SearchUsers = (): ReturnComponent => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <div className={'block w-full'}>
      <Text asComponent={'h1'} mb={'13px'} variant={'H1'}>
        {t.pages.search.title}
      </Text>
      <Input
        className={'mb-[30px]'}
        label={'Enter name of user'}
        labelProps={{ className: 'sr-only' }}
        name={'search'}
        onChange={changeValueHandler}
        placeholder={'Search'}
        type={'search'}
        value={value}
      />
      <Text asComponent={'h2'} mb={'17px'} variant={'bold_text_16'}>
        {t.pages.search.requests}
      </Text>
      <RequestResult items={requests} />
    </div>
  )
}
