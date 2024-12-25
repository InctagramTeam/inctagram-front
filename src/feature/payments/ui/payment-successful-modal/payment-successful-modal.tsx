import { useTranslation } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { Button, Modal, Text } from '@/shared/ui'
import { FlexCol } from '@/shared/ui/flex'
import { clsx } from 'clsx'

type Props = {
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const PaymentSuccessfulModal = ({ onOpenChange, open }: Props): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <Modal onOpenChange={onOpenChange} open={open}>
      <Modal.Content
        asChild
        classNameChildrenWrapper={'pt-[18px]'}
        classNameContent={clsx('max-w-[366px] w-[90dvw]')}
        classNameTitle={clsx('leading-9 font-bold')}
        isClose
        title={t.pages.profile.settings.managementTab.paymentSuccessfulModal.title}
      >
        <FlexCol gap={'18'} items={'start'}>
          <Text className={'mb-[54px]'}>
            {t.pages.profile.settings.managementTab.paymentSuccessfulModal.text}
          </Text>
          <Button className={clsx('w-full px-[24px] py-[6px]')} onClick={() => onOpenChange(false)}>
            {t.pages.profile.settings.managementTab.paymentSuccessfulModal.button}
          </Button>
        </FlexCol>
      </Modal.Content>
    </Modal>
  )
}
