"use client"

import * as React from "react"

import { ChartBar, LayoutDashboard, Link, Link2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "Rebeca",
    email: "rebeca@email.com",
    avatar:
      "https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg",
  },
  navMain: [
    {
      title: "Posts",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Projetos",
      url: "/links",
      icon: Link2,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: ChartBar,
    },
  ],
}

export function AppSidebar({...props}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <Link className="size-5!" />
                <span className="text-base font-semibold">IFMS</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}