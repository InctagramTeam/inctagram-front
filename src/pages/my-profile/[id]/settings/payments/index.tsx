import React from 'react'

import { TabContent, getSettingsLayout } from '@/shared'

const Payments = () => {
  return (
    <TabContent className={'flex'} value={'payments'}>
      <div>Payments</div>
    </TabContent>
  )
}

Payments.getLayout = getSettingsLayout
export default Payments
