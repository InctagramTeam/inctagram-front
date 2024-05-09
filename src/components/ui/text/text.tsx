import { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'
import { cn } from '@/utils/merge-cn'

export type TextColor = 'warning' | 'error' | 'info' | 'primary' | 'success' | 'lightDark' | 'dark'

export type TextAlign = 'right' | 'left' | 'center'

export type TextProps<T extends ElementType = 'p'> = {
  /**
   * ПРИМЕР ИСПОЛЬЗОВАНИЯ с props "as": Текст будет ссылкой:
   - <Typography as={Link} to={ROUTES.profile} variant="subtitle1" className={s.name}>Привет!</Typography>
   */
  as?: T
  align?: TextAlign
  textColor?: TextColor
  variant?:
    | 'Large' // 26px;
    | 'H1' // 20px;
    | 'H2' // 18px;
    | 'H3' // 16px;
    | 'regular_text_16' // 16px - BASE FONT APP;
    | 'bold_text_16'
    | 'regular_text_14'
    | 'medium_text_14'
    | 'bold_text_14'
    | 'small_text_12'
    | 'semi-bold_small_text_12'
    | 'regular-link_14'
    | 'small-link_14'
    | 'error_text_12' // 12px;
  children: ReactNode
  cssStyleColors?: CSSProperties['color']
} & ComponentPropsWithoutRef<T>

export const Text = <T extends ElementType = 'p'>(
  props: TextProps<T> & ComponentPropsWithoutRef<T>
) => {
  /**
   * По умолчанию компонент Текста отображется в ДОМ дереве как "р" (параграф)
   * Передав к примеру as=span в ДОМ отрисуется тэг span
   */
  const {
    as: Comp = 'span',
    className,
    /**
     * Задаёт шрифт + размер + межстрочный интервал текста
     */
    variant = 'regular_text_16',
    textColor = 'primary',
    /**
     * style - для передачи цвета текста пропсом при отрисовки компонента Text
     * ПРИМЕР ИСПОЛЬЗОВАНИЯ: <Text variant={'Large'} style={{color: "green"}}>Some text</Text>
     */
    style,
    align,
    children,
    cssStyleColors,
    ...rest
  } = props

  /**
   "Мерж" классов тайлвинд:
   */
  const textClasses = cn(
    variant === 'Large' && `text-3xl-large-26`,
    variant === 'H1' && `text-xl-H1-20`,
    variant === 'H2' && `text-lg-H2-18`,
    variant === 'H3' && `text-base-H3-16`,
    variant === 'regular_text_16' && `text-main-reg-16`,
    variant === 'bold_text_16' && `text-md-bold-16`,
    variant === 'regular_text_14' && `text-sm-reg-14`,
    variant === 'medium_text_14' && `text-sm-medium-14`,
    variant === 'bold_text_14' && `text-sm-bold-14`,
    variant === 'bold_text_14' && `text-sm-bold-14`,
    variant === 'regular-link_14' && `text-sm-reg-link-14`,
    variant === 'small-link_14' && `text-xs-link-12`,
    variant === 'error_text_12' && `text-xs-small-12 text-Danger-500`,

    textColor === 'primary' && `text-Light-100`,
    textColor === 'warning' && `text-Warning-500`,
    textColor === 'error' && `text-Danger-500`,
    textColor === 'info' && `text-Primary-100`,
    textColor === 'success' && `text-Success-500`,
    textColor === 'success' && `text-Success-500`,
    textColor === 'lightDark' && `text-Dark-100`,
    textColor === 'dark' && `text-Success-900`,

    align === 'center' && `text-center`,
    align === 'left' && `text-left`,
    align === 'right' && `text-right`,
    className
  )

  const styles = {
    ...(cssStyleColors && { cssStyleColors }),
    ...style,
  }

  return (
    <Comp className={textClasses} style={styles} {...rest}>
      {children}
    </Comp>
  )
}
