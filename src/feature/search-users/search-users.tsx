import { ChangeEvent, useState } from 'react'

import { requests } from '@/feature/search-users/model'
import { RequestResult } from '@/feature/search-users/ui'
import {
  EMPTY_STRING,
  Input,
  MD_BREAKPOINT,
  ReturnComponent,
  SM_BREAKPOINT,
  Text,
  useResponsive,
  useTranslation,
} from '@/shared'

export const SearchUsers = (): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()
  const [value, setValue] = useState(EMPTY_STRING)
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  if (width === null) {
    return null
  }

  const isMobile = width < MD_BREAKPOINT

  return (
    <div className={'block w-full'}>
      <Text
        asComponent={'h1'}
        className={isMobile ? 'sr-only' : undefined}
        mb={'13px'}
        variant={'H1'}
      >
        {t.pages.search.title}
      </Text>
      <Input
        className={isMobile ? 'mb-[18px]' : 'mb-[30px]'}
        label={'Enter name of user'}
        labelProps={{ className: 'sr-only' }}
        name={'search'}
        onChange={changeValueHandler}
        placeholder={'Search'}
        type={'search'}
        value={value}
      />
      <Text asComponent={'h2'} mb={'18px'} variant={'bold_text_16'}>
        {t.pages.search.requests}
      </Text>
      <RequestResult items={requests} />
    </div>
  )
}
