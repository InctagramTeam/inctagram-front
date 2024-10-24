import {
  AuthRoutes,
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

const LinkExpiredPage = (): ReturnComponent => {
  const { xs } = useResponsive()
  const { t } = useTranslation()

  const classes = {
    button: cn('py-[6px] px-[24px]', !xs && 'mb-[32px]', xs && 'order-1'),
    illustration: cn('max-w-[474px] w-full h-[354px]', xs && 'h-[246px] mb-[42px]'),
  }

  const router = useRouter()

  return (
    <PageWrapper
      description={t.pages.verifyPasswordRecoveryLink.metaDescription}
      paddingBlock={xs ? '12px' : '35px'}
      title={t.pages.verifyPasswordRecoveryLink.metaTitle}
    >
      <InformationBlock
        action={
          <Button
            asComponent={'button'}
            className={classes.button}
            fullWidth={xs}
            onClick={() => {
              router.replace(AuthRoutes.FORGOT_PASSWORD)
            }}
          >
            {t.button.resendVerificationLink}
          </Button>
        }
        illustration={<TimeManagementIllustration aria-hidden className={classes.illustration} />}
        isMobile={xs}
        text={t.pages.verifyPasswordRecoveryLink.text}
        title={t.pages.verifyPasswordRecoveryLink.title}
      />
    </PageWrapper>
  )
}

LinkExpiredPage.getLayout = getAuthLayout
export default LinkExpiredPage
