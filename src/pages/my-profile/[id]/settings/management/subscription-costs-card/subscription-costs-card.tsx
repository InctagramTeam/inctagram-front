import { Card, Text } from '@/shared'
import { CustomRadioGroup } from '@/shared/ui/radio-group/radio-group'
import React, { useState } from 'react'

export const SubscriptionCostsCard = () => {
  const accountTypeOptions = [
    { label: '$10 per 1 Day', value: '10 per 1 Day' },
    { label: '$50 per 7 Day', value: '50 per 7 Day' },
    { label: '$100 per month', value: '100 per month' },
  ]

  const [current, setCurrent] = useState(accountTypeOptions[0].value)

  const handleChangeCurrentRadio = (radioValue: string) => {
    setCurrent(radioValue)
  }

  return (
    <div className={'mt-[42px]'}>
      <Text asComponent={'p'} variant={'H3'}>
        Your subscription costs:
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
