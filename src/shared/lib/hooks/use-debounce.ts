import { MutableRefObject, useCallback, useRef } from "react";

/**
 * Хук, который позволяет отменять предыдущий вызов функции (события) пока не истечет delay
 * до тех пор пока, что-то вводим в инпут, колбек вызываться не будет,как только проидет задержка,
 * колбек вызовется, а все предыдущие вызовы будут отменены
 * @param callback
 * @param delay - задержка в мс
 */
export const useDebounce = <T>(
  callback: (...args: unknown[]) => void,
  delay: number,
) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
