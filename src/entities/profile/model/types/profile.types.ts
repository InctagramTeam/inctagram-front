export type createProfileRequest = {
  aboutMe: string;
  city: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  userName: string;
};

export type Profile = {
  aboutMe: string;
  avatarId: string;
  city: string;
  country: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
};

export type User = {
  createdAt: string;
  email: string;
  emailIsConfirm: boolean;
  id: number;
  profile: Profile;
  updatedAt: string;
  userName: string;
};
