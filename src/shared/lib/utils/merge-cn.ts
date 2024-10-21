import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Функция для сложения классов tailwind для того, чтобы предотвратить конфликты стилей
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
