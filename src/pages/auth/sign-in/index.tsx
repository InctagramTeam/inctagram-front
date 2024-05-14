import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'

const SignIn = () => {
  return (
    <PageWrapper paddingTop={'108px'} title={'SignIn | Instagram'}>
      <h1>SignIn</h1>
    </PageWrapper>
  )
}

SignIn.getLayout = getLayout
export default SignIn
