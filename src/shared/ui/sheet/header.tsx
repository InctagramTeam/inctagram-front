import * as React from "react";

import { ReturnComponent } from "@/shared/types";
import { clsx } from "clsx";
export const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): ReturnComponent => (
  <div
    className={clsx(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);

SheetHeader.displayName = "SheetHeader";
