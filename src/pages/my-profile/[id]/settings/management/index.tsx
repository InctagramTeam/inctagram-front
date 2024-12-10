import React from 'react'

import { AccountTypeCard } from '@/pages/my-profile/[id]/settings/management/account-type-card/account-type-card'
import { ManagementButtons } from '@/pages/my-profile/[id]/settings/management/management-buttons'
import { SubscriptionCostsCard } from '@/pages/my-profile/[id]/settings/management/subscription-costs-card/subscription-costs-card'
import { TABS_VARIANTS, TabContent, getSettingsLayout } from '@/shared'

const Management = () => {
  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.management}>
      <div className={'mt-[20px] flex w-full flex-col'}>
        <AccountTypeCard />
        <SubscriptionCostsCard />
        <ManagementButtons />
      </div>
    </TabContent>
  )
}

Management.getLayout = getSettingsLayout
export default Management
