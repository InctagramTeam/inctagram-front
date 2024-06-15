import { useRef } from 'react'

import { SignInFormValues } from '@/feature/auth/model/utils/validators'
import { SignInForm } from '@/feature/auth/ui/sign-in-form'
import {
  EMPTY_STRING,
  PageWrapper,
  ReturnComponent,
  UseFormRef,
  getAuthLayout,
  useTranslation,
} from '@/shared'

const SignIn = (): ReturnComponent => {
  const { t } = useTranslation()
  const ref = useRef<UseFormRef<SignInFormValues>>(null)
  const handleSubmitForm = (formData: SignInFormValues) => {}

  return (
    <PageWrapper
      description={t.pages.signIn.metaDescription}
      paddingBlock={'36px'}
      title={t.pages.signIn.metaTitle}
    >
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
