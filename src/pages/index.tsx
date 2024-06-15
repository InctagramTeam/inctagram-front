import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
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
