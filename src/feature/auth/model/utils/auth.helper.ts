import { IAuthResponse, ITokens } from "@/entities/user/model/types/user.types";
import Cookies from "js-cookie";

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken as string);
};

export const saveToStorage = (data: IAuthResponse) => {
  // saveTokensStorage(data?)
  // при регистрации (логинизации) записываем user-a в LS
  localStorage.setItem("user", JSON.stringify(data));
};

export const removeTokensStorage = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
