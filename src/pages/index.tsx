import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { HomeNavLinks } from '@/widgets/main'

function HomePage() {
  return (
    <PageWrapper title={'Main | Instagram'} paddingTop={'24px'}>
      <HomeNavLinks />
    </PageWrapper>
  )
}

HomePage.getLayout = getBaseAppLayout
export default HomePage
