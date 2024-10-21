import * as React from "react";
import { memo } from "react";

import { Language } from "@/feature/translate/model/helpers/get-languages";
import { EMPTY_STRING, SelectItem, cn, useResponsive } from "@/shared";
import Image from "next/image";

type Props = {
  sidebarItems: Language[];
};

export const LanguageSelectionList = memo(({ sidebarItems }: Props) => {
  const { sm } = useResponsive();

  const classes = {
    flag: "w-[20px] h-[20px] object-contain",
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      !sm && ``,
      sm && "max-w-max",
    ),
    itemInner: "flex gap-[12px] text-inherit",
  };

  const renderSidebarItem = (item: Language) => {
    const notMobileSize = !sm && item.textValue;
    const altText = item.textValue ?? EMPTY_STRING;
    const imagePath = `/flags/${item.value}.png`;

    return (
      <SelectItem className={classes.item} key={item.value} {...item}>
        <div className={classes.itemInner}>
          <Image
            alt={altText}
            aria-hidden
            className={classes.flag}
            height={20}
            priority
            src={imagePath}
            width={20}
          />
          {notMobileSize}
        </div>
      </SelectItem>
    );
  };

  return <>{sidebarItems.map(renderSidebarItem)}</>;
});
