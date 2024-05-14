import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'
import TabSwitcher from '@/components/ui/tabs/tabs'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
