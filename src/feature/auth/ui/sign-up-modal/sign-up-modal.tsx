import { ReturnComponent } from '@/shared/types'
import { Modal } from '@/shared/ui/modal'
import { Flex } from '@/shared/ui/flex'
import { Button } from '@/shared/ui/button'
import { useTranslation } from '@/shared/lib/hooks'

type Props = {
  onOpenChange: (open: boolean) => void
  open: boolean
}
export const SignUpModal = ({ open, onOpenChange }: Props): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <Modal onOpenChange={onOpenChange} open={open}>
      <Modal.Content classNameContent={'max-w-[378px] w-[90vw]'} title={t.pages.signUp.modalTitle}>
        <Flex direction={'column'} gap={'18'} items={'start'}>
          <p>{t.pages.signUp.modalText}</p>
          <Button className={'ml-auto px-[36px] py-[6px]'} onClick={() => onOpenChange(false)}>
            {t.pages.signUp.modalBtn}
          </Button>
        </Flex>
      </Modal.Content>
    </Modal>
  )
}
