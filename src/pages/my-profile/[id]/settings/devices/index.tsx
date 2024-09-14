import React from 'react'
import { getSettingsLayout, TabContent } from '@/shared'

const Devices = () => {
  return (
    <TabContent value={'devices'} className="flex">
      <div>Devices</div>
    </TabContent>
  )
}

Devices.getLayout = getSettingsLayout
export default Devices
