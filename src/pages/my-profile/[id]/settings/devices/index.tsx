import React from "react";

import { TabContent, getSettingsLayout } from "@/shared";

const Devices = () => {
  return (
    <TabContent className={"flex"} value={"devices"}>
      <div>Devices</div>
    </TabContent>
  );
};

Devices.getLayout = getSettingsLayout;
export default Devices;
