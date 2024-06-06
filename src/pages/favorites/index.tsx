import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const Favorites = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Favorites | Instagram'}>
      <h1>Favorites</h1>
    </PageWrapper>
  )
}

Favorites.getLayout = getLayout
export default Favorites
