import { useEffect, useState } from 'react'

import { useTranslation } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { Button, Modal, Text } from '@/shared/ui'
import { FlexCol } from '@/shared/ui/flex'

type Props = {
  email?: string
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const SentEmailModal = ({ email, onOpenChange, open }: Props): ReturnComponent => {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <Modal onOpenChange={onOpenChange} open={open}>
      <Modal.Content
        classNameChildrenWrapper={'pt-[30px] pb-[36px] px-[24px]'}
        asChild
        classNameContent={'max-w-[378px] w-[90vw]'}
        title={t.pages.signUp.modalTitle}
      >
        <FlexCol gap={'18'} items={'start'}>
          <Text asComponent={'p'}>
            {t.pages.signUp.modalText} {email}
          </Text>
          <Button className={'ml-auto px-[36px] py-[6px]'} onClick={() => onOpenChange(false)}>
            {t.pages.signUp.modalBtn}
          </Button>
        </FlexCol>
      </Modal.Content>
    </Modal>
  )
}
