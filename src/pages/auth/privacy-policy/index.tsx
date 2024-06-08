import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const PrivacyPolicy = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'PrivacyPolicy | Instagram'}>
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getAuthLayout
export default PrivacyPolicy
