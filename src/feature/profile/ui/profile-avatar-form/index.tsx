import React, { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { UserAvatar } from '@/entities/profile'
import {
  Button,
  ReturnComponent,
  UseFormRef,
  cn,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'

type Props = {
  className?: string
  disabled?: boolean
  isSent?: boolean
  onSubmit: (formData: any) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const ProfileAvatarForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<any> | null>): ReturnComponent => {
    const { className, disabled, onSubmit, ...rest } = props
    const { locale, t } = useTranslation()
    const { xs } = useResponsive()

    const classes = {
      button: 'mb-[30px] px-[24px] py-[6px]',
      form: cn('flex flex-col justify-center mt-[48px] gap-6', className),
    }

    const {
      clearErrors,
      control,
      formState: { errors },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<any>({
      // defaultValues: { userName: EMPTY_STRING, firstName: EMPTY_STRING },
      // mode: 'onChange',
      // resolver: zodResolver(profileSettingsSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ clearErrors, reset, setError, setValue }))
    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    return (
      <div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} {...rest}>
          <UserAvatar className={`h-[200px] w-[200px]`} />
          <Button
            className={classes.button}
            // disabled={!!Object.keys(errors).length ?? disabled}
            type={'submit'}
            variant={'outline'}
          >
            {t.button.addProfilePhoto}
          </Button>
        </form>
      </div>
    )
  }
)

ProfileAvatarForm.displayName = 'ProfileAvatarForm'
