'use client'
import { useRef, useState } from 'react'

import { SignUpForm, SignUpFormValues } from '@/feature'
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

const SignUpPage = () => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)
  const [open, setOpen] = useState(true)
  const { t } = useTranslation()

  const handleSubmitForm = async ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    // ref?.current?.reset()
    /* signUp(formData)
      .then(res => res.data)
      .then(data => {
        setOpen(true)
        toast({
          variant: 'default',
          title: 'Congratulations! you are successfully registered.',
          description: 'Please! Go through the login procedure to use the application.',
        })
      })
      .catch(error => {
        console.log(error)

        toast({
          variant: 'destructive',
          title: 'Error registration!',
          description: 'Please! Try again.',
        })
      })
  } */
  }

  const handleChangeOpen = (open: boolean) => {
    setOpen(open)
    ref.current?.reset()
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

SignUpPage.getLayout = getAuthLayout
export default SignUpPage
