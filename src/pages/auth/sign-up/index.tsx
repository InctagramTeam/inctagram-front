import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const SignUp = () => {
  return (
    <>
      <HeadMeta title={'SignUp'} />
      <h1>SignUp</h1>
    </>
  )
}

SignUp.getLayout = getLayout
export default SignUp
