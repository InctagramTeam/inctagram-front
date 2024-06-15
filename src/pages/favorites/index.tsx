import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'

const Favorites = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'Favorites | Instagram'}>
      <h1>Favorites</h1>
    </PageWrapper>
  )
}

Favorites.getLayout = getBaseAppLayout
export default Favorites
