import { getBaseAppLayout } from '@/shared/layouts'
import { PageWrapper } from '@/widgets/page-wrapper'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
    </PageWrapper>
  )
}

Home.getLayout = getBaseAppLayout
export default Home
