import { useRef } from 'react'

import { SignInFormValues } from '@/feature'
import { EMPTY_STRING, getAuthLayout, ReturnComponent, UseFormRef, useTranslation } from '@/shared'
import dynamic from 'next/dynamic'
import { PageWrapper } from '@/widgets/page-wrapper'

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
