import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const ForgotPassword = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Forgot password | Instagram'}>
      <h1>ForgotPassword</h1>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getAuthLayout
export default ForgotPassword
