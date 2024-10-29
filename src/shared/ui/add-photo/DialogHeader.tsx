import { Button } from '@/shared'
import ArrowIosBackIcon from '@/shared/assets/icons/ArrowIosBackIcon'
import { Text } from '@/shared/ui'
import { clsx } from 'clsx'

interface Props {
  title: string
}

const DialogHeader = ({ title }: Props) => {
  return (
    <div
      className={clsx(
        'flex w-full items-center justify-between border-b border-b-Dark-100 px-[24px] py-[12px]'
      )}
    >
      {/* Left-aligned back arrow icon */}
      <div className={'mr-auto'}>
        <ArrowIosBackIcon />
      </div>

      {/* Center-aligned title text */}
      <Text className={'flex-grow text-center text-H1-20'}>{title}</Text>

      {/* Right-aligned Next button */}
      <div className={'ml-auto'}>
        <Button variant={'text'}>Next</Button>
      </div>
    </div>
  )
}

export default DialogHeader
