'use client'
import { useRef, useState } from 'react'

import { SignUpFormValues } from '@/feature/auth/model/utils/validators'
import { SignUpForm } from '@/feature/auth/ui/sign-up-form/sign-up-form'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'
import { Button } from '@/shared/ui/button'
import { Flex } from '@/shared/ui/flex'
import { Modal } from '@/shared/ui/modal'
import { EMPTY_STRING } from '@/shared/constants'
import { useTranslation } from '@/shared/lib/hooks'

const SignUp = (): ReturnComponent => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)
  const [open, setOpen] = useState(true)
  const { t } = useTranslation()
  const handleSubmitForm = ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    // ref?.current?.reset()
  }

  return (
    <PageWrapper title={t.pages.signUp.metaTitle} description={t.pages.signUp.metaDescription}>
      <SignUpForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? EMPTY_STRING}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? EMPTY_STRING}
        // disabled={isLoading}
        onSubmit={handleSubmitForm}
        ref={ref}
      />
      <Modal onOpenChange={setOpen} open={open}>
        <Modal.Content
          classNameContent={'max-w-[378px] w-[90vw]'}
          title={t.pages.signUp.modalTitle}
        >
          <Flex direction={'column'} gap={'18'} items={'start'}>
            <p>{t.pages.signUp.modalText}</p>
            <Button className={'ml-auto px-[36px] py-[6px]'} onClick={() => setOpen(false)}>
              {t.pages.signUp.modalBtn}
            </Button>
          </Flex>
        </Modal.Content>
      </Modal>
    </PageWrapper>
  )
}

SignUp.getLayout = getAuthLayout
export default SignUp
