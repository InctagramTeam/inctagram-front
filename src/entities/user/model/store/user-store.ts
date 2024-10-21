import { IUser } from "@/entities/user/model/types/user.types";
import { getStoreLocalStorage } from "@/shared/lib/utils/locale-storage/get-local-storage";
import { create } from "zustand";

interface IUserStoreType {
  isLoading?: boolean;
  user: IUser | null;
}

export const useUser = create<IUserStoreType>((set, get) => ({
  isLoading: false,
  // initialState
  user: getStoreLocalStorage("user"),
}));
