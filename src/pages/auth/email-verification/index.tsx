import { TimeManagementIllustration } from '@/shared/assets/illustrations'
import { XS_BREAKPOINT } from '@/shared/constants'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { useResponsive, useTranslation } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { InformationBlock } from '@/shared/ui/information-block'

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
