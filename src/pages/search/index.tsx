import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const Search = () => {
  return (
    <>
      <HeadMeta title={'Search'} />
      <h1>Search</h1>
    </>
  )
}

Search.getLayout = getLayout
export default Search
