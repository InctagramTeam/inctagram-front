'use client'
import { useEffect, useState } from 'react'

import {
  getAccountTypeOptions,
  getSubscriptionCostsOptions,
} from '@/feature/payments/constants/payments.constants'
import { AccountType, SubscriptionCostValue } from '@/feature/payments/types/payments.types'
import { AccountTypeCard } from '@/feature/payments/ui/account-type-card/account-type-card'
import { ManagementButtons } from '@/feature/payments/ui/management-buttons/management-buttons'
import { PaymentErrorModal } from '@/feature/payments/ui/payment-error-modal/payment-error-modal'
import { PaymentSuccessfulModal } from '@/feature/payments/ui/payment-successful-modal/payment-successful-modal'
import { SubscriptionCostsCard } from '@/feature/payments/ui/subscription-costs-card/subscription-costs-card'
import { TABS_VARIANTS, TabContent, getSettingsLayout, useTranslation } from '@/shared'
import { useRouter } from 'next/router'
import { CurrentSubscriptionCard } from '@/feature/payments/ui/current-subscription-card/current-subscription-card'

const Management = () => {
  const { t } = useTranslation()

  const accountTypeOptions = getAccountTypeOptions(t)
  const subscriptionCostsOptions = getSubscriptionCostsOptions(t)

  const router = useRouter()
  const { paymentStatus } = router.query

  const [openSuccessfulPaymentModal, setOpenSuccessfulPaymentModal] = useState(false)
  const [openErrorPaymentModal, setOpenErrorPaymentModal] = useState(false)
  const [currentAccountType, setCurrentAccountType] = useState<AccountType>(
    accountTypeOptions[0].value //TODO получить значение с сервера
  )
  const [currentValueSubscriptionCost, setCurrentValueSubscriptionCost] =
    useState<SubscriptionCostValue>(subscriptionCostsOptions[0].value) //TODO получить значение с сервера

  const handleSubscriptionCostChange = (radioValue: SubscriptionCostValue) => {
    setCurrentValueSubscriptionCost(radioValue)
  }

  useEffect(() => {
    if (paymentStatus === 'success') {
      setOpenSuccessfulPaymentModal(true)
    } else if (paymentStatus === 'cancel') {
      setOpenErrorPaymentModal(true)
    }
  }, [paymentStatus])

  return (
    <>
      <TabContent className={'flex'} value={TABS_VARIANTS.management}>
        <div className={'mt-[20px] flex w-full flex-col'}>
          <CurrentSubscriptionCard />

          <AccountTypeCard
            accountTypeOptions={accountTypeOptions}
            currentAccountType={currentAccountType}
            setCurrentAccountType={setCurrentAccountType}
          />
          {currentAccountType === 'business' && (
            <>
              <SubscriptionCostsCard
                currentValueSubscriptionCost={currentValueSubscriptionCost}
                handleChangeCurrentRadio={handleSubscriptionCostChange}
                subscriptionCostsOptions={subscriptionCostsOptions}
              />

              <ManagementButtons currentValueSubscriptionCost={currentValueSubscriptionCost} />
            </>
          )}
        </div>
      </TabContent>
      {openSuccessfulPaymentModal && (
        <PaymentSuccessfulModal
          onOpenChange={setOpenSuccessfulPaymentModal}
          open={openSuccessfulPaymentModal}
        />
      )}
      {openErrorPaymentModal && (
        <PaymentErrorModal onOpenChange={setOpenErrorPaymentModal} open={openErrorPaymentModal} />
      )}
    </>
  )
}

Management.getLayout = getSettingsLayout
export default Management
