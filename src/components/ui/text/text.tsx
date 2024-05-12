import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from 'react'
import { clsx } from 'clsx'

// Types
type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, TextProps>
type TextComponent = <T extends ElementType = 'p'>(props: Props<T>) => ReactNode

export type TextColor = 'warning' | 'error' | 'info' | 'primary' | 'success' | 'lightDark' | 'dark'
export type TextAlign = 'right' | 'left' | 'center'

// PropsType
type TextProps = {
  /**
   * Пример использования с props "as": Текст будет ссылкой:
   * <Text as={Link} to={'main/auth/sign-in'} variant="subtitle1" className={s.name}>Привет!</Text>
   */
  textAlign?: TextAlign
  textColor?: TextColor
  variant?:
    | 'Large' // 26px;
    | 'H1' // 20px;
    | 'H2' // 18px;
    | 'H3' // 16px;
    | 'regular_text_16' // 16px - BASE FONT;
    | 'bold_text_16'
    | 'regular-text-14'
    | 'medium-text-14'
    | 'bold_text_14'
    | 'small-text-12'
    | 'semi-bold_small_text_12'
    | 'regular-link_14'
    | 'small-link_12'
    | 'error_text_12'
    | 'muted_text'
    | 'inline_code'
  children: ReactNode
  color?: CSSProperties['color']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
}

// Component:
export const Text: TextComponent = forwardRef(
  <T extends ElementType = 'span'>(
    {
      className,
      asComponent,
      /**
       * Задаёт шрифт + размер + межстрочный интервал текста
       */
      variant = 'regular_text_16',
      textColor = 'primary',
      /**
       * style - для передачи цвета текста пропсом при отрисовки компонента Text
       * Пример использования: <Text variant={'Large'} style={{color: "green"}}>Some text</Text>
       */
      style,
      /**
       * Выравнивание текста
       */
      textAlign = 'left',
      children,
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
      ...textProps
    }: Props<T>,
    ref: ElementRef<T>
  ) => {
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
      <>
        {variant === 'inline_code' ? (
          <code className="relative rounded bg-Light-900/90 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
          </code>
        ) : (
          <Component ref={ref} className={textClasses} style={styles} {...textProps}>
            {children}
          </Component>
        )}
      </>
    )
  }
)

// PolymorphTypes
interface ForwardedRefProp<T extends ElementType> {
  ref?: ForwardedRef<ElementRef<T>>
}

interface AsComponentProp<T extends ElementType> {
  asComponent?: T
}

export type PolymorphComponentProps<T extends ElementType, P = {}> = PropsWithChildren<
  P & AsComponentProp<T>
> &
  Omit<ComponentPropsWithoutRef<T>, keyof (AsComponentProp<T> & P)>

export type PolymorphComponentPropsWithRef<T extends ElementType, P = {}> = PolymorphComponentProps<
  T,
  P
> &
  ForwardedRefProp<T>
