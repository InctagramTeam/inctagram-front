import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const SearchPage = () => {
  return (
    <PageWrapper title={'Search | Instagram'}>
      <h1>Search</h1>
    </PageWrapper>
  )
}

SearchPage.getLayout = getBaseAppLayout
export default SearchPage
