import {
  ComponentPropsWithoutRef,
  CSSProperties,
  MutableRefObject,
  ReactNode,
  useMemo,
  useRef,
} from 'react'

import HeadMeta from '@/shared/lib/seo/head-meta'
import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import instagram from 'public/inctagram.png'
import { Undefinable } from '@/shared/types/undefinable'
import { useInfiniteScroll } from '@/shared/lib/hooks/use-Infinite-scroll'

type Props = {
  description?: string
  favicon?: string
  className?: string
  children: ReactNode
  paddingBlock?: CSSProperties['paddingBlock']
  title?: string
  /** Для бесконечной ленты - отработает единожды когда элемент появляется в зоне видимости */
  onScrollEnd?: () => void
} & ComponentPropsWithoutRef<'section'>

/** Оборачиваем все страницы в проекте */
export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  /**
   * Отступ обёртки над страницей (PageWrapper) по оси "y". Например: Отступ страницы SingIn от Header
   * (по умолчанию для главной странице с local url: http://localhost:3000 --> 24рх,
   задаем props при отрисовки согласно макета paddingBlock = 36рх) такой же отступ будет внизу, чтобы контент не прилипал к границе
   */
  paddingBlock = '24px',
  style,
  title,
  onScrollEnd,
  ...rest
}: Props): ReturnComponent => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  const styles: Undefinable<CSSProperties> = useMemo(
    () => ({
      paddingBlock: paddingBlock,
      ...style,
    }),
    [paddingBlock]
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  return (
    <section
      className={cn(
        `_Section_ mx-auto flex min-h-full w-full max-w-[1280px] justify-center p-[0_15px] focus-visible:outline-none`,
        className,
        paddingBlock
      )}
      style={styles}
      {...rest}
    >
      <HeadMeta description={description} favicon={instagram.src} title={title} />
      {children}
      {onScrollEnd ? <div className={`m-[10px] h-[20px]`} ref={triggerRef}></div> : null}
    </section>
  )
}
