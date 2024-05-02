import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const SignIn = () => {
  return (
    <>
      <HeadMeta title={'SignIn'} />
      <h1>SignIn</h1>
    </>
  )
}

SignIn.getLayout = getLayout
export default SignIn
