import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const Search = () => {
  return (
    <PageWrapper title={'Search | Instagram'}>
      <h1>Search</h1>
    </PageWrapper>
  )
}

Search.getLayout = getLayout
export default Search
