import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const ForgotPassword = () => {
  return (
    <Page paddingTop={'72px'}>
      <HeadMeta title={'Forgot password'} />
      <h1>ForgotPassword</h1>
    </Page>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
