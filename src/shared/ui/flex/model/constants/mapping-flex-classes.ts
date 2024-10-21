// mapping types in classes
import {
  FlexAlignItemsType,
  FlexDirectionType,
  FlexGapType,
  FlexJustifyContent,
  FlexWrapType,
} from "@/shared/ui/flex/model/types/flex-type";

export const JUSTIFY_CLASSES: Record<FlexJustifyContent, string> = {
  center: "justify-center",
  end: "justify-end",
  spaceAround: "justify-around",
  spaceBetween: "justify-between",
  spaceEvenly: "justify-evenly",
  start: "justify-start",
} as const;

export const FLEX_WRAP_CLASSES: Record<FlexWrapType, string> = {
  no_wrap: "flex-nowrap",
  wrap: "flex-wrap",
  wrap_reverse: "flex-wrap-reverse",
} as const;

export const ALIGN_CLASSES: Record<FlexAlignItemsType, string> = {
  baseline: "items-baseline",
  center: "items-center",
  end: "items-end",
  start: "items-start",
  stretch: "items-stretch",
} as const;

export const DIRECTION_CLASSES: Record<FlexDirectionType, string> = {
  col_reverse: "flex-col-reverse",
  column: "flex-col",
  row: "flex-row",
  row_reverse: "flex-row-reverse",
} as const;

export const GAP_CLASSES: Record<FlexGapType, string> = {
  1: "gap-[1px]",
  2: "gap-[2px]",
  3: "gap-[3px]",
  4: "gap-[4px]",
  6: "gap-[6px]",
  8: "gap-[8px]",
  10: "gap-[10px]",
  12: "gap-[12px]",
  14: "gap-[14px]",
  16: "gap-[16px]",
  18: "gap-[18px]",
  20: "gap-[20px]",
  22: "gap-[22px]",
  24: "gap-[24px]",
  26: "gap-[26px]",
  28: "gap-[28px]",
  30: "gap-[30px]",
  34: "gap-[34px]",
  40: "gap-[40px]",
  50: "gap-[50px]",
  60: "gap-[60px]",
  70: "gap-[70px]",
  80: "gap-[80px]",
} as const;
