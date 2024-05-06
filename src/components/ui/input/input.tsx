import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/components/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from 'src/components/ui/input/input.module.scss'

export type TextFieldProps = {
  clearField?: () => void
  errorMessage?: string
  label?: string
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

type Props = TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ className, clearField, errorMessage, label, type = 'text', ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const { t } = useTranslation()

    const isPasswordType = type === 'password'

    const isSearchType = type === 'search'

    const isShowClearButton = isSearchType && clearField && rest.value

    const finalType = getFinalType(type, showPassword)

    const passwordHandler = () => setShowPassword(prev => !prev)

    const classes = {
      input: clsx(s.input, isSearchType && s.search, errorMessage && s.error),
      label: clsx(s.label, rest.disabled && s.disabled),
      root: clsx(s.root, className),
      searchIcon: clsx(s.searchIcon, rest.disabled && s.disabledIcon),
    }

    return (
      <div className={classes.root}>
        <Typography as={'label'} className={classes.label} variant={'body2'}>
          {label}
          <div className={s.container}>
            <input
              className={classes.input}
              ref={ref}
              type={isPasswordType ? finalType : 'text'}
              {...rest}
            />
            {isPasswordType && (
              <button
                className={s.button}
                disabled={rest.disabled}
                onClick={passwordHandler}
                type={'button'}
              >
                {showPassword ? <Icon name={'eyeOff'} /> : <Icon name={'eye'} />}
              </button>
            )}
            {isSearchType && (
              <Icon className={classes.searchIcon} height={20} name={'search'} width={20} />
            )}
            {isShowClearButton && (
              <button
                className={s.button}
                disabled={rest.disabled}
                onClick={clearField}
                type={'button'}
              >
                <Icon height={16} name={'cross'} width={16} />
              </button>
            )}
          </div>
        </Typography>
        {!!errorMessage && (
          <Typography className={s.errorMessage} variant={'caption'}>
            {t(`validate.${errorMessage}`)}
          </Typography>
        )}
      </div>
    )
  }
)

function getFinalType(type: TextFieldProps['type'], showPassword: boolean) {
  if (type === 'password' && !showPassword) {
    return 'password'
  }

  return 'text'
}
