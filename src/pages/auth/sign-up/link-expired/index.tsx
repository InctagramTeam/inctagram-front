'use client'
import React from 'react'

import { useRegistrationEmailResending } from '@/feature'
import {
  Button,
  InformationBlock,
  ReturnComponent,
  cn,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { TimeManagementIllustration } from '@/shared/assets/illustrations'
import { PageWrapper } from '@/widgets/page-wrapper'
import { useRouter } from 'next/router'

const LinkExpiredEmail = (): ReturnComponent => {
  const { xs } = useResponsive()
  const { t } = useTranslation()
  const router = useRouter()
  const email = router.query.email

  const { mutate } = useRegistrationEmailResending()

  const classes = {
    button: cn('py-[6px] px-[24px]', !xs && 'mb-[32px]', xs && 'order-1'),
    illustration: cn('max-w-[474px] w-full h-[354px]', xs && 'h-[246px] mb-[42px]'),
  }

  const resendLinkHandler = () => {
    if (email) {
      mutate({ email: email as string })
    }
  }

  return (
    <PageWrapper
      description={t.pages.verifyEmail.metaDescription}
      paddingBlock={xs ? '12px' : '35px'}
      title={t.pages.verifyEmail.metaTitle}
    >
      <InformationBlock
        action={
          <Button className={classes.button} fullWidth={xs} onClick={resendLinkHandler}>
            {t.button.resendVerificationLink}
          </Button>
        }
        illustration={<TimeManagementIllustration aria-hidden className={classes.illustration} />}
        isMobile={xs}
        text={t.pages.verifyEmail.text}
        title={t.pages.verifyEmail.title}
      />
    </PageWrapper>
  )
}

LinkExpiredEmail.getLayout = getAuthLayout
export default LinkExpiredEmail
