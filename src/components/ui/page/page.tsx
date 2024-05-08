import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react'
import { cn } from '@/utils/merge-cn'

type Props = ComponentPropsWithoutRef<'section'> & {
  paddingTop?: CSSProperties['paddingTop']
}

export const Page = ({
  children,
  className,
  style,
  paddingTop = '24px',
  ...rest
}: Props): ReactElement => {
  const classes = cn(``, className)
  const styles: CSSProperties = { padding: paddingTop, ...style }

  return (
    <section className={classes} style={styles} {...rest}>
      {children}
    </section>
  )
}
