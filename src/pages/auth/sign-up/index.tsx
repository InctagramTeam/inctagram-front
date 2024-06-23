'use client'
import { useRef, useState } from 'react'

import { SignUpForm, SignUpFormValues } from '@/feature'
import {
  EMPTY_STRING,
  MD_BREAKPOINT,
  PageWrapper,
  UseFormRef,
  getAuthLayout,
  useResponsive,
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
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const isMobile = width < MD_BREAKPOINT

  const handleSubmitForm = ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    /*  signUp(formData)
      .then(() => {
        setOpen(true)
        toast({
          variant: 'default',
          title: 'Congratulations! you are successfully registered.',
          description: 'Please! Go through the login procedure to use the application.',
        })
        ref?.current?.reset()
        navigate(ROUTES.signIn)
      })
      .catch(() => {
        // console.log(error)

        toast({
          variant: 'destructive',
          title: 'Error registration!',
          description: 'Please! Try again.',
        })
      })  */
  }

  const handleChangeOpen = (open: boolean) => {
    setOpen(open)
    ref.current?.reset()
  }

  return (
    <PageWrapper
      description={t.pages.signUp.metaDescription}
      paddingBlock={isMobile ? '24px' : '16px'}
      title={t.pages.signUp.metaTitle}
    >
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
