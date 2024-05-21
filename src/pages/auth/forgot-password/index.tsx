import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const ForgotPassword = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Forgot password | Instagram'}>
      <h1>ForgotPassword</h1>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
