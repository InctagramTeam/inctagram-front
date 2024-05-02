import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const Home = () => {
  return (
    <>
      <HeadMeta title={'Home'} />
      <h1>Home</h1>
    </>
  )
}

Home.getLayout = getLayout
export default Home
