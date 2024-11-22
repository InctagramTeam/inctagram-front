import React from 'react'

import { TabContent, getSettingsLayout } from '@/shared'
import { TABS_VARIANTS } from '@/shared/constants/base'

const Devices = () => {
  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.devices}>
      <div>Devices</div>
    </TabContent>
  )
}

Devices.getLayout = getSettingsLayout
export default Devices
