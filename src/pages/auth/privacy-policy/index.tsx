import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const PrivacyPolicy = () => {
  return (
    <Page paddingTop={'72px'}>
      <HeadMeta title={'PrivacyPolicy'} />
      <h1>PrivacyPolicy</h1>
    </Page>
  )
}

PrivacyPolicy.getLayout = getLayout
export default PrivacyPolicy
