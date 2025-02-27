import { Card, Checkbox, Text, useTranslation } from '@/shared'
import React, { useState } from 'react'
import { CheckedState } from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

export const CurrentSubscriptionCard = () => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState<boolean>(false)

  const onCheckedChange = (value: CheckedState) => {
    setChecked(value === 'indeterminate' ? false : value)
  }
  const isPaymentLinked = false // TODO получить с сервера (чекбокс не активен, если пользователь не привязан ни к одной из платежных систем)

  return (
    <div>
      <Text asComponent={'p'} variant={'H3'}>
        {t.pages.profile.settings.managementTab.currentSubscription.cardTitle}
      </Text>
      <Card className={'mb-[19px] mt-[18px] flex w-full gap-x-12 pb-3 pl-6 pt-3'}>
        <div className={'flex-col'}>
          <Text variant={'regular-text-14'} className={'mb-3 block text-Light-900'}>
            {t.pages.profile.settings.managementTab.currentSubscription.expireAt}
          </Text>
          <Text variant={'medium-text-14'}>12.12.2022</Text>
          {/*TODO получить с сервера*/}
        </div>
        <div className={'flex-col'}>
          <Text variant={'regular-text-14'} className={'mb-3 block text-Light-900'}>
            {t.pages.profile.settings.managementTab.currentSubscription.nextPayment}
          </Text>
          <Text variant={'medium-text-14'}>13.02.2023</Text>
          {/*TODO получить с сервера*/}
        </div>
      </Card>
      <Checkbox
        // TODO получить с сервера
        className={'mb-[23px]'}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={!isPaymentLinked}
        label={
          <Text
            variant={'regular-text-14'}
            className={clsx('ml-2', !isPaymentLinked && 'text-Light-900/60')}
          >
            {t.pages.profile.settings.managementTab.currentSubscription.checkboxTitle}
          </Text>
        }
      />
    </div>
  )
}
