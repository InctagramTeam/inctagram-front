import { useRef } from 'react'

import { SignInForm, SignInFormValues, useSignIn } from '@/feature'
import {
  EMPTY_STRING,
  ReturnComponent,
  UseFormRef,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'

const SignInPge = (): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()
  const ref = useRef<UseFormRef<SignInFormValues>>(null)
  const { mutate, isPending } = useSignIn()

  const handleSubmitForm = (formData: SignInFormValues) => {
    mutate(formData)
  }

  return (
    <PageWrapper
      description={t.pages.signIn.metaDescription}
      paddingBlock={sm ? '12px' : '36px'}
      title={t.pages.signIn.metaTitle}
    >
      <SignInForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? EMPTY_STRING}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? EMPTY_STRING}
        onSubmit={handleSubmitForm}
        disabled={isPending}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignInPge.getLayout = getAuthLayout
export default SignInPge
