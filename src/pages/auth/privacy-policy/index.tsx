import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const PrivacyPolicy = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'PrivacyPolicy | Instagram'}>
      <h1>PrivacyPolicy</h1>
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getLayout
export default PrivacyPolicy
