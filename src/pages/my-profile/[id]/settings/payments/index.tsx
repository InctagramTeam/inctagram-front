import React from 'react'

import { TABS_VARIANTS, TabContent, getSettingsLayout } from '@/shared'

const Payments = () => {
  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.payments}>
      <div>Payments</div>
    </TabContent>
  )
}

Payments.getLayout = getSettingsLayout
export default Payments
