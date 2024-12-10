import React, { useState } from 'react'

import { Card, Text } from '@/shared'
import { CustomRadioGroup } from '@/shared/ui/radio-group/radio-group'

export const AccountTypeCard = () => {
  const accountTypeOptions = [
    { label: 'Personal', value: 'Personal' },
    { label: 'Business', value: 'Business' },
  ]

  const [current, setCurrent] = useState(accountTypeOptions[0].value) //TODO получить значение с сервера

  const handleChangeCurrentRadio = (radioValue: string) => {
    setCurrent(radioValue)
  }

  return (
    <div>
      <Text asComponent={'p'} variant={'H3'}>
        Account type:
      </Text>
      <Card className={'mt-1.5 w-full pb-1.5 pl-3 pt-1.5'}>
        <CustomRadioGroup
          onValueChange={handleChangeCurrentRadio}
          options={accountTypeOptions}
          value={current}
        />
      </Card>
    </div>
  )
}
