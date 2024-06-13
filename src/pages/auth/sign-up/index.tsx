'use client'
import { useRef, useState } from 'react'

import { SignUpFormValues } from '@/feature/auth/model/utils/validators'
import { SignUpForm } from '@/feature/auth/ui/sign-up-form/sign-up-form'
import { SentEmailModal } from 'src/feature/auth/ui/sent-email-modal'
import { EMPTY_STRING } from '@/shared/constants'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'

const SignUp = (): ReturnComponent => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)
  const [open, setOpen] = useState(true)
  const { t } = useTranslation()
  const handleSubmitForm = ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    // ref?.current?.reset()
  }

  return (
    <PageWrapper description={t.pages.signUp.metaDescription} title={t.pages.signUp.metaTitle}>
      <SignUpForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? EMPTY_STRING}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? EMPTY_STRING}
        // disabled={isLoading}
        onSubmit={handleSubmitForm}
        ref={ref}
      />
      <SentEmailModal onOpenChange={setOpen} open={open} email={'example@gmail.com'} />
    </PageWrapper>
  )
}

SignUp.getLayout = getAuthLayout
export default SignUp
