import { ErrorResponse, NewPasswordArgs } from "@/feature";
import authApi from "@/feature/auth/api/auth-api";
import { toast } from "@/shared/ui/toast/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useCreateNewPassword = () => {
  const mutation = useMutation({
    mutationFn: async (formData: NewPasswordArgs) => {
      return authApi.createNewPassword(formData.code, formData.newPassword);
    },
    mutationKey: ["create-new-password"],
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          description: error.response.data.errorsMessages[0].message,
          title: "error",
          variant: "destructive",
        });
      }
    },
    onSuccess: (data) => {},
  });

  return mutation;
};
