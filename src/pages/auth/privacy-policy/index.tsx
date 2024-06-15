import { getAuthLayout, PageWrapper } from '@/shared/layouts'

const PrivacyPolicy = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'PrivacyPolicy | Instagram'}>
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getAuthLayout
export default PrivacyPolicy
