import React from 'react'
import { getSettingsLayout, TabContent } from '@/shared'

const Payments = () => {
  return (
    <TabContent value={'payments'} className="flex">
      <div>Payments</div>
    </TabContent>
  )
}

Payments.getLayout = getSettingsLayout
export default Payments
