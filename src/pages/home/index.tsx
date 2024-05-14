import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'
import TabSwitcher from '@/components/ui/tabs/tabs'

const tabs = [
  {
    label: 'General information',
    value: 'general',
  },
  {
    label: 'Devices',
    value: 'devices',
  },
  {
    label: 'Account menagment',
    value: 'account',
  },
  {
    label: 'My services',
    value: 'services',
  },
]

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
      <div className={'w-[972px]'}>
        <TabSwitcher
          tabs={tabs}
          contentClassName={'p-[30px] bg-Light-100'}
          listClassName="py-[10px] px-[2px]"
        >
          <div className={'text-Dark-100'}>General</div>
          <div className={'text-Dark-100'}>Devices</div>
          <div className={'text-Dark-100'}>Other</div>
          <div className={'text-Dark-100'}>New</div>
        </TabSwitcher>
      </div>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
