import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react'
import { cn } from '@/utils/merge-cn'

type Props = ComponentPropsWithoutRef<'section'> & {
  paddingTop?: CSSProperties['paddingTop']
}

export const Page = ({
  children,
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
  const classesPage = cn(``, className)
  const styles: CSSProperties = { padding: paddingTop, ...style }

  return (
    <section className={classesPage} style={styles} {...rest}>
      {children}
    </section>
  )
}
