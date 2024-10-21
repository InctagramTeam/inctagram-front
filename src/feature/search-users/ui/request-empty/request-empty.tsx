"use client";

import { ReturnComponent, Text, useResponsive, useTranslation } from "@/shared";
import { clsx } from "clsx";

export const RequestEmpty = (): ReturnComponent => {
  const { sm } = useResponsive();
  const { t } = useTranslation();

  const classes = {
    text: "text-center block  text-Light-900",
  };

  return (
    <div className={sm ? "mt-[25px]" : "mt-[84px]"}>
      <Text
        asComponent={"h2"}
        className={clsx(classes.text, "mb-[6px]")}
        variant={"bold_text_14"}
      >
        {t.pages.search.empty}
      </Text>
      <Text className={classes.text} variant={"small-text-12"}>
        {t.pages.search.noRequests}
      </Text>
    </div>
  );
};
