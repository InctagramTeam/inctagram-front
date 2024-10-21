import { ReactNode } from "react";

export type NavLink = {
  className?: string;
  disabled?: boolean;
  handleClick?: () => void;
  href: string;
  icon?: ReactNode;
  name: string;
};
