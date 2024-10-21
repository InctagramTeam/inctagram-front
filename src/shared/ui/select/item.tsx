import * as React from "react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, memo } from "react";

import { cn } from "@/shared/lib/utils";
import * as SelectRadix from "@radix-ui/react-select";

export const SelectItem = memo(
  forwardRef<
    ElementRef<typeof SelectRadix.Item>,
    ComponentPropsWithoutRef<typeof SelectRadix.Item>
  >(({ children, className, ...props }, ref) => {
    const classes = {
      item: cn(
        `h-[36px] flex cursor-default select-none items-center pl-2 pr-2 
  text-base font-normal text-Light-100 outline-none 
  focus:bg-Dark-100/30 focus:text-Primary-500 focus:shadow-sm hover:cursor-pointer`,
        className,
      ),
    };

    return (
      <SelectRadix.Item {...props} className={classes.item} ref={ref}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    );
  }),
);

SelectItem.displayName = "SelectItem";
