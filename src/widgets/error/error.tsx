import { Button } from '@/shared/ui/button'
import { clsx } from 'clsx'

interface ErrorPageProps {
  className?: string
}

export const Error = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={clsx(`w-full h-[100dvh] flex items-center justify-center flex-col`, className)}>
      <p>An unexpected error occurred</p>
      <Button onClick={reloadPage} variant={'destructive'}>
        Try refreshing the page
      </Button>
    </div>
  )
}
