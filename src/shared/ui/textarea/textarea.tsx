import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useId,
} from "react";

import { ReturnComponent, Text, cn } from "@/shared";

export type TextareaProps = {
  containerClassName?: string;
  errorMessage?: string;
  label?: string;
  onValueChange?: (value: string) => void;
  textareaClassName?: string;
} & ComponentPropsWithoutRef<"textarea">;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      disabled,
      errorMessage,
      id,
      label,
      onChange,
      onValueChange,
      ...rest
    },
    ref,
  ): ReturnComponent => {
    const classes = {
      error: cn(`!text-regular-text-14 block text-Danger-500`),
      label: cn(`block text-Light-900`, disabled && `text-Dark-100`),
      textarea: cn(
        `bg-Dark-500 placeholder-Light-900 px-[12px] py-[6px] outline-none rounded-[2px] border-[1px] border-Dark-100 resize-none w-full h-[84px] 
        transition-color duration-300 ease-in-out transition-border-color 
        disabled:placeholder-Dark-100
        active:border-Light-100`,
        errorMessage && `border-Danger-500 `,
        className,
      ),
      wrapper: cn(containerClassName),
    };

    const generatedId = useId();
    const finalId = id ?? generatedId;
    const errorId = `${finalId}-error`;

    const changeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      onValueChange?.(e.currentTarget.value);
    };

    return (
      <div className={classes.wrapper}>
        {label && (
          <label className={classes.label} htmlFor={finalId}>
            {label}
          </label>
        )}
        <textarea
          aria-describedby={errorId}
          className={classes.textarea}
          disabled={disabled}
          id={finalId}
          onChange={changeValueHandler}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <Text className={classes.error} id={errorId} role={"alert"}>
            {errorMessage}
          </Text>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
export { Textarea };
