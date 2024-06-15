import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
    </PageWrapper>
  )
}

Home.getLayout = getBaseAppLayout
export default Home
