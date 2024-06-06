import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
