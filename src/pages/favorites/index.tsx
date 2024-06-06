import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const Favorites = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Favorites | Instagram'}>
      <h1>Favorites</h1>
    </PageWrapper>
  )
}

Favorites.getLayout = getBaseAppLayout
export default Favorites
