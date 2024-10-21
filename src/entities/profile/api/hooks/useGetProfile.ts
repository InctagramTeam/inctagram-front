import profileApi from "@/entities/profile/api/profile-api";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = (id: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["profile", id],
    queryFn: async () => await profileApi.getProfile(id),
  });

  return { data, isError, isLoading };
};
