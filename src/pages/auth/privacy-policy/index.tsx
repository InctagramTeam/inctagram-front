import { PageWrapper, getAuthLayout, useTranslation } from '@/shared'

const PrivacyPolicy = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      paddingBlock={'72px'}
      title={t.pages.privacyPolice.metaTitle}
      description={t.pages.privacyPolice.metaDescription}
    >
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getAuthLayout
export default PrivacyPolicy
