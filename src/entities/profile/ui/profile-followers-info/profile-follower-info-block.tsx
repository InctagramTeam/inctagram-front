"use client";

import { User } from "@/entities/profile";
import { FollowersInfoHeader } from "@/entities/profile/ui/followers-info-header/followers-info-header";
import { ProfileInfoDescription } from "@/entities/profile/ui/profile-info-description/profile-info-description";

type Props = {
  userInfo?: User;
};

export const ProfileFollowerInfoBlock = ({ userInfo }: Props) => {
  return (
    <div
      className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}
    >
      <FollowersInfoHeader profile={userInfo?.profile} />
      <ProfileInfoDescription aboutMe={userInfo?.profile?.aboutMe} />
    </div>
  );
};
