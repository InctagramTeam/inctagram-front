import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { Button } from '@/shared/ui/button'
import { XS_BREAKPOINT } from '@/shared/constants'
import { InformationBlock } from '@/shared/ui/information-block'
import { useResponsive } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { TimeManagementIllustration } from '@/shared/assets/illustrations'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'

const EmailVerification = () => {
  const { width } = useResponsive()

  if (!width) {
    return null
  }

  const isMobile = width < XS_BREAKPOINT

  const classes = {
    illustration: cn('max-w-[474px] w-full h-[354px]', isMobile && 'h-[246px] mb-[42px]'),
    button: cn('py-[6px] px-[24px]', !isMobile && 'mb-[32px]', isMobile && 'order-1'),
  }

  return (
    <PageWrapper paddingTop={'35px'} title={'Email verification | Instagram'}>
      <InformationBlock
        title={'Email verification link expired'}
        text={
          'Looks like the verification link has expired. Not to worry, we can send the link again'
        }
        isMobile={isMobile}
        action={
          <Button
            className={classes.button}
            asComponent={'button'}
            onClick={() => {}}
            fullWidth={isMobile}
          >
            Resend verification link
          </Button>
        }
        illustration={<TimeManagementIllustration className={classes.illustration} />}
      />
    </PageWrapper>
  )
}

EmailVerification.getLayout = getAuthLayout
export default EmailVerification
