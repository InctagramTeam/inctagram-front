import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { Home } from '@/widgets/home/home'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

function HomePage() {
  return (
    <PageWrapper title={'Main | Instagram'}>
      <Home />
    </PageWrapper>
  )
}

HomePage.getLayout = getLayout
export default HomePage
