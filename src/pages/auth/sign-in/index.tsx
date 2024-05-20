import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const SignIn = () => {
  return (
    <PageWrapper paddingTop={'108px'} title={'SignIn | Instagram'}>
      <h1>SignIn</h1>
    </PageWrapper>
  )
}

SignIn.getLayout = getLayout
export default SignIn
