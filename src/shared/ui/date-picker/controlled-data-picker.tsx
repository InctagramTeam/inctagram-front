"use client";
import * as React from "react";
import { ComponentProps, useId } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import {
  AuthRoutes,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  cn,
  useTranslation,
} from "@/shared";
import { CalendarIcon, CalendarOutlineIcon } from "@/shared/assets/icons";
import { Calendar, CalendarProps } from "@/shared/ui/date-picker/calendar";
import { format, isDate } from "date-fns";
import Link from "next/link";

export type DatePickerProps = {
  calendarClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  id?: string;
  label?: string;
  labelProps?: ComponentProps<"label">;
  name?: string;
  onOpenChange?: (value: boolean) => void;
  // onValueChange: (value: string) => void
  open?: boolean;
  textTrigger?: string;
  triggerClassName?: string;
  /** value, onValueChange и ref нужны для нативного инпута, чтобы можно было использовать react-hook-form */
  value: Date;
} & CalendarProps;

type Props<T extends FieldValues> = Omit<DatePickerProps, "value"> &
  UseControllerProps<T>;

export const ControlledDataPicker = <T extends FieldValues>({
  calendarClassName,
  control,
  defaultValue,
  id,
  label,
  name,
  onOpenChange,
  open,
  rules,
  labelProps = {},
  shouldUnregister,
  textTrigger,
  triggerClassName,
  ...rest
}: Props<T>) => {
  const {
    field: { disabled, onBlur, onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  const classes = {
    button: cn(
      `h-auto py-[6px] px-[12px] gap-[24px] border border-Dark-300 !border-solid rounded-[2px] 
        transition-colors duration-300
        hover:bg-Dark-500 hover:!text-Light-100 hover:border-Dark-100 hover:translate-y-0
        active:!bg-Dark-500 active:!text-Light-100
        focus:!bg-Dark-500 focus:border-transparent focus:ring-opacity-100 focus:ring-offset-Primary-700 focus:ring-2
        focus-visible:bg-Dark-500 focus-visible:border-transparent focus-visible:ring-offset-Primary-700`,
      disabled && "!bg-Dark-500 !text-Light-900 pointer-events-none",
      error?.message && "!text-Danger-500 !bg-Dark-500 border-Danger-500",
      triggerClassName,
    ),
    calendar: cn(
      `border-[1px] !border-Dark-300 bg-Dark-500 rounded-[2px] text-Light-100`,
    ),
    error: cn(`!text-Danger-500 text-small-text-12`),
    label: cn(
      `inline !text-Light-900 text-regular-text-14 text-left`,
      labelProps?.className,
      disabled && "text-Dark-100",
    ),
    popoverContent: cn(`w-[300px] p-0 !border-none`, calendarClassName),
    triggerIcon: cn(
      `h-[24px] w-[24px] fill-Light-100`,
      error?.message && `fill-Danger-500`,
    ),
  };

  const { t } = useTranslation();

  const generatedId = useId();
  const buttonId = id ?? generatedId;
  const errorId = `${buttonId}-error`;

  return (
    <div className={"flex flex-col items-start"}>
      <Popover onOpenChange={onOpenChange} open={open}>
        {label && (
          <Text
            {...labelProps}
            asComponent={"label"}
            className={classes.label}
            htmlFor={buttonId}
            variant={"regular_text_16"}
          >
            {label}
          </Text>
        )}
        <PopoverTrigger asChild>
          <Button
            className={classes.button}
            disabled={disabled}
            fullWidth
            id={buttonId}
            variant={"text"}
          >
            {isDate(value) ? format(value, "dd/MM/yyyy") : defaultValue}
            {open ? (
              <CalendarIcon className={classes.triggerIcon} />
            ) : (
              <CalendarOutlineIcon className={classes.triggerIcon} />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={classes.popoverContent}>
          <Calendar
            className={classes.calendar}
            mode={"single"}
            onSelect={onChange}
            selected={value}
          />
        </PopoverContent>
        {error?.message && (
          <span
            aria-labelledby={buttonId}
            className={classes.error}
            id={errorId}
            role={"alert"}
          >
            {error.message + " "}
            {isDate(value) && (
              <Text
                asComponent={Link}
                className={classes.error}
                href={AuthRoutes.PRIVACY}
                variant={"small-link_12"}
              >
                {t.pages.privacyPolice.title}
              </Text>
            )}
          </span>
        )}
      </Popover>
    </div>
  );
};
