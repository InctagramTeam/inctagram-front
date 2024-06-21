import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const FavoritesPage = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'Favorites | Instagram'}>
      <h1>Favorites</h1>
    </PageWrapper>
  )
}

FavoritesPage.getLayout = getBaseAppLayout
export default FavoritesPage
