import { ReactNode } from "react";

import { TypeComponentAuthFields } from "@/app/providers/model/types/role-type";
import { useUser } from "@/entities/user";
import { useRouter } from "next/router";

/** Пример использования:
 * указываем страницы её роль: MyProfilePage.isOnlyUser = true (см.файл страницы my-profile)
 * */

type Props = { children: ReactNode } & TypeComponentAuthFields;

/** Проверка роли пользователя: зарегистрированный user или admin? */
const CheckRole = (props: Props) => {
  const {
    Component: { isOnlyAdmin, isOnlyUser },
    children,
  } = props;

  /** Проверка авторизован ли я? authMe() */
  const { user } = useUser();

  const router = useRouter();

  /** Проверка: если не Юзер и не Админ */
  if (!isOnlyAdmin && !isOnlyUser) {
    return <>{children}</>;
  }

  if (user?.isAdmin) {
    return <>{children}</>;
  }

  /** Проверка на Админа */

  if (isOnlyAdmin) {
    router.pathname !== "/404" && router.replace("/404");

    return null;
  }

  /** Проверка на авторизованного юзера */
  const isUser = user && !user.isAdmin;

  if (isUser && isOnlyUser) {
    return <>{children}</>;
  } else {
    router.pathname !== "/auth" && router.replace("/auth/sign-in");

    return null;
  }
};

export default CheckRole;
