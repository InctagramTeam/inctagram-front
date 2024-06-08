import { useRef } from 'react'

import { SignInFormValues } from '@/feature/auth/model/utils/validators'
import { SignInForm } from '@/feature/auth/ui/sign-in-form'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'
import { EMPTY_STRING } from '@/shared/constants'

const SignIn = (): ReturnComponent => {
  const ref = useRef<UseFormRef<SignInFormValues>>(null)
  const handleSubmitForm = (formData: SignInFormValues) => {}

  return (
    <PageWrapper paddingBlock={'36px'} title={'SignIn | Instagram'}>
      <SignInForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? EMPTY_STRING}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? EMPTY_STRING}
        onSubmit={handleSubmitForm}
        // disabled={isLoading}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignIn.getLayout = getAuthLayout
export default SignIn
