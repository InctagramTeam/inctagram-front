import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { Textarea, TextareaProps } from "./textarea";

type Props<T extends FieldValues> = Omit<
  TextareaProps,
  "id" | "onChange" | "value"
> &
  Omit<UseControllerProps<T>, "defaultValue" | "disabled">;

const ControlledTextarea = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <Textarea {...rest} {...field} errorMessage={error?.message} id={name} />
  );
};

ControlledTextarea.displayName = "ControlledTextarea";
export { ControlledTextarea };
