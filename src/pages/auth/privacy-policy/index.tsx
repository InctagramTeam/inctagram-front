import { getAuthLayout, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets'
import { PrivacyPolice } from '@/feature'

const PrivacyPolicyPage = (): ReturnComponent => {
  const { t } = useTranslation()
  const { sm } = useResponsive()

  return (
    <PageWrapper
      className={'max-w-[1268px] justify-start'}
      description={t.pages.privacyPolice.metaDescription}
      paddingBlock={sm ? '16px' : '24px'}
      title={t.pages.privacyPolice.metaTitle}
    >
      <PrivacyPolice />
    </PageWrapper>
  )
}

PrivacyPolicyPage.getLayout = getAuthLayout
export default PrivacyPolicyPage
