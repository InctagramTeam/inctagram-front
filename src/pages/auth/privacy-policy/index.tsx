import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const PrivacyPolicy = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'PrivacyPolicy | Instagram'}>
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getLayout
export default PrivacyPolicy
