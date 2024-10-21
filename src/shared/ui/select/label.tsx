import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as React from "react";

import { ReturnComponent } from "@/shared/types";
import * as SelectRadix from "@radix-ui/react-select";

export const SelectLabel = forwardRef<
  ElementRef<typeof SelectRadix.Label>,
  ComponentPropsWithoutRef<typeof SelectRadix.Label>
>(
  ({ children, className, ...props }, ref): ReturnComponent => (
    <SelectRadix.Label
      {...props}
      className={"py-1.5 pl-8 pr-2 text-sm font-semibold"}
      ref={ref}
    >
      {children}
    </SelectRadix.Label>
  ),
);

SelectLabel.displayName = "SelectLabel";
