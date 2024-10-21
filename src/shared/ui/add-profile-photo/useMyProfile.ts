import { userService } from "@/entities/user/api/user-api";
import { useQuery } from "@tanstack/react-query";

export const useMyProfile = () => {
  return useQuery({
    queryFn: async () => await userService.getProfile(),
    queryKey: ["myProfile"],
  });
};
