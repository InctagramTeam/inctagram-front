import { useRef } from 'react'

import { SignInFormValues } from '@/feature'
import { EMPTY_STRING, ReturnComponent, UseFormRef, getAuthLayout, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import dynamic from 'next/dynamic'

const DynamicSignInForm = dynamic(
  import('../../../feature/auth/ui/sign-in-form').then(module => module.SignInForm)
)

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
      <DynamicSignInForm
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
