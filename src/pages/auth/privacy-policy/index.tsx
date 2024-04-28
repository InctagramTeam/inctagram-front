import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const PrivacyPolicy = () => {
  return (
    <>
      <HeadMeta title={'PrivacyPolicy'} />
      <h1>PrivacyPolicy</h1>
    </>
  )
}

PrivacyPolicy.getLayout = getLayout
export default PrivacyPolicy
