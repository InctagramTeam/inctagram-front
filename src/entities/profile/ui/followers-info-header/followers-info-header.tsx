import { Profile } from "@/entities/profile";
import { AppRoutes, Button, Text, useTranslation } from "@/shared";
import { FlexRow } from "@/shared/ui/flex";
import Cookies from "js-cookie";
import Link from "next/link";

type Props = {
  profile?: Profile;
};

export const FollowersInfoHeader = ({ profile }: Props) => {
  const { t } = useTranslation();
  const userId = Cookies.get("userId");

  return (
    <FlexRow
      className={`Header_ w-full items-center justify-between gap-[100px] p-[0_0_20px_0px]`}
    >
      <Text asComponent={"h2"} className={`title`} variant={"H1"}>
        {profile ? profile.firstName + " " + profile.lastName : "URL_Profile"}
      </Text>
      <Button
        asComponent={Link}
        className={`px-6 py-[6px]`}
        href={
          AppRoutes.PROFILE + userId + AppRoutes.PROFILE_SETTINGS + "/general"
        }
        variant={"secondary"}
      >
        Profile Settings
      </Button>
    </FlexRow>
  );
};
