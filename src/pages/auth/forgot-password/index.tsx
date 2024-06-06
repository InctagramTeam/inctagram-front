import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const ForgotPassword = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Forgot password | Instagram'}>
      <h1>ForgotPassword</h1>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
