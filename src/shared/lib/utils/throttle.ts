/**
 * первым аргументом принимает функцию, а вторым время (в ms)
 * переднная функция будет вызываться не раньше указанного промежутка времени
 * */

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number = 1000,
): (...args: Parameters<T>) => void {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    /** Сохраняем контекст вызова, чтобы использовать внутри setTimeout */
    const context = this;

    if (!lastRan) {
      /** Если переданная функция (func) еще не вызывалась
       * то делаем вызов и запоминаем время */
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      /** Если переданная функция (func) уже вызывалась, отменяем таймер */
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= delay) {
            /** Если прошло достаточно времени, то вызываем func и запоминаем время */
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        delay - (Date.now() - lastRan),
      );
    }
  };
}

/**
 * Пример
 * function onScroll(event: Event) {
 *   console.log('Прокрутка окна');
 * }
 * const throttledOnScroll = throttle(onScroll, 500);
 * window.addEventListener('scroll', throttledOnScroll);
 * */
