/** Получаем данные с LS по ключу (имени) */
export const getStoreLocalStorage = (name: string) => {
  if (typeof localStorage !== "undefined") {
    const ls = localStorage.getItem(name);

    return ls ? JSON.parse(ls) : null;
  }

  return null;
};
