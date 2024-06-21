import { getBaseAppLayout, PageWrapper, useTranslation } from '@/shared'
import { SearchUsers } from '@/feature'

const Search = () => {
  const { t } = useTranslation()
  return (
    <PageWrapper
      paddingBlock={'35px'}
      title={t.pages.search.metaTitle}
      description={t.pages.search.metaDescription}
    >
      <SearchUsers />
    </PageWrapper>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
