import {
  CSSProperties,
  ComponentPropsWithoutRef,
  MutableRefObject,
  ReactNode,
  useMemo,
  useRef,
} from "react";

import { useInfiniteScroll } from "@/shared/lib/hooks/use-Infinite-scroll";
import HeadMeta from "@/shared/lib/seo/head-meta";
import { cn } from "@/shared/lib/utils/merge-cn";
import { ReturnComponent } from "@/shared/types";
import { Undefinable } from "@/shared/types/undefinable";
import instagram from "public/inctagram.png";

type Props = {
  children: ReactNode;
  className?: string;
  description?: string;
  favicon?: string;
  /** Для бесконечной ленты - отработает единожды когда элемент появляется в зоне видимости */
  onScrollEnd?: () => void;
  paddingBlock?: CSSProperties["paddingBlock"];
  title?: string;
} & ComponentPropsWithoutRef<"section">;

/** Оборачиваем все страницы в проекте */
export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  onScrollEnd,
  /**
   * Отступ обёртки над страницей (PageWrapper) по оси "y". Например: Отступ страницы SingIn от Header
   * (по умолчанию для главной странице с local url: http://localhost:3000 --> 24рх,
   задаем props при отрисовки согласно макета paddingBlock = 36рх) такой же отступ будет внизу, чтобы контент не прилипал к границе
   */
  paddingBlock = "24px",
  style,
  title,
  ...rest
}: Props): ReturnComponent => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const styles: Undefinable<CSSProperties> = useMemo(
    () => ({
      paddingBlock: paddingBlock,
      ...style,
    }),
    [paddingBlock],
  );

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  return (
    <div
      className={cn(
        `_Section_ container mx-auto flex min-h-full w-full max-w-[1020px] justify-center p-[0_24px] focus-visible:outline-none max-lg:max-w-none`,
        className,
        paddingBlock,
      )}
      style={styles}
      {...rest}
    >
      <HeadMeta
        description={description}
        favicon={instagram.src}
        title={title}
      />
      {children}
      {onScrollEnd ? (
        <div className={`m-[10px] h-[20px]`} ref={triggerRef}></div>
      ) : null}
    </div>
  );
};
/** max-lg:max-w-none - чтобы контейнер был резиновый */
