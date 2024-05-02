import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const Favorites = () => {
  return (
    <>
      <HeadMeta title={'Favorites'} />
      <h1>Favorites</h1>
    </>
  )
}

Favorites.getLayout = getLayout
export default Favorites
