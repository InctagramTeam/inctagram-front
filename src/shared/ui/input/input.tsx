import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  useId,
  useRef,
  useState,
} from 'react'

import { CloseIcon, EyeIcon, EyeOffIcon, SearchIcon } from '@/shared/assets/icons'
import { EMPTY_STRING } from '@/shared/constants'
import { mergeRefs, useTranslation } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { Text } from '@/shared/ui'
import { clsx } from 'clsx'

export type InputProps = {
  disabled?: boolean
  /** Чтобы задать стили отдельно, для элементов html разметки снаружи достучаться до них <--
   * Пример использования:
   * <Input
   *    ref={inputRef}
   *   labelProps={{ className: `text-blue-700` }} // --> стили зададаться для label
   *   divContainerProps={{ className: `text-blue-700` }}
   *   className={`w-full max-w-[330px]`} --> стили зададаться для:<div {...divContainerProps} className={classNames.root}>
   *   label={'Username'}
   *   type={'text'}
   * />
   */
  divContainerProps?: ComponentProps<'div'>
  errorMessage?: string
  inputProps?: ComponentProps<'input'>
  label?: string
  labelProps?: ComponentProps<'label'>
  /** Обратный вызов, который вызывается при нажатии на кнопку очистки
   * Если не указан, очищает внутреннее значение через ref и вызывает onValueChange с пустой строкой
   */
  onClearInput?: () => void
  onValueChange?: (value: string) => void
  /** Т.к мы делаем компоненты универсальными и нам нужны все возможные пропсы, которые мы можем передать в нативный элемент,
   * т.e html тег, то мы используем тип ComponentPropsWithoutRef<‘input’> и в дженерике указываем для какого именно тэга
   */
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      divContainerProps = {},
      errorMessage = EMPTY_STRING,
      id,
      inputProps = {},
      label = EMPTY_STRING,
      labelProps = {},
      onChange,
      onClearInput,
      onValueChange,
      placeholder,
      type = 'search',
      ...rest
    },
    /** Так как используем react-hook-form, он работает через рефы, то должны принимать ref */
    forwardedRef
  ): ReturnComponent => {
    const { t } = useTranslation()
    const generatedId = useId()
    const finalId = id ?? generatedId

    /** Чтобы получить доступ к инпуту: inputRef */
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    /** Чтобы передать несколько ссылок (ref) на инпут нужно их скомбинировать в finalRef */
    const finalRef = mergeRefs([forwardedRef, inputRef])

    const [revealPassword, setRevealPassword] = useState(false)

    const isRevealPasswordButtonShown = type === 'password'
    const isSearchField = type === 'search'
    const isClearInputButtonShown = isSearchField

    const finalType = getFinalType(type, revealPassword)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }
    /**
     * Вызывается при нажатии на кнопку для показа/скрытия пароля.
     * Она инвертирует состояние revealPassword, указывающее, должен ли пароль быть видимым.
     */
    function handleToggleShowPassword() {
      setRevealPassword((prevState: boolean) => !prevState)
    }
    /**
     * Вызывается при нажатии на кнопку ("Х") для очистки введенных данных в инпуте
     * Она сначала вызывает переданный колбэк onClearInput, если он был передан, а затем
     * очищает значение инпута и вызывает колбэк onValueChange, передавая ему пустую строку
     */
    function handleClearInput() {
      if (onClearInput) {
        return onClearInput()
      }

      if (!inputRef.current) {
        return
      }
      inputRef.current.value = EMPTY_STRING
      onValueChange?.(EMPTY_STRING)
    }

    const classNames = {
      clearInputButton: clsx(
        `_ClearInput_ unset absolute right-[12px] top-1/2 flex -translate-y-1/2 transform
                cursor-pointer items-center text-Light-100 transition-colors delay-150 ease-in-out
                focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500
                focus:ring-1 focus:ring-opacity-70 focus:ring-offset-1 focus:ring-offset-Primary-500`,
        disabled && `cursor-not-allowed text-Dark-100/60`
      ),
      error: clsx(
        errorMessage && `_Error_ text-small-text-12 !text-Danger-500 mt-1 `,
        divContainerProps?.className
      ),
      input: clsx(
        `Input relative w-full h-full min-h-[36px] p-[6px_12px_6px_12px] text-regular-text-16 text-Light-900
        bg-transparent border-none rounded-sm ring-1 shadow-sm shadow-Dark-300 ring-Dark-100 outline-1
        outline-Dark-100
        focus:outline-none focus:transition-all duration-150 easy-in-out focus:ring-1
        focus:ring-offset-Primary-500 focus:opacity-60 focus:text-Light-100 focus:shadow-sm focus:shadow-Light-500
        focus-visible:outline-none focus-visible:ring-1 focus-visible:offset-1
        focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-500
        active:not:disabled:text-Light-100 active:not:disabled:outline
        active:not:disabled:outline-1 active:not:disabled:outline-Light-100
        hover:not:disabled:outline hover:not:disabled:outline-1
        hover:not:disabled:outline-text-Light-900
        hover:not:focus-visible:outline-1 hover:not:focus-visible:outline-text-Light-900
        file:border-0 file:bg-transparent file:font-inter disabled:cursor-not-allowed disabled:opacity-50`,
        disabled && `text-Dark-100`,
        [type],
        type === 'password' && `pr-[42px]`,
        type === 'search' && 'px-[42px]'
      ),
      inputWrapper: clsx(`_FieldContainer_ relative w-full text-regular-text-16 text-Light-900`),
      label: clsx(
        `_Label_ mb-[1px] text-Dark-100 text-regular-text-14 text-Light-900`,
        { [`text-Dark-100`]: disabled },
        labelProps?.className,
        disabled && `text-Dark-300 active:not:disabled:text-Light-100 disabled:cursor-not-allowed`
      ),
      root: clsx(`_Root_  w-full min-w-[200px] text-regular-text-16 text-Light-900`, className),
      searchIcon: clsx(
        `_LeadingIcon_ absolute text-Light-900 top-1/2 bottom-1/2 -left-3 transform -translate-t-1/2
      w-[20px] h-[20px] ml-[12px] p-0 bg-transparent border-o outline-0 ring-0
      focus-visible:text-Light-100 focus-visible:outline focus-visible:outline-2
      focus-visible:outline-Primary-50
      active:not:disabled:text-Light-100
      `,
        disabled && `text-Dark-300 active:not:disabled:text-Light-100 disabled:cursor-not-allowed`
      ),
      showPasswordButton: clsx(
        `_ShowPassword_ rounder-[0.25rem] duration-300 transition-color text-Light-100 absolute bottom-1/2 right-[12px] top-1/2
              h-[24px] w-[24px] -translate-y-1/2 transform border-0 bg-transparent
              p-0 outline-0 ring-0 hover:text-Light-900 focus:opacity-60
              focus:shadow-sm focus:shadow-Primary-500 focus:outline-none
              focus:ring-1 focus:ring-opacity-70 focus:ring-offset-1 focus:ring-offset-Primary-500`,
        disabled &&
          `active:not:disabled:text-Light-100 cursor-not-allowed text-Dark-300 disabled:cursor-not-allowed`
      ),
    }

    return (
      <div {...divContainerProps} className={classNames.root}>
        {label && (
          <Text
            {...labelProps}
            asComponent={'label'}
            className={classNames.label}
            htmlFor={finalId}
            variant={'regular_text_16'}
          >
            {label}
          </Text>
        )}
        <div className={classNames.inputWrapper}>
          {isSearchField && (
            <div aria-hidden className={`absolute left-[3%] top-1/4`}>
              <SearchIcon
                className={classNames.searchIcon}
                onClick={() => inputRef.current?.focus()}
              />
            </div>
          )}
          <input
            {...rest}
            {...inputProps}
            className={classNames.input}
            disabled={disabled}
            id={finalId}
            onChange={handleChange}
            placeholder={placeholder}
            ref={finalRef}
            type={finalType}
            value={rest.value}
          />
          {isRevealPasswordButtonShown && (
            <button
              aria-controls={finalId}
              aria-label={revealPassword ? t.button.password.hide : t.button.password.show}
              aria-pressed={revealPassword}
              className={classNames.showPasswordButton}
              disabled={disabled}
              onClick={handleToggleShowPassword}
              type={'button'}
            >
              {revealPassword ? <EyeOffIcon aria-hidden /> : <EyeIcon aria-hidden />}
            </button>
          )}
          {isClearInputButtonShown && (
            <button
              aria-controls={finalId}
              aria-label={t.button.clearField}
              className={classNames.clearInputButton}
              disabled={disabled}
              onClick={handleClearInput}
              type={'button'}
            >
              <CloseIcon className={`text-Primary-500`} height={20} width={20} />
            </button>
          )}
        </div>
        <Text className={classNames.error} role={'alert'} variant={'error_text_12'}>
          {errorMessage}
        </Text>
      </div>
    )
  }
)

/**
 * Для определения конечного типа инпута в компоненте Input. Она принимает два аргумента:
 * type (тип инпута) и showPassword (флаг, указывающий, должен ли пароль быть видимым).
 * Если тип инпута равен 'password' и пароль должен быть видимым (showPassword === true),
 * функция возвращает 'text', в противном случае она возвращает исходный тип инпута.
 * Это позволяет динамически изменять тип инпута для отображения или скрытия введенного текста в поле пароля
 */
function getFinalType(
  type: ComponentProps<'input'>['type'],
  showPassword: boolean
): ComponentProps<'input'>['type'] {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
