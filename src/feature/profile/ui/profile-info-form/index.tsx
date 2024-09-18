import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'
import Geonames from 'geonames.js'
import {
  Button,
  cn,
  ControlledDataPicker,
  ControlledInput,
  ControlledSelect,
  ControlledTextarea,
  EMPTY_STRING,
  ReturnComponent,
  UseFormRef,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileInfoFormValues, profileInfoSchema } from '../../model'

//TODO - получить с бека
const options = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
]

const geonames = Geonames({
  username: 'inctagram',
  lan: 'en',
  encoding: 'JSON',
})

type Props = {
  className?: string
  disabled?: boolean
  isSent?: boolean
  onSubmit: (formData: ProfileInfoFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const ProfileInfoForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<ProfileInfoFormValues> | null>): ReturnComponent => {
    // const { className, disabled, isSent = false,  } = props
    const { className, disabled, onSubmit, ...rest } = props
    const { locale, t } = useTranslation()
    const { xs } = useResponsive()
    const [options, setOptions] = useState([
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ])
    const [date, setDate] = useState<Date>()

    const classes = {
      button: 'mb-[30px] px-[24px] py-[6px]',
      form: cn(
        'flex flex-col gap-6 min-w-full w-full p-[1.5rem] pb-[20px] self-start',
        xs && 'max-w-full px-0 py-0 bg-transparent border-none rounded-0',
        className
      ),
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
    } = useForm<ProfileInfoFormValues>({
      defaultValues: { userName: EMPTY_STRING, firstName: EMPTY_STRING },
      mode: 'onChange',
      resolver: zodResolver(profileInfoSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ clearErrors, reset, setError, setValue }))
    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    useEffect(() => {
      geonames
        .countryInfo({})
        // .then(countries => {
        //   return geonames.children({ geonameId: countries.geonames[2].geonameId })
        // })
        // .then(states => {
        //   return geonames.children({ geonameId: states.geonames[3].geonameId })
        // })
        // .then(regions => {
        //   return geonames.children({ geonameId: regions.geonames[3].geonameId })
        // })
        .then(countries => {
          const res = countries.geonames.map((country: any) => {
            return { label: country.countryName, value: country.countryName }
          })

          setOptions(res)
          // console.log(countries)
        })
        .catch((err: any) => console.log(err))
    }, [])

    const handleChange = (dateChange: any) => {
      setValue('dateOfBirth', dateChange, {
        shouldDirty: true,
      })
      setDate(dateChange)
    }

    return (
      <div className={className}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} {...rest}>
          <ControlledInput
            aria-invalid={errors.userName ? 'true' : 'false'}
            autoComplete={'username'}
            control={control}
            disabled={disabled}
            errorMessage={errors.userName?.message}
            label={t.label.userName}
            name={'userName'}
            placeholder={t.placeholders.username}
            type={'text'}
            rules={{ required: true }}
            labelProps={{ className: `after:content-['*'] after:ml-0.5 after:text-red-500` }}
          />
          <ControlledInput
            aria-invalid={errors.firstName ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.firstName?.message}
            label={t.label.firstName}
            name={'firstName'}
            placeholder={t.placeholders.firstName}
            type={'text'}
            rules={{ required: true }}
            labelProps={{ className: `after:content-['*'] after:ml-0.5 after:text-red-500` }}
          />
          <ControlledInput
            aria-invalid={errors.lastName ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.lastName?.message}
            label={t.label.lastName}
            name={'lastName'}
            placeholder={t.placeholders.lastName}
            type={'text'}
            rules={{ required: true }}
            labelProps={{ className: `after:content-['*'] after:ml-0.5 after:text-red-500` }}
          />
          <ControlledDataPicker
            label={t.label.dateOfBirth}
            defaultValue={t.placeholders.dateOfBirth}
            control={control}
            name={'dateOfBirth'}
          />
          <div className="flex justify-between gap-6">
            <ControlledSelect
              control={control}
              label="Select your country"
              placeholder="Country"
              name="country"
              options={options}
              className="w-full"
            />
            <ControlledSelect
              control={control}
              label="Select your city"
              placeholder="City"
              name="city"
              options={options}
              className="w-full"
            />
          </div>
          <ControlledTextarea
            aria-invalid={errors.aboutMe ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.aboutMe?.message}
            label={t.label.aboutMe}
            name={'aboutMe'}
            placeholder={t.placeholders.aboutMe}
            rules={{ required: true }}
          />
          <div className="text-right">
            <Button
              className={classes.button}
              // disabled={!!Object.keys(errors).length ?? disabled}
              type={'submit'}
            >
              {t.button.save}
            </Button>
          </div>
        </form>
      </div>
    )
  }
)

ProfileInfoForm.displayName = 'ProfileInfoForm'
