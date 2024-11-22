import React from 'react'

import { TABS_VARIANTS, TabContent, getSettingsLayout } from '@/shared'

const Management = () => {
  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.management}>
      <div>Management</div>
    </TabContent>
  )
}

Management.getLayout = getSettingsLayout
export default Management
