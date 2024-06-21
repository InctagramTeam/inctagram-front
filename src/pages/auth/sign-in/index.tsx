import { useRef } from 'react'

import { SignInForm, SignInFormValues } from '@/feature'
import {
  EMPTY_STRING,
  PageWrapper,
  ReturnComponent,
  UseFormRef,
  getAuthLayout,
  useTranslation,
} from '@/shared'

const SignInPge = (): ReturnComponent => {
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

SignInPge.getLayout = getAuthLayout
export default SignInPge
