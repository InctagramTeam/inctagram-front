'use client'
import { useRef, useState } from 'react'

import { SignUpFormValues, SignUpForm } from '@/feature'
import {
  EMPTY_STRING,
  getAuthLayout,
  PageWrapper,
  ReturnComponent,
  UseFormRef,
  useTranslation,
} from '@/shared'
import dynamic from 'next/dynamic'

const SentEmailModal = dynamic(
  import('@/feature/auth/ui/sent-email-modal').then(module => module.SentEmailModal)
)

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
      <SentEmailModal email={'example@gmail.com'} onOpenChange={setOpen} open={open} />
    </PageWrapper>
  )
}

SignUp.getLayout = getAuthLayout
export default SignUp
