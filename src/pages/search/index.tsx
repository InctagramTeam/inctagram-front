import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const Search = () => {
  return (
    <PageWrapper title={'Search | Instagram'}>
      <h1>Search</h1>
    </PageWrapper>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
