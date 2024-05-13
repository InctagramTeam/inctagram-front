import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  useId,
  useRef,
  useState,
} from 'react'
import { clsx } from 'clsx'

import { Text } from '@/components/ui/text/text'
import { CloseIcon, EyeIcon, EyeOffIcon, SearchIcon } from '@/assets/icons'
import { mergeRefs } from '@/utils/merge-refs'

export type TextFieldProps = {
  // У нас компонент инпут, но он вложен в див и если нам понадобится, например, добавить марджины
  // там где используется инпут,
  // то надо будет присвоить ему класс и применить стили
  // Но класс надо будет передать именно в контейнер, то есть див, а не в сам инпут,
  // чтобы марджины были у инпута,
  // лэйбла и у всего того что в контейнере)
  // Пример:
  // <FormTextField
  // inputProps={{ className: s.formTextField }} // этот класс пойдет в инпут
  // className = {'divClassName'} // этот пойдет в див
  // /> -- То же самое с labelProps
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  disabled?: boolean
  labelProps?: ComponentProps<'label'>
  /**
   * Обратный вызов, который вызывается при нажатии на кнопку очистки
   * Если не указан, очищает внутреннее значение через ref и вызывает onValueChange с пустой строкой
   */
  onClearInput?: () => void
  onValueChange?: (value: string) => void
  // Так как мы делаем компоненты универсальными и нам нужны все возможные пропсы,
  // которые мы можем передать в нативный элемент,
  // то есть html тег, то мы используем тип ComponentPropsWithoutRef<‘input’>
  // и в дженерике указываем для какого именно тэга
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage = 'Error',
      id,
      disabled,
      label,
      labelProps,
      onChange,
      onClearInput,
      onValueChange,
      placeholder,
      type = 'text',
      ...restProps
    },
    forwardedRef
  ) => {
    const generatedId = useId()
    const finalId = id ?? generatedId

    const inputRefOrTextareaRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
    const finalRef = mergeRefs([forwardedRef, inputRefOrTextareaRef])
    const [revealPassword, setRevealPassword] = useState(false)

    const isRevealPasswordButtonShown = type === 'password'
    const isSearchField = type === 'search'
    const isClearInputButtonShown = isSearchField

    const finalType = getFinalType(type, revealPassword)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    function handleToggleShowPassword() {
      setRevealPassword((prevState: boolean) => !prevState)
    }

    function handleClearInput() {
      if (onClearInput) {
        return onClearInput()
      }

      if (!inputRefOrTextareaRef.current) {
        return
      }
      inputRefOrTextareaRef.current.value = ''
      onValueChange?.('')
    }

    const classNames = {
      error: clsx(
        errorMessage && `_Error_ text-small-text-12 text-Danger-500 mt-1 `,
        containerProps?.className
      ),
      input: clsx(
        `Input relative w-full h-full min-h-[36px] p-[6px_42px_6px_12px] text-regular-text-16 text-Light-900
        bg-transparent border-none rounded-sm ring-1 px-[40px] shadow-sm shadow-Dark-300 ring-Dark-100 outline-1
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
        type === 'text' || (type === 'email' && `pr-3`)
      ),
      inputContainer: clsx(`_FieldContainer_ relative w-full text-regular-text-16 text-Light-900`),
      label: clsx(
        `_Label_ mb-[1px] text-Dark-100 text-regular-text-14 text-Light-900`,
        { [`text-Dark-100`]: disabled },
        labelProps?.className
      ),
      searchIcon: clsx(
        `_LeadingIcon_ absolute text-Light-900 top-1/2 bottom-1/2 left-0 transform -translate-t-1/2
      w-[20px] h-[20px] ml-[12px] p-0 bg-transparent border-o outline-0 ring-0
      focus-visible:text-Light-100 focus-visible:outline focus-visible:outline-2
      focus-visible:outline-Primary-50
      active:not:disabled:text-Light-100
      `,
        disabled && `text-Dark-100`
      ),
      root: clsx(`_Root_  w-full min-w-[200px] text-regular-text-16 text-Light-900`, className),
    }

    return (
      <div {...containerProps} className={classNames.root}>
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
        <div className={classNames.inputContainer}>
          {isSearchField && (
            <div className={`top-1/4 absolute left-[3%]`}>
              <SearchIcon
                className={classNames.searchIcon}
                onClick={() => inputRefOrTextareaRef.current?.focus()}
              />
            </div>
          )}
          <input
            className={classNames.input}
            id={finalId}
            onChange={handleChange}
            placeholder={placeholder}
            ref={finalRef}
            type={finalType}
            {...restProps}
          />
          {isRevealPasswordButtonShown && (
            <button
              className={clsx(
                `_ShowPassword_ cursor-pointer absolute top-1/2 right-0 bottom-1/2
              transform -translate-y-1/2 w-[20px] h-[20px] mr-[12px] p-0 bg-transparent border-0
              rounder-[0.25rem] outline-0 ring-0 focus:outline-none
              focus:ring-1 focus:ring-offset-1 focus:ring-opacity-70
              focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500`,
                disabled && `text-Dark-100 active:not:disabled:text-Light-100`
              )}
              onClick={handleToggleShowPassword}
              type={'button'}
            >
              {revealPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          )}
          {isClearInputButtonShown && (
            <button
              className={clsx(
                `_ClearInput_ absolute flex items-center text-Light-100 unset cursor-pointer top-1/2
                right-[12px] transform -translate-y-1/2 transition-colors ease-in-out delay-150
                focus:ring-1 focus:ring-offset-1 focus:ring-opacity-70
                focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500`,
                disabled && `text-Dark-100`
              )}
              onClick={handleClearInput}
              type={'button'}
            >
              <CloseIcon height={20} width={20} className={`text-Primary-500`} />
            </button>
          )}
        </div>

        <Text className={classNames.error} variant={'error_text_12'} style={{ color: 'red' }}>
          {errorMessage}
        </Text>
      </div>
    )
  }
)

function getFinalType(
  type: ComponentProps<'input'>['type'],
  showPassword: boolean
): ComponentProps<'input'>['type'] {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
