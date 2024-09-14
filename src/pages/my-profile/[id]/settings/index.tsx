import { ProfileAvatarForm, ProfileInfoForm } from '@/feature/profile'
import { TabContent, TabSwitcher } from '@/shared'
import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/widgets/page-wrapper'
import { TABS } from '@/shared/constants/base'

const SettingsPage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'Settings | Instagram'}>
      <TabSwitcher rootClassName="min-w-full" tabs={TABS} defaultValue="general">
        {TABS.map(tab => {
          return (
            <TabContent value={tab.value} key={tab.value + new Date()} className="flex">
              <ProfileAvatarForm onSubmit={() => {}} />
              <ProfileInfoForm className="grow" onSubmit={() => {}} />
            </TabContent>
          )
        })}
      </TabSwitcher>
    </PageWrapper>
  )
}

SettingsPage.getLayout = getBaseAppLayout
export default SettingsPage
