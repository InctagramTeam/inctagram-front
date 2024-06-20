import { PageWrapper, getAuthLayout, useTranslation } from '@/shared'

const TermOfService = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      paddingBlock={'72px'}
      title={t.pages.termsOfService.metaTitle}
      description={t.pages.termsOfService.metaDescription}
    >
      <h1>TermOfService</h1>
    </PageWrapper>
  )
}

TermOfService.getLayout = getAuthLayout
export default TermOfService
