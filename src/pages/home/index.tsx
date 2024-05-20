import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/layout'
import { Recaptcha } from '@/shared/ui/recaptcha/recaptcha'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
      <Recaptcha error={false} expired={true} state={'default'} />
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
