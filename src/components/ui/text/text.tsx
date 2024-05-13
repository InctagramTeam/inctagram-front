import { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TextColor = 'dark' | 'error' | 'info' | 'lightDark' | 'primary' | 'success' | 'warning'
export type TextAlign = 'center' | 'left' | 'right'

export interface TextProps<T extends ElementType> {
  asComponent?: T
  children: ReactNode
  color?: CSSProperties['color']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
  /**
   * Пример использования с props "as": Текст будет ссылкой:
   * <Text as={Link} to={'main/auth/sign-in'} variant="subtitle1" className={s.name}>Привет!</Text>
   */
  textAlign?: TextAlign
  textColor?: TextColor
  variant?:
    | 'H1' // 20px;
    | 'H2' // 18px;
    | 'H3' // 16px;
    | 'Large' // 26px;
    | 'bold_text_14'
    | 'bold_text_16'
    | 'error_text_12'
    | 'inline_code'
    | 'medium-text-14'
    | 'muted_text'
    | 'regular_text_16' // 16px - BASE FONT;
    | 'regular-link_14'
    | 'regular-text-14'
    | 'semi-bold_small_text_12'
    | 'small-link_12'
    | 'small-text-12'
}

export function Text<T extends ElementType = 'p'>({
  asComponent,
  children,
  className,
  color,
  /**
   * mb, ml, mr, mt, mx, my - Внешние отступы (маржины) Text от соседних элементов
   */
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  /**
   * style - для передачи цвета текста пропсом при отрисовки компонента Text
   * Пример использования: <Text variant={'Large'} style={{color: "green"}}>Some text</Text>
   */
  style,
  /**
   * Выравнивание текста
   */
  textAlign = 'left',
  textColor = 'primary',
  /**
   * Задаёт шрифт + размер + межстрочный интервал текста
   */
  variant = 'regular_text_16',
  ...rest
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const textClasses = clsx(
    // Main fonts
    variant === 'Large' && `text-Large-26`,
    variant === 'H1' && `text-H1-20`,
    variant === 'H2' && `text-H2-18`,
    variant === 'H3' && `text-H3-16`,
    variant === 'regular_text_16' && `regular-text-16`,
    variant === 'bold_text_16' && `text-bold-text-16`,
    variant === 'regular-text-14' && `text-regular-text-14`,
    variant === 'medium-text-14' && `text-medium-text-14`,
    variant === 'bold_text_14' && `text-sm-bold-14`,
    variant === 'small-text-12' && `text-small-text-12`,
    variant === 'semi-bold_small_text_12' && `text-semi-bold_small_text_12`,
    variant === 'regular-link_14' && `text-regular_link-14 underline cursor-pointer`,
    variant === 'small-link_12' && `text-small-link_12 text-Primary-300 underline cursor pointer`,

    // Additional fonts
    variant === 'error_text_12' && `text-small-text-12 text-Danger-500`,
    variant === 'muted_text' && `text-md text-muted-foreground`,
    /**
     * Текст с "фоновой" обводкой
     */
    variant === 'inline_code' && `text-xs-small-12 text-Danger-500`,

    textColor === 'primary' && `text-Light-100`,
    textColor === 'warning' && `text-Warning-500`,
    textColor === 'error' && `text-Danger-500`,
    textColor === 'info' && `text-Primary-100`,
    textColor === 'success' && `text-Success-500`,
    textColor === 'success' && `text-Success-500`,
    textColor === 'lightDark' && `text-Dark-100`,
    textColor === 'dark' && `text-Success-900`,

    textAlign === 'center' && `text-center`,
    textAlign === 'left' && `text-left`,
    textAlign === 'right' && `text-right`,
    className
  )

  const styles = {
    ...(mr && { marginRight: mr }),
    ...(ml && { marginLeft: ml }),
    ...(mt && { marginTop: mt }),
    ...(mb && { marginBottom: mb }),
    ...(mx && { marginLeft: mx, marginRight: mx }),
    ...(my && { marginBottom: my, marginTop: my }),
    ...(color && { color }),
    ...style,
  }

  const Component = asComponent || 'p'

  return (
    <div>
      {variant === 'inline_code' ? (
        <code
          className={
            'relative rounded bg-Light-900/90 px-[0.3rem] py-[0.2rem] font-inter text-bold-text-16'
          }
        >
          {children}
        </code>
      ) : (
        <Component className={textClasses} style={styles} {...rest}>
          {children}
        </Component>
      )}
    </div>
  )
}
