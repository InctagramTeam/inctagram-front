import { useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormSetValue,
} from "react-hook-form";

type Args<T extends FieldValues> = {
  /** текущие значения полей формы */
  currentFormValues: T;
  /** тип, описывающий ошибки полей формы */
  errors: FieldErrors<T>;
  /** текущая локаль (язык) */
  locale?: string;
  /** функция для установки значений полей формы */
  setValue: UseFormSetValue<T>;
};
/**
 * Повторная валидация при изменении локали: если локаль изменяется, это может повлиять на текст ошибок валидации.
 * Например, если язык меняется с "английского" на "французский", текст ошибки должен быть переведен
 * Обновление значений полей: если при изменении локали поле содержит ошибку, useFormRevalidateWithLocale пересчитывает значение поля,
 * чтобы учесть новые условия валидации, заданные локалью
 * */
export const useFormRevalidateWithLocale = <T extends FieldValues>({
  currentFormValues,
  errors,
  locale,
  setValue,
}: Args<T>) => {
  useEffect(() => {
    Object.keys(currentFormValues).forEach((fieldName) => {
      if (fieldName in errors) {
        setValue(
          fieldName as Path<T>,
          currentFormValues[fieldName as keyof T],
          {
            shouldValidate: true,
          },
        );
      }
    });
  }, [locale]);
};
