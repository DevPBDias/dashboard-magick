import React from "react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "../ui/sidebar";
import { Progress } from "../ui/progress";

const NavProgess = () => {
  return (
    <SidebarGroup>
      <div className="flex justify-between items-center w-full -ml-2">
        <SidebarGroupLabel>Plan usage</SidebarGroupLabel>
      </div>
      <SidebarMenu>
        <div className="flex justify-between items-center w-full">
          <Progress className="w-3/4" value={33} />
          <p className="text-xs font-medium">33%</p>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavProgess;
