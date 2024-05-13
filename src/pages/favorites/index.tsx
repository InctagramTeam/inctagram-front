import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const Favorites = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Favorites | Instagram'}>
      <h1>Favorites</h1>
    </PageWrapper>
  )
}

Favorites.getLayout = getLayout
export default Favorites
