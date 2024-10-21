import React from "react";

import { TabContent, getSettingsLayout } from "@/shared";

const Management = () => {
  return (
    <TabContent className={"flex"} value={"management"}>
      <div>Management</div>
    </TabContent>
  );
};

Management.getLayout = getSettingsLayout;
export default Management;
