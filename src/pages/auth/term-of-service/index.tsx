import { PageWrapper, getAuthLayout, useTranslation } from '@/shared'

const TermOfServicePage = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      description={t.pages.termsOfService.metaDescription}
      paddingBlock={'72px'}
      title={t.pages.termsOfService.metaTitle}
    >
      <h1>TermOfService</h1>
    </PageWrapper>
  )
}

TermOfServicePage.getLayout = getAuthLayout
export default TermOfServicePage
