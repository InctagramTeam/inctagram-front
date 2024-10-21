import React, {
  ComponentPropsWithoutRef,
  Ref,
  RefObject,
  forwardRef,
  useImperativeHandle,
} from "react";
import { default as ReCAPTCHA } from "react-google-recaptcha";
import { useForm } from "react-hook-form";

import { ForgotPasswordFormValues, forgotPasswordSchema } from "@/feature";
import {
  AuthRoutes,
  Button,
  ButtonSpinner,
  Card,
  ControlledInput,
  EMPTY_STRING,
  Recaptcha,
  ReturnComponent,
  Text,
  UseFormRef,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import Link from "next/link";

type Props = {
  className?: string;
  disabled?: boolean;
  isSent?: boolean;
  onSubmit: (formData: ForgotPasswordFormValues) => void;
  recaptchaChangeHandler: (value: null | string) => void;
  recaptchaRef: RefObject<ReCAPTCHA>;
} & Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;

export const ForgotPasswordForm = forwardRef(
  (
    props: Props,
    methodsRef: Ref<UseFormRef<ForgotPasswordFormValues> | null>,
  ): ReturnComponent => {
    const {
      className,
      disabled,
      isSent = false,
      onSubmit,
      recaptchaChangeHandler,
      recaptchaRef,
      ...rest
    } = props;
    const { locale, t } = useTranslation();
    const { xs } = useResponsive();

    const classes = {
      button: "mb-[30px] px-[24px] py-[6px]",
      form: clsx(
        "max-w-[380px] w-full p-[1.5rem] pb-[20px] self-start",
        xs && "max-w-full px-0 py-0 bg-transparent border-none rounded-0",
        className,
      ),
      hint: clsx("text-Light-900", isSent ? "mb-[24px]" : "mb-[17px]"),
      link: "mx-auto mb-[22px] !flex w-max",
    };

    const {
      clearErrors,
      control,
      formState: { errors },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<ForgotPasswordFormValues>({
      defaultValues: { email: EMPTY_STRING },
      mode: "onChange",
      resolver: zodResolver(forgotPasswordSchema(t)),
    });

    useImperativeHandle(methodsRef, () => ({
      clearErrors,
      reset,
      setError,
      setValue,
    }));
    useFormRevalidateWithLocale({
      currentFormValues: getValues(),
      errors,
      locale,
      setValue,
    });

    return (
      <Card
        asComponent={"form"}
        className={classes.form}
        {...rest}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text
          asComponent={"h1"}
          mb={"37px"}
          textAlign={"center"}
          variant={"H1"}
        >
          {t.pages.forgotPassword.title}
        </Text>
        <ControlledInput
          aria-describedby={"forgot-password-email-instructions"}
          aria-invalid={errors.email ? "true" : "false"}
          autoComplete={"email"}
          className={"mb-[7px]"}
          control={control}
          disabled={disabled}
          errorMessage={errors.email?.message}
          label={t.label.email}
          name={"email"}
          placeholder={t.placeholders.email}
          rules={{ required: true }}
          type={"email"}
        />
        <Text
          asComponent={"p"}
          className={classes.hint}
          id={"forgot-password-email-instructions"}
          variant={"regular-text-14"}
        >
          {t.pages.forgotPassword.hint}
        </Text>

        {isSent && (
          <Text
            asComponent={"p"}
            id={"forgot-password-email-instructions"}
            mb={"18px"}
            variant={"regular-text-14"}
          >
            {t.pages.forgotPassword.sent}
          </Text>
        )}

        {disabled ? (
          <ButtonSpinner
            className={"mb-6 h-[30px] w-[30px] min-w-full text-center"}
          />
        ) : (
          <Button
            className={classes.button}
            disabled={
              !getValues("recaptcha") ||
              !getValues("email") ||
              !!Object.keys(errors).length
            }
            fullWidth
            type={"submit"}
          >
            {isSent ? t.button.sendLinkAgain : t.button.sendLink}
          </Button>
        )}

        <Button
          asComponent={Link}
          className={classes.link}
          href={AuthRoutes.SIGN_IN}
          variant={"link"}
        >
          {t.button.backToSignIn}
        </Button>
        <Recaptcha
          errorMessage={errors?.recaptcha?.message}
          onChange={recaptchaChangeHandler}
          ref={recaptchaRef}
          wrapperClassName={"mx-auto"}
        />
      </Card>
    );
  },
);

ForgotPasswordForm.displayName = "ForgotPasswordForm";
