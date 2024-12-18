import { Button, ReturnComponent, useTranslation } from '@/shared'
import { ArrowIosBackIcon } from '@/shared/assets/icons'
import { Text } from '@/shared/ui'

interface Props {
  nextButtonText?: string
  nextHandler: () => void
  prevHandler: () => void
  title: string
}

export const AddPhotoModalHeader = ({
  title,
  nextHandler,
  prevHandler,
  nextButtonText,
}: Props): ReturnComponent => {
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
        onClick={prevHandler}
        type={'button'}
      >
        <ArrowIosBackIcon aria-hidden />
      </Button>
      <Text className={classes.title}>{title}</Text>
      <Button onClick={nextHandler} type={'button'} variant={'link'}>
        {nextButtonText ? nextButtonText : t.button.next}
      </Button>
    </div>
  )
}
