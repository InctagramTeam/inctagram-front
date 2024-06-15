import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const Search = () => {
  return (
    <PageWrapper title={'Search | Instagram'}>
      <h1>Search</h1>
    </PageWrapper>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
