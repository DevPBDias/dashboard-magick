import {
  Bot,
  FileQuestion,
  Settings2,
  SquareTerminal,
  User2,
} from "lucide-react";

export const sidebarLinks = {
  user: {
    name: "User",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Projects",
      url: "/",
      icon: Bot,
      items: [
        {
          title: "My Projects",
          url: "/projects",
        },
      ],
    },
    {
      title: "Settings",
      url: "/",
      icon: Settings2,
      items: [
        {
          title: "Funnels",
          url: "/settings/funnels",
        },
        {
          title: "Traffic channels",
          url: "/settings/traffic-channels",
        },
        {
          title: "Offer sources",
          url: "/settings/offers-sources",
        },
      ],
    },
    {
      title: "Account",
      url: "/account",
      icon: User2,
    },
    {
      title: "Tutorials",
      url: "/tutorials",
      icon: FileQuestion,
    },
  ],
};
