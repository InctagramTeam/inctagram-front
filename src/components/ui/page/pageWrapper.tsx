import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react'
import { cn } from '@/utils/merge-cn'
import HeadMeta from '@/components/HeadMeta/HeadMeta'
import instagram from 'public/inctagram.png'

type Props = ComponentPropsWithoutRef<'section'> & {
  paddingTop?: CSSProperties['paddingTop']
  description?: string
  favicon?: string
  title?: string
}

export const PageWrapper = ({
  children,
  title,
  description,
  favicon,
  className,
  style,
  /**
   * Отступ страницы от секции
   * Например: Отступ страницы SingIn от Header
   (по умолчанию для главной странице с local url: http://localhost:3000 --> 24рх,
   задаем props при отрисовки согласно макета paddingTop = 36рх)
   */
  paddingTop = '24px',
  ...rest
}: Props): ReactElement => {
  const classesPage = cn(`flex items-center justify-center max-w-[1280px] w-full`, className)

  const styles: CSSProperties = { paddingTop: paddingTop, ...style }

  return (
    <section
      className={cn(`w-full max-w-[1280px] min-h-full p-[0_15px] mx-auto`, classesPage)}
      style={styles}
      {...rest}
    >
      <HeadMeta favicon={instagram.src} title={title} description={description} />
      {children}
    </section>
  )
}
