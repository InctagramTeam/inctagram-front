import { getBaseAppLayout } from '@/shared/layouts'
import { PageWrapper } from '@/widgets/page-wrapper'

const FavoritesPage = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'Favorites | Instagram'}>
      <h1>Favorites</h1>
    </PageWrapper>
  )
}

FavoritesPage.getLayout = getBaseAppLayout
export default FavoritesPage
