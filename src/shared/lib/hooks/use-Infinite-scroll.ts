import { MutableRefObject, useEffect, useRef } from 'react'

/** Следим за скроллом и наблюдаем когда пересекли тот или иной элемент
 * и в зависимости от этого будем подгружать новую порцию данных. Бесконечная лента */
export interface UseInfiniteScrollOptions {
  /** колбек вызывается когда пересекли тот или иной элемент */
  callback?: () => void
  /** когда пересекли элемент на котором висит реф и в этом момент будем вызывать колбек */
  triggerRef: MutableRefObject<HTMLElement>
  /** обертка внутри которого находится скролл (PageWrapper) */
  wrapperRef?: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
  /** IntersectionObserver: позволяет наблюдать за появлением элементов и реализовывать бесконечную ленту */
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    /** будем передавать в качестве wrapperRef нашу страницу (page)
     * wrapperElement и triggerElement замкнём в колбеке эффекта чтобы они никогда не были === null
     * */
    const wrapperElement = wrapperRef?.current ?? null
    const triggerElement = triggerRef.current ?? null

    /** колбек вызывается когда пересекли тот или иной элемент */
    if (callback) {
      const options = {
        /** root - элемент в котором находится скролл */
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }

      /** массив элементов за которыми наблюдаем */
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)
      /** следим за  triggerElement */
      observer.current.observe(triggerElement)
    }

    /** отписываемся от события */
    return () => {
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
