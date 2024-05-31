import { SignInForm } from '@/feature/auth/ui/sign-in-form'
import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { SignInFormValues } from '@/feature/auth/model/utils/validators'
import { ReturnComponent } from '@/shared/types'

const SignIn = (): ReturnComponent => {
  const handleSubmitForm = (formData: SignInFormValues) => {
    console.log(formData)
  }

  return (
    <PageWrapper paddingTop={'108px'} title={'SignIn | Instagram'}>
      <SignInForm onSubmit={handleSubmitForm} />
    </PageWrapper>
  )
}

SignIn.getLayout = getLayout
export default SignIn
