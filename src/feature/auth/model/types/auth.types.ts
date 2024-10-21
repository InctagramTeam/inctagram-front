import { UserProfile } from "@/entities/user/model/types/user.types";

export interface RegisterSchema {
  error?: string;
  isLoading?: boolean;
  password: string;
  rememberMe?: boolean;
  userName: string;
}

// ----------------------
/** Me запрос -- url: '/auth/me' */
export type MeResponse = {
  createdAt: string;
  email: string;
  emailIsConfirm: boolean;
  id: number;
  profile: UserProfile;
  updatedAt: string;
  userName: string;
};

/** Error */
export type ErrorResponse = {
  response?: {
    data?: {
      errorsMessages?: [{ field: string; message: string }];
    };
  };
};
/** SignUp */
export type SignUpRequest = {
  email: string;
  password: string;
  rememberMe?: boolean;
  userName: string;
};

export type SignUpResponse = {
  avatar: string;
  created: string;
  description?: string;
  email: string;
  id: string;
  isEmailVerified: boolean;
  name: string;
  status: string;
  updated: string;
};

/** OAuthGoogleParams -- url: 'auth/google/login' */
export type OAuthGoogleParams = {
  code: string;
};

export type OAuthGoogleResponse = {
  accessToken?: string;
  email?: string;
} & Partial<ErrorResponse>;

/** SignIn */
export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
  email: string;
  password: string;
  rememberMe?: boolean;
  status?: string;
};

/** CheckRecoveryCode -- url: '/auth/check-recovery-code' */
export type CheckRecoveryCodeArgs = {
  recoveryCode: string;
};

/** ConfirmEmail url: '/auth/registration-confirmation' */
export type ConfirmEmailArgs = {
  confirmationCode: string;
};

/** NewPassword -- url: '/auth/new-password'*/
export type NewPasswordRequestArgs = {
  newPassword: string;
};

export type NewPasswordArgs = {
  code: string;
  newPassword: string;
};

/** RecoveryPassword -- url: '/auth/password-recovery' */
export type RecoveryPasswordArgs = {
  email: string;
  recaptchaValue: string;
};

/** ResendRecoveryPassword -- url: '/auth/resend-recovery-code' */
export type Email = {
  email: string;
};
