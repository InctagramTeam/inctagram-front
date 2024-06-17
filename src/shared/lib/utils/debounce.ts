/**
 * Функция debounce первым аргументов принимает функцию, а вторым время (в ms)
 * переднная функция будет вызываться не раньше указанного промежутка времени
 * после последнего вызова.
 * Возвращает объект с заторможенной функцией и функцией отмены.
 * */

export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): { cancel: () => void; debouncedFunction: (...args: Parameters<T>) => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debouncedFunction = function (...args: Parameters<T>): void {
    if (timeoutId) {
      /** Если предыдущий таймер был установлен, то отменяем его */
      clearTimeout(timeoutId)
    }
    /** Устанавливаем новый таймер, который вызовет func после задержки */
    timeoutId = setTimeout(() => func(...args), delay)
  }

  /** Функция для отмены вызова, если он был запланирован */
  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }

  return { cancel, debouncedFunction }
}

/**
 * Пример
 * function saveInput(inputValue: string) {
 *   console.log(`Сохранение данных: ${inputValue}`);
 * }
 *
 * const { debouncedFunction, cancel } = debounce(saveInput, 1000);
 * function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
 *   debouncedFunction(event.target.value);
 * }
 * */
