import { useRef } from 'react'

import { SignInForm, SignInFormValues } from '@/feature'
import {
  EMPTY_STRING,
  PageWrapper,
  ReturnComponent,
  UseFormRef,
  getAuthLayout,
  useTranslation,
  MD_BREAKPOINT,
  useResponsive,
} from '@/shared'

const SignInPge = (): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()
  const ref = useRef<UseFormRef<SignInFormValues>>(null)
  if (width === null) {
    return null
  }

  const isMobile = width < MD_BREAKPOINT
  const handleSubmitForm = (formData: SignInFormValues) => {}

  return (
    <PageWrapper
      description={t.pages.signIn.metaDescription}
      paddingBlock={isMobile ? '12px' : '36px'}
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
