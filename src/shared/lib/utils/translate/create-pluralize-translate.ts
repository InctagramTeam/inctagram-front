/** В зависимости от локали определит язык и вернет правильное окончание: во множественном или единственном числе */
export const createPluralizeTranslate = (locale: string) => {
  const rules = new Intl.PluralRules(locale);

  const pluralize = (count: number) => {
    return rules.select(count);
  };

  return pluralize;
};
export const pluralizeRu = createPluralizeTranslate("ru");
export const pluralizeEn = createPluralizeTranslate("en");
