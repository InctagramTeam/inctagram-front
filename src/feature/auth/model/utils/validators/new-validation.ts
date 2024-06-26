import { z, ZodArray, ZodEffects, ZodNumber, ZodObject, ZodString, ZodType, ZodTypeAny } from 'zod'
// @ts-ignore
import { setPath } from 'set-get'

type InputType<DefaultType extends ZodTypeAny> = {
  (): ZodEffects<DefaultType>
  <ProvidedType extends ZodTypeAny>(schema: ProvidedType): ZodEffects<ProvidedType>
}

const stripEmpty = z.literal('').transform(() => undefined)

const preprocessIfValid = (schema: ZodTypeAny) => (val: unknown) => {
  const result = schema.safeParse(val)
  if (result.success) return result.data
  return val
}

/**
 * Преобразует любые пустые строки в `undefined` перед проверкой.
 * Таким образом, пустые строки не пройдут обязательную проверку,
 * что позволяет использовать `optional` для необязательных полей вместо `nonempty` для обязательных.
 * Если вы вызовете `zfd.text` без аргументов, то по умолчанию будет считаться, что поле является обязательной строкой.
 * Если вы хотите настроить схему, вы можете передать ее в качестве аргумента.
 */

export const text: InputType<ZodString> = (schema = z.string()) =>
  z.preprocess(preprocessIfValid(stripEmpty), schema) as any

/**
 * Приводит числовые строки к числам, преобразует пустые строки в `undefined` перед проверкой.
 * Если вы вызовете `zfd.number` без аргументов,
 * по умолчанию будет считаться, что поле является обязательным числом.
 * Если вы хотите настроить схему, вы можете передать ее в качестве аргумента.
 */
export const numeric: InputType<ZodNumber> = (schema = z.number()) =>
  z.preprocess(
    preprocessIfValid(
      z.union([
        stripEmpty,
        z
          .string()
          .transform(val => Number(val))
          .refine(val => !Number.isNaN(val)),
      ])
    ),
    schema
  ) as any

type CheckboxOpts = {
  trueValue?: string
}

/**
 * Превращает значение из поля чекбокса в булево значение,
 * но не требует, чтобы флажок был установлен.
 * Для чекбоксов с атрибутом `value` вы можете передать его в качестве опции `trueValue`.
 *
 * @example
 * ``ts''
 * const schema = zfd.formData({
 * defaultCheckbox: zfd.checkbox(),
 * checkboxWithValue: zfd.checkbox({ trueValue: "true" }),
 * mustBeTrue: zfd
 * .checkbox()
 * .refine((val) => val, "Please check this box")
 * });
 * });
 * ```
 */

export const checkbox = ({ trueValue = 'on' }: CheckboxOpts = {}) =>
  z.union([z.literal(trueValue).transform(() => true), z.literal(undefined).transform(() => false)])

export const file: InputType<z.ZodType<File>> = (schema = z.instanceof(File)) =>
  z.preprocess(val => {
    //Empty File object on no user input, so convert to undefined
    return val instanceof File && val.size === 0 ? undefined : val
  }, schema) as any

/**
 * Предварительно обрабатывает поле, где ожидается, что для одного и того же имени поля может присутствовать несколько значений.
 * и преобразует значение этого поля так, чтобы оно всегда было массивом.
 * Если вы не предоставите схему, то будет считаться, что поле представляет собой массив полей zfd.text.
 * и не потребует присутствия каких-либо значений.
 */
export const repeatable: InputType<ZodArray<any>> = (schema = z.array(text())) => {
  return z.preprocess(val => {
    if (Array.isArray(val)) return val
    if (val === undefined) return []
    return [val]
  }, schema) as any
}

/**
 * Удобная обертка для repeatable.
 * Вместо того чтобы передавать схему для всего массива, вы передаете схему для типа элемента.
 */
export const repeatableOfType = <T extends ZodTypeAny>(schema: T): ZodEffects<ZodArray<T>> =>
  repeatable(z.array(schema))

const entries = z.array(z.tuple([z.string(), z.any()]))

type FormDataLikeInput = {
  [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>
  entries(): IterableIterator<[string, FormDataEntryValue]>
}

type FormDataType = {
  <T extends z.ZodRawShape>(
    shape: T
  ): ZodEffects<ZodObject<T>, z.output<ZodObject<T>>, FormDataLikeInput>
  <T extends z.ZodTypeAny>(schema: T): ZodEffects<T, z.output<T>, FormDataLikeInput>
}

const safeParseJson = (jsonString: string) => {
  try {
    return JSON.parse(jsonString)
  } catch {
    return jsonString
  }
}

export const json = <T extends ZodTypeAny>(schema: T): ZodEffects<T> =>
  z.preprocess(
    preprocessIfValid(z.union([stripEmpty, z.string().transform(val => safeParseJson(val))])),
    schema
  )

const processFormData = preprocessIfValid(
  // Мы избегаем использования `instanceof` здесь, потому что в разных средах
  // не обязательно будут иметь `FormData` или `URLSearchParams`.
  z
    .any()
    .refine(val => Symbol.iterator in val)
    .transform(val => [...val])
    .refine((val): val is z.infer<typeof entries> => entries.safeParse(val).success)
    .transform((data): Record<string, unknown | unknown[]> => {
      const map: Map<string, unknown[]> = new Map()
      for (const [key, value] of data) {
        if (map.has(key)) {
          map.get(key)!.push(value)
        } else {
          map.set(key, [value])
        }
      }

      return [...map.entries()].reduce(
        (acc, [key, value]) => {
          return setPath(acc, key, value.length === 1 ? value[0] : value)
        },
        {} as Record<string, unknown | unknown[]>
      )
    })
)

export const preprocessFormData = processFormData as (formData: unknown) => Record<string, unknown>

/**
 * Этот помощник занимает место `z.object` в корне вашей схемы.
 * Он оборачивает вашу схему в `z.preprocess`, который извлекает все данные из `FormData`
 * и преобразует его в обычный объект.
 * Если `FormData` содержит несколько записей с одинаковым именем поля,
 * он автоматически превратит это поле в массив.
 */
export const formData: FormDataType = (shapeOrSchema: any): any =>
  z.preprocess(
    processFormData,
    shapeOrSchema instanceof ZodType ? shapeOrSchema : z.object(shapeOrSchema)
  )
