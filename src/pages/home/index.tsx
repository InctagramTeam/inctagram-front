import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const Home = () => {
  return (
    <Page>
      <HeadMeta title={'Home'} />
      <h1>Home</h1>
    </Page>
  )
}

Home.getLayout = getLayout
export default Home
