import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// for merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
