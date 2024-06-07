import { TimeManagementIllustration } from '@/shared/assets/illustrations'
import { XS_BREAKPOINT } from '@/shared/constants'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { useResponsive } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { InformationBlock } from '@/shared/ui/information-block'

const EmailVerification = () => {
  const { width } = useResponsive()

  if (!width) {
    return null
  }

  const isMobile = width < XS_BREAKPOINT

  const classes = {
    button: cn('py-[6px] px-[24px]', !isMobile && 'mb-[32px]', isMobile && 'order-1'),
    illustration: cn('max-w-[474px] w-full h-[354px]', isMobile && 'h-[246px] mb-[42px]'),
  }

  return (
    <PageWrapper paddingTop={'35px'} title={'Email verification | Instagram'}>
      <InformationBlock
        action={
          <Button
            asComponent={'button'}
            className={classes.button}
            fullWidth={isMobile}
            onClick={() => {}}
          >
            Resend verification link
          </Button>
        }
        illustration={<TimeManagementIllustration className={classes.illustration} />}
        isMobile={isMobile}
        text={
          'Looks like the verification link has expired. Not to worry, we can send the link again'
        }
        title={'Email verification link expired'}
      />
    </PageWrapper>
  )
}

EmailVerification.getLayout = getAuthLayout
export default EmailVerification
