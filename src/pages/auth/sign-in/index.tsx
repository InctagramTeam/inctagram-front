import { SignInForm } from '@/feature/auth/ui/sign-in-form'
import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { SignInFormValues } from '@/feature/auth/model/utils/validators'
import { ReturnComponent } from '@/shared/types'
import { useRef } from 'react'
import { UseFormRef } from '@/shared/types/form'

const SignIn = (): ReturnComponent => {
  const ref = useRef<UseFormRef<SignInFormValues>>(null)
  const handleSubmitForm = (formData: SignInFormValues) => {
    console.log(formData)
  }

  return (
    <PageWrapper paddingTop={'108px'} title={'SignIn | Instagram'}>
      <SignInForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? ''}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? ''}
        onSubmit={handleSubmitForm}
        // disabled={isLoading}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignIn.getLayout = getLayout
export default SignIn
