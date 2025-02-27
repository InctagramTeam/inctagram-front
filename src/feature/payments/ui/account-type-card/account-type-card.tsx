import React from 'react'

import { AccountType, AccountTypeOption } from '@/feature/payments/types/payments.types'
import { Card, Text, useTranslation } from '@/shared'
import { CustomRadioGroup } from '@/shared/ui/radio-group/radio-group'

type Props = {
  accountTypeOptions: AccountTypeOption[]
  currentAccountType: AccountType
  setCurrentAccountType: (currentAccountType: AccountType) => void
}

export const AccountTypeCard = ({
  accountTypeOptions,
  currentAccountType,
  setCurrentAccountType,
}: Props) => {
  const { t } = useTranslation()

  const handleChangeCurrentRadio = (currentValue: AccountType) => {
    setCurrentAccountType(currentValue)
  }

  return (
    <div>
      <Text asComponent={'p'} variant={'H3'}>
        {t.pages.profile.settings.managementTab.accountType}
      </Text>
      <Card className={'mt-[18px] w-full pb-1.5 pl-3 pt-1.5'}>
        <CustomRadioGroup
          onValueChange={handleChangeCurrentRadio}
          options={accountTypeOptions}
          value={currentAccountType}
        />
      </Card>
    </div>
  )
}
