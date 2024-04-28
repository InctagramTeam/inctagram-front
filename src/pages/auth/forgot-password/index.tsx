import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const ForgotPassword = () => {
  return (
    <>
      <HeadMeta title={'Forgot password'} />
      <h1>ForgotPassword</h1>
    </>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
