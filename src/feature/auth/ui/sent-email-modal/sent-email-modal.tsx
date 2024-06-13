import { useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { Flex } from '@/shared/ui/flex'
import { Modal } from '@/shared/ui/modal'
import { Text } from '@/shared/ui/text'

type Props = {
  email: string
  onOpenChange: (open: boolean) => void
  open: boolean
}
export const SentEmailModal = ({ email, onOpenChange, open }: Props): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <Modal onOpenChange={onOpenChange} open={open}>
      <Modal.Content classNameContent={'max-w-[378px] w-[90vw]'} title={t.pages.signUp.modalTitle}>
        <Flex direction={'column'} gap={'18'} items={'start'}>
          <Text asComponent={'p'}>
            {t.pages.signUp.modalText} {email}
          </Text>
          <Button className={'ml-auto px-[36px] py-[6px]'} onClick={() => onOpenChange(false)}>
            {t.pages.signUp.modalBtn}
          </Button>
        </Flex>
      </Modal.Content>
    </Modal>
  )
}
