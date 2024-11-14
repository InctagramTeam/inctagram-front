import { Button } from '@/shared'
import { ArrowIosBackIcon } from '@/shared/assets/icons'
import { Text } from '@/shared/ui'
import { clsx } from 'clsx'

interface Props {
  title: string
}

export const ModalHeaderForAddPhoto = ({ title }: Props) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between border-b border-b-Dark-100 px-[24px] py-[12px]'
      )}
    >
      <div className={'mr-auto'}>
        <ArrowIosBackIcon />
      </div>
      <Text className={'mx-auto text-H1-20'}>{title}</Text>
      <div className={'ml-auto'}>
        <Button variant={'text'}>Next</Button>
      </div>
    </div>
  )
}
