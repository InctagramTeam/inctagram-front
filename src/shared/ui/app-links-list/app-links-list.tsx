"use client";

import { cn, getIcon } from "@/shared";
import Link from "next/link";

type Props = {
  className?: string;
  items: AppProps[];
};

export type AppProps = {
  href: string;
} & Parameters<typeof Link>[0];

/**
 * Компонент AppList используется, чтобы выводить список ссылок с иконками приложений
 * Например, на страницах sign-in и sign-up, чтобы отобразить иконки сервисов, через которые можно зарегистрироваться / войти
 */
export const AppLinksList = ({ className, items }: Props) => {
  const classes = {
    items: cn(`flex gap-[60px] justify-center mb-[1.5rem]`, className),
    link: `block outline-none rounded-[2px] duration-150
    hover:text-Light-100 hover:translate-y-[-5px]
    active:opacity-70 focus-visible:ring-2`,
  };

  return (
    <ul className={classes.items}>
      {items.map((item, index) => {
        const { className, href, ...rest } = item;

        return (
          <li key={index}>
            <Link className={cn(classes.link, className)} href={href} {...rest}>
              {getIcon(href, false)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
