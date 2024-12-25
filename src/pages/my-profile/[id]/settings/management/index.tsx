import { useEffect, useState } from 'react'

import { AccountTypeCard } from '@/feature/payments/ui/account-type-card/account-type-card'
import { ManagementButtons } from '@/feature/payments/ui/management-buttons/management-buttons'
import { PaymentErrorModal } from '@/feature/payments/ui/payment-error-modal/payment-error-modal'
import { PaymentSuccessfulModal } from '@/feature/payments/ui/payment-successful-modal/payment-successful-modal'
import { SubscriptionCostsCard } from '@/feature/payments/ui/subscription-costs-card/subscription-costs-card'
import { TABS_VARIANTS, TabContent, getSettingsLayout, useTranslation } from '@/shared'
import { useRouter } from 'next/router'

export type AccountType = 'business' | 'personal'
export type AccountTypeOption = {
  label: 'Business' | 'Personal'
  value: AccountType
}
export type SubscriptionCostValue = '1 day' | '7 days' | '30 days'
export type SubscriptionCostsOption = {
  label: '$10 per 1 Day' | '$50 per 7 Day' | '$100 per month'
  value: SubscriptionCostValue
}

const Management = () => {
  const { t } = useTranslation()

  const accountTypeOptions: AccountTypeOption[] = [
    {
      label: t.pages.profile.settings.managementTab.accountTypeOptions.personal,
      value: 'personal',
    },
    {
      label: t.pages.profile.settings.managementTab.accountTypeOptions.business,
      value: 'business',
    },
  ] as AccountTypeOption[]
  const subscriptionCostsOptions: SubscriptionCostsOption[] = [
    {
      label: `$10 ${t.pages.profile.settings.managementTab.subscriptionCostsOptions.day}`,
      value: '1 day',
    },
    {
      label: `$50 ${t.pages.profile.settings.managementTab.subscriptionCostsOptions.week}`,
      value: '7 days',
    },
    {
      label: `$100 ${t.pages.profile.settings.managementTab.subscriptionCostsOptions.month}`,
      value: '30 days',
    },
  ] as SubscriptionCostsOption[]

  const router = useRouter()
  const { paymentStatus } = router.query
  const [openSuccessfulPaymentModal, setOpenSuccessfulPaymentModal] = useState(false)
  const [openErrorPaymentModal, setOpenErrorPaymentModal] = useState(false)

  const [currentAccountType, setCurrentAccountType] = useState<AccountType>(
    accountTypeOptions[0].value //TODO получить значение с сервера
  )
  const [currentValueSubscriptionCost, setCurrentValueSubscriptionCost] =
    useState<SubscriptionCostValue>(subscriptionCostsOptions[0].value) //TODO получить значение с сервера

  const handleChangeCurrentRadio = (radioValue: SubscriptionCostValue) => {
    setCurrentValueSubscriptionCost(radioValue)
  }

  useEffect(() => {
    if (paymentStatus === 'success') {
      setOpenSuccessfulPaymentModal(true)
    }
    if (paymentStatus === 'error') {
      setOpenErrorPaymentModal(true)
    }
    router.replace(router.pathname, undefined, { shallow: true })
  }, [paymentStatus, router])

  return (
    <>
      <TabContent className={'flex'} value={TABS_VARIANTS.management}>
        <div className={'mt-[20px] flex w-full flex-col'}>
          <AccountTypeCard
            accountTypeOptions={accountTypeOptions}
            currentAccountType={currentAccountType}
            setCurrentAccountType={setCurrentAccountType}
          />
          {currentAccountType === 'business' && (
            <>
              <SubscriptionCostsCard
                currentValueSubscriptionCost={currentValueSubscriptionCost}
                handleChangeCurrentRadio={handleChangeCurrentRadio}
                subscriptionCostsOptions={subscriptionCostsOptions}
              />

              <ManagementButtons currentValueSubscriptionCost={currentValueSubscriptionCost} />
            </>
          )}
        </div>
      </TabContent>
      {paymentStatus === 'success' && (
        <PaymentSuccessfulModal
          onOpenChange={setOpenSuccessfulPaymentModal}
          open={openSuccessfulPaymentModal}
        />
      )}
      {paymentStatus === 'error' && (
        <PaymentErrorModal onOpenChange={setOpenErrorPaymentModal} open={openErrorPaymentModal} />
      )}
    </>
  )
}

Management.getLayout = getSettingsLayout
export default Management
