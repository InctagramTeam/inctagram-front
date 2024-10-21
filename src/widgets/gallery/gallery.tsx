"use client";

import { ReactNode } from "react";

import { ReturnComponent } from "@/shared";
import { clsx } from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Gallery = ({ children, className }: Props): ReturnComponent => {
  return <ul className={clsx(`grid`, className)}>{children}</ul>;
};

Gallery.displayName = "Gallery";
