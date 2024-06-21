import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const SettingsPage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'Settings | Instagram'}>
      <h1>Settings</h1>
    </PageWrapper>
  )
}

SettingsPage.getLayout = getBaseAppLayout
export default SettingsPage
