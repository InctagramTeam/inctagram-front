import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const ForgotPassword = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'Forgot password | Instagram'}>
      <h1>ForgotPassword</h1>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
