"use client";

import { ReturnComponent } from "@/shared";
import { Gallery, GalleryImage } from "@/widgets";
import { GalleryImageType } from "@/widgets/gallery";

const items: GalleryImageType[] = [];

for (let i = 0; i < 8; i++) {
  items.push({ alt: "photo", src: "/man.png" });
}

export const ProfileGallery = (): ReturnComponent => {
  return (
    <Gallery className={"profile-bottom-gallery_ grid grid-cols-4 gap-[12px]"}>
      {items.map((item, index) => (
        <li key={index}>
          <GalleryImage {...item} />
        </li>
      ))}
    </Gallery>
  );
};
