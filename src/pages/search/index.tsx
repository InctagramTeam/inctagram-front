import { SearchUsers } from '@/feature'
import { getBaseAppLayout, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'

const Search = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      description={t.pages.search.metaDescription}
      paddingBlock={'35px'}
      title={t.pages.search.metaTitle}
    >
      <SearchUsers />
    </PageWrapper>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
