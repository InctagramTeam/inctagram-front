"use client";

import { ReactNode, memo } from "react";

import { Avatar, AvatarFallback, AvatarImage, ReturnComponent } from "@/shared";

type Props = {
  bgColor?: string;
  children?: ReactNode;
  className?: string;
  src?: string;
  userName?: string;
};
export const UserAvatar = memo(
  ({ bgColor, children, className, src, userName }: Props): ReturnComponent => {
    return (
      <Avatar className={className}>
        <AvatarImage alt={"user-avatar"} src={src} />
        <AvatarFallback className={`${bgColor || "bg-Light-900"}`}>
          {children || userName?.[0] || "U"}
        </AvatarFallback>
      </Avatar>
    );
  },
);
