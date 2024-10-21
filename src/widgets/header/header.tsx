import { memo } from "react";

import { Flex, ReturnComponent } from "@/shared";
import { HeaderMenu, Logo, NotificationProps } from "@/widgets/header/ui";
import { clsx } from "clsx";

type Props = {
  className?: string;
  isAuth?: boolean;
  logout?: () => void;
  notifications?: NotificationProps[];
};

export const Header = memo(
  ({
    className,
    isAuth,
    logout,
    notifications,
    ...props
  }: Props): ReturnComponent => {
    const classes = {
      header: clsx(
        `fixed inset-0 border-b-[1px] shadow-sm shadow-Dark-300 border-Dark-100 w-full h-[60px] py-[15px] z-10 bg-Dark-700`,
        className,
      ),
      wrapper: `max-w-[1250px] w-full mx-auto px-[15px]`,
    };

    return (
      <header className={classes.header}>
        <Flex
          className={classes.wrapper}
          gap={"20"}
          items={"center"}
          justify={"spaceBetween"}
        >
          <Logo />
          <HeaderMenu
            isAuth={isAuth}
            logout={logout}
            notifications={notifications}
            {...props}
          />
        </Flex>
      </header>
    );
  },
);
