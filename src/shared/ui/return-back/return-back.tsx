import { Button, cn, ReturnComponent, useResponsive } from '@/shared'
import { ArrowIcon } from '@/shared/assets/icons'
import { useRouter } from 'next/router'

type Props = {
  className?: string
  text: string
}
export const ReturnBack = ({ text, className }: Props): ReturnComponent => {
  const { sm } = useResponsive()
  const router = useRouter()

  const classes = {
    button: cn('p-0 h-auto', className),
    icon: 'w-[24px] h-[24px]',
  }

  return (
    <Button
      className={classes.button}
      onClick={() => router.back()}
      variant={'text'}
      aria-label={sm ? text : undefined}
    >
      <ArrowIcon className={'classes.icon'} aria-hidden />
      {!sm && text}
    </Button>
  )
}
