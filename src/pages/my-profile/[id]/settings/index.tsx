import { ProfileSettingsForm } from '@/feature/profile'
import { TabContent, TabSwitcher } from '@/shared'
import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/widgets/page-wrapper'
import { Tabs } from '@radix-ui/react-tabs'

const tabs = [
  {
    disabled: false,
    title: 'General information',
    value: 'general',
  },
  {
    disabled: false,
    title: 'Devices',
    value: 'devices',
  },
  {
    disabled: false,
    title: 'Account Management',
    value: 'management',
  },
  {
    disabled: false,
    title: 'My payments',
    value: 'payments',
  },
]
const SettingsPage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'Settings | Instagram'}>
      <TabSwitcher rootClassName="min-w-full" tabs={tabs} defaultValue="general">
        {tabs.map(tab => {
          return (
            <TabContent value={tab.value}>
              <ProfileSettingsForm onSubmit={() => {}} />
            </TabContent>
          )
        })}
      </TabSwitcher>
    </PageWrapper>
  )
}

SettingsPage.getLayout = getBaseAppLayout
export default SettingsPage
