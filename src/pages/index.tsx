import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { HomeNavLinks } from '@/widgets/main'

function HomePage() {
  return (
    <PageWrapper paddingBlock={'24px'} title={'Main | Instagram'}>
      <HomeNavLinks />
    </PageWrapper>
  )
}

HomePage.getLayout = getBaseAppLayout
export default HomePage
