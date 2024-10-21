import { createProfileRequest } from "@/entities/profile";
import profileApi from "@/entities/profile/api/profile-api";
import { ErrorResponse } from "@/feature";
import { useTranslation } from "@/shared";
import { toast } from "@/shared/ui/toast/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  const { t } = useTranslation();

  const mutation = useMutation({
    mutationFn: async ({
      firstName,
      lastName,
      userName,
      dateOfBirth,
      city,
      aboutMe,
    }: createProfileRequest) => {
      return profileApi.updateProfile({
        firstName,
        lastName,
        userName,
        dateOfBirth,
        city,
        aboutMe,
      });
    },
    mutationKey: ["update-profile"],
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          description: error.response.data.errorsMessages[0].message,
          title: "error",
          variant: "destructive",
        });
      }
    },
    onSuccess: (_) => {
      toast({
        description: t.notifications.profileUpdated,
        title: "Success",
        variant: "default",
      });
    },
  });

  return mutation;
};
