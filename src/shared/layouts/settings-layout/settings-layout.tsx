import React, { ReactElement, ReactNode, useState } from "react";

import {
  AppRoutes,
  BaseAppLayout,
  LayoutContextProvider,
  ReturnComponent,
  TabSwitcher,
} from "@/shared";
import { TABS } from "@/shared/constants/base";
import { PageWrapper } from "@/widgets";
import { useRouter } from "next/router";

export const SettingsLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("general");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(AppRoutes.PROFILE + AppRoutes.PROFILE_SETTINGS + `/${value}`);
  };

  return (
    <PageWrapper paddingBlock={"36px"} title={"Settings | Instagram"}>
      <TabSwitcher
        defaultValue={"general"}
        onValueChange={handleTabChange}
        rootClassName={"min-w-full"}
        tabs={TABS}
        value={activeTab}
      >
        {children}
      </TabSwitcher>
    </PageWrapper>
  );
};

export const getSettingsLayout = (
  pageComponent: ReactElement,
): ReturnComponent => {
  return (
    <LayoutContextProvider>
      <BaseAppLayout>
        <SettingsLayout>{pageComponent}</SettingsLayout>
      </BaseAppLayout>
    </LayoutContextProvider>
  );
};
