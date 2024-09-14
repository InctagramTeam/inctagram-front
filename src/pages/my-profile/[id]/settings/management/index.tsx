import React from 'react'
import { getSettingsLayout, TabContent } from '@/shared'

const Management = () => {
  return (
    <TabContent value={'management'} className="flex">
      <div>Management</div>
    </TabContent>
  )
}

Management.getLayout = getSettingsLayout
export default Management
