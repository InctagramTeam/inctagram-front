import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const SignUp = () => {
  return (
    <Page>
      <HeadMeta title={'SignUp'} />
      <h1>SignUp</h1>
    </Page>
  )
}

SignUp.getLayout = getLayout
export default SignUp
