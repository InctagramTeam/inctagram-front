import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const SignIn = () => {
  return (
    <Page paddingTop={'108px'}>
      <HeadMeta title={'SignIn'} />
      <h1>SignIn</h1>
    </Page>
  )
}

SignIn.getLayout = getLayout
export default SignIn
