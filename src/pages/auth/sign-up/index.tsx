import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'

const SignUp = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'SignUp | Instagram'}>
      <HeadMeta title={'SignUp'} />
      <h1>SignUp</h1>
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
