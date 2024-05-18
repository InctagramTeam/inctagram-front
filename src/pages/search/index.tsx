import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Menu } from '@/components/ui/menu/menu'
import { Page } from '@/components/ui/page'

const Search = () => {
  return (
    <Page>
      <HeadMeta title={'Search'} />
      <h1>Search</h1>
    </Page>
  )
}

Search.getLayout = getLayout
export default Search
