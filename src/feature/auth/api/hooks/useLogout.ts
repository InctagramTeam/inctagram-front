import authApi from "@/feature/auth/api/auth-api";
import { AuthRoutes } from "@/shared";
import { toast } from "@/shared/ui/toast/use-toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      return authApi.logout();
    },
    mutationKey: ["logout"],
    onError: (error: AxiosError) => {
      if (error) {
        toast({
          description: error.message,
          title: "error",
          variant: "destructive",
        });
      }
    },
    onSuccess: (_) => {
      router.replace(AuthRoutes.SIGN_IN);
    },
  });
};
