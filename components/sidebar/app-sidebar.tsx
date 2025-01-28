"use client";

import * as React from "react";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarLinks } from "@/constants/sidebarLinks";
import HeaderLogo from "./header-logo";
import NavProgess from "./nav-progress";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <HeaderLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavProgess />
        <NavUser user={sidebarLinks.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
