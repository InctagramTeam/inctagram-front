import { QueryClient } from '@tanstack/react-query'

/** queryClient - Хранит "кэши" запросов */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /** Отключаем при смене вкладки браузера новый запро за даннымаи */
      refetchOnWindowFocus: false,
    },
  },
})
