import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const Search = () => {
  return (
    <PageWrapper title={'Search | Instagram'}>
      <h1>Search</h1>
    </PageWrapper>
  )
}

Search.getLayout = getLayout
export default Search
