'use client'
import { useRef, useState } from 'react'

import { SignUpFormValues } from '@/feature/auth/model/utils/validators'
import { SentEmailModal } from '@/feature/auth/ui/sent-email-modal'
import {
  EMPTY_STRING,
  getAuthLayout,
  PageWrapper,
  ReturnComponent,
  UseFormRef,
  useTranslation,
} from '@/shared'
import dynamic from 'next/dynamic'


const SignUpForm = dynamic(
  import('@/feature/auth/ui/sign-up-form').then(module => module.SignUpForm)
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
