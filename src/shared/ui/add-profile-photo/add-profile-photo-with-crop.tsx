import { UserAvatar } from "@/entities/profile";
import ImageOutlineIcon from "@/shared/assets/icons/ImageOutlineIcon";
import { AddAvatarButton } from "@/shared/ui/add-profile-photo/add-avatar-button/addAvatarButton";
import { DeleteAvatarButton } from "@/shared/ui/add-profile-photo/delete-avatar-button/delete-avatar-button";
import { useMyProfile } from "@/shared/ui/add-profile-photo/useMyProfile";

import "react-image-crop/dist/ReactCrop.css";

// TODO Обсудить со Стасом как лучше передать аватар
export const AddProfilePhotoWithCrop = () => {
  const { data: myProfile } = useMyProfile();
  const avatarUrl = myProfile?.profile.url;

  return (
    <div className={"flex flex-col gap-y-6 py-[1.5rem]"}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar
          bgColor={"bg-Dark-500"}
          className={`h-full w-full`}
          src={avatarUrl || ""}
        >
          <ImageOutlineIcon />
        </UserAvatar>
        {avatarUrl && <DeleteAvatarButton />}
      </div>
      <AddAvatarButton />
    </div>
  );
};
