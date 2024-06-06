import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'

const PrivacyPolicy = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'PrivacyPolicy | Instagram'}>
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getAuthLayout
export default PrivacyPolicy
