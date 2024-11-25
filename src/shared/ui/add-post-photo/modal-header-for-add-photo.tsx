import { Button, useTranslation } from '@/shared'
import { ArrowIosBackIcon } from '@/shared/assets/icons'
import { Text } from '@/shared/ui'
import { clsx } from 'clsx'

interface Props {
  returnCallback: (value: boolean) => void
  title: string
}

export const ModalHeaderForAddPhoto = ({ title, returnCallback }: Props) => {
  const { t } = useTranslation()
  const classes = {
    container: 'flex w-full items-center justify-between gap-[20px]',
    button: 'h-[24px] w-[24px] hover:text-Primary-500 bg-transparent hover:bg-transparent',
    title: 'text-H1-20',
  }

  return (
    <div className={classes.container}>
      <Button
        aria-label={t.button.back}
        className={classes.button}
        onClick={() => returnCallback(true)}
        type={'button'}
      >
        <ArrowIosBackIcon aria-hidden />
      </Button>
      <Text className={classes.title}>{title}</Text>
      <Button type={'button'} variant={'link'}>
        {t.button.next}
      </Button>
    </div>
  )
}
