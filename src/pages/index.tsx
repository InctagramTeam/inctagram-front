import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { Home } from '@/widgets/home/home'

function HomePage() {
  return (
    <PageWrapper title={'Main | Instagram'}>
      <Home />
    </PageWrapper>
  )
}

HomePage.getLayout = getLayout
export default HomePage
