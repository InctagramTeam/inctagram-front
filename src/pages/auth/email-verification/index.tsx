import React from 'react'

import {
  Button,
  InformationBlock,
  PageWrapper,
  ReturnComponent,
  XS_BREAKPOINT,
  cn,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { TimeManagementIllustration } from '@/shared/assets/illustrations'

const EmailVerification = (): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()

  if (width === null) {
    return null
  }

  const isMobile = width < XS_BREAKPOINT

  const classes = {
    button: cn('py-[6px] px-[24px]', !isMobile && 'mb-[32px]', isMobile && 'order-1'),
    illustration: cn('max-w-[474px] w-full h-[354px]', isMobile && 'h-[246px] mb-[42px]'),
  }

  return (
    <PageWrapper
      description={t.pages.verifyEmail.metaDescription}
      paddingBlock={'35px'}
      title={t.pages.verifyEmail.metaTitle}
    >
      <InformationBlock
        action={
          <Button
            asComponent={'button'}
            className={classes.button}
            fullWidth={isMobile}
            onClick={() => {}}
          >
            {t.button.resendVerificationLink}
          </Button>
        }
        illustration={<TimeManagementIllustration aria-hidden className={classes.illustration} />}
        isMobile={isMobile}
        text={t.pages.verifyEmail.text}
        title={t.pages.verifyEmail.title}
      />
    </PageWrapper>
  )
}

EmailVerification.getLayout = getAuthLayout
export default EmailVerification
