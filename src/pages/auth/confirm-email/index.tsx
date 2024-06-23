import React from 'react'

import {
  Button,
  InformationBlock,
  PageWrapper,
  ReturnComponent,
  cn,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { TimeManagementIllustration } from '@/shared/assets/illustrations'

const ConfirmEmailPage = (): ReturnComponent => {
  const { xs } = useResponsive()
  const { t } = useTranslation()

  const classes = {
    button: cn('py-[6px] px-[24px]', !xs && 'mb-[32px]', xs && 'order-1'),
    illustration: cn('max-w-[474px] w-full h-[354px]', xs && 'h-[246px] mb-[42px]'),
  }

  return (
    <PageWrapper
      description={t.pages.verifyEmail.metaDescription}
      paddingBlock={xs ? '12px' : '35px'}
      title={t.pages.verifyEmail.metaTitle}
    >
      <InformationBlock
        action={
          <Button
            asComponent={'button'}
            className={classes.button}
            fullWidth={xs}
            onClick={() => {}}
          >
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

ConfirmEmailPage.getLayout = getAuthLayout
export default ConfirmEmailPage
