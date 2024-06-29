'use client'
import { useRef, useState } from 'react'

import { SignUpForm, SignUpFormValues } from '@/feature'
import { EMPTY_STRING, UseFormRef, getAuthLayout, useResponsive, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import dynamic from 'next/dynamic'

const DynamicSentEmailModal = dynamic(
  import('@/feature/auth/ui/sent-email-modal').then(module => module.SentEmailModal)
)

const SignUpPage = () => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)

  const [open, setOpen] = useState(true)
  const { t } = useTranslation()
  const { xs } = useResponsive()

  const handleSubmitForm = (formData: any) => {
    console.log(formData)
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
      .catch((error) => {
        // ref?.current?.setError('root', { message}: 'Error formData!')

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
      paddingBlock={xs ? '24px' : '16px'}
      title={t.pages.signUp.metaTitle}
    >
      <SignUpForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? EMPTY_STRING}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? EMPTY_STRING}
        // disabled={isLoading}
        onSubmit={handleSubmitForm}
        ref={ref}
      />
      <DynamicSentEmailModal email={'example@gmail.com'} onOpenChange={setOpen} open={open} />
    </PageWrapper>
  )
}

SignUpPage.getLayout = getAuthLayout
export default SignUpPage
