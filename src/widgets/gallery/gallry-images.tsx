"use client";

import { EMPTY_STRING, ReturnComponent } from "@/shared";
import { clsx } from "clsx";
import Image, { ImageProps } from "next/image";

type Props = {
  alt?: string;
  className?: string;
  src: string;
};

export type GalleryImageType = Omit<ImageProps, keyof Props> & Props;
export const GalleryImage = ({
  alt,
  className,
  src,
  ...rest
}: GalleryImageType): ReturnComponent => (
  <Image
    alt={alt ?? EMPTY_STRING}
    className={clsx(`h-full w-full contain-content`, className)}
    height={228}
    src={src} // `/man.png`
    width={234}
    {...rest}
  />
);

GalleryImage.displayName = "GalleryImage";
