import { useCallback, useRef } from "react";

/** Позволяет выполнить лишь одно событие в промежуток времени - например сохранять позицию скролла только раз в секунду
 * (оптимизация событий, которые часто вызываются)
 * */
export function useThrottle(
  callback: (...args: unknown[]) => void,
  delay: number,
) {
  /** хранит значение показывающее можно вызывать колбек или нет */
  const throttleRef = useRef(false);

  return useCallback(
    (...args: unknown[]) => {
      if (!throttleRef.current) {
        /** колбек будет выполняться 1 раз в промежуток времени */
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          /** все последующие вызовы колбека игнорируем пока не вернем значение throttleRef_а в false, а сделаем жэто по истечению задержки */
          throttleRef.current = false;
        }, delay);
      }
    },
    /** возвращает колбек с тротлингом и задеркой */
    [callback, delay],
  );
}
