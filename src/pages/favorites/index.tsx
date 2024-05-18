import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const Favorites = () => {
  return (
    <Page>
      <HeadMeta title={'Favorites'} />
      <h1>Favorites</h1>
    </Page>
  )
}

Favorites.getLayout = getLayout
export default Favorites
