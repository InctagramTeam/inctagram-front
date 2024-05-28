import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const Home = () => {

  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
