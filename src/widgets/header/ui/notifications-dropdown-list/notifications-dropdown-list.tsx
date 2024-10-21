import * as React from "react";
import { ReactNode, memo } from "react";

import { Dropdown } from "@/shared/ui/dropdown-menu";

type Props = {
  alternativeText?: string;
  notifications?: NotificationProps[];
};

export type NotificationProps = {
  isNew?: boolean;
  longAgo: string;
  text: ReactNode;
  title: string;
};

export const NotificationsDropdownList = memo(
  ({ alternativeText, notifications }: Props) => {
    const classes = {
      alternativeText: `flex justify-center items-center h-full w-full text-center`,
      item: `flex-col w-full !items-start gap-0 cursor-auto relative py-[12px] outline-0
      hover:!text-Light-100 hover:!bg-transparent
      after:content-[""] after:h-[1px] after:bg-Dark-100 after:absolute after:top-0 after:left-0 after:right-[4px]`,
      longAgo: `text-small-text-12 text-Light-900`,
      new: `text-small-text-12 text-bold text-Primary-500`,
      subtitle: `text-sm-bold-14`,
      text: `text-regular-text-14`,
      wrapper: `pr-[4px] h-full w-full`,
    };

    return (
      <div className={classes.wrapper}>
        {notifications?.length ? (
          notifications.map((item, index) => (
            <Dropdown.Item className={classes.item} key={index}>
              <div>
                <span className={classes.subtitle}>{item.title}</span>
                {item.isNew && <span className={classes.new}>&nbsp;</span>}
              </div>
              <p className={classes.text}>{item.text}</p>
              <span className={classes.longAgo}>{item.longAgo}</span>
            </Dropdown.Item>
          ))
        ) : (
          <span className={classes.alternativeText}>{alternativeText}</span>
        )}
      </div>
    );
  },
);
