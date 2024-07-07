import { LayoutDashboard, LineChart } from "lucide-react";

export const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    label: "Overview",
    icon: LineChart,
    href: "/",
    color: "text-blue-500",
  },
];

export const NAVIGATION_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Link 1",
    href: "/",
  },
  {
    label: "Link 2",
    href: "/",
  },
] as const;

export const FOOTER_ITEMS = {
  Items: [
    {
      name: "Item 1",
      href: "#",
    },
    {
      name: "Item 2",
      href: "#",
    },
    {
      name: "Item 3",
      href: "#",
    },
  ],
  Links: [
    { name: "Link 1", href: "/" },
    { name: "Link 2", href: "/" },
    { name: "Link 3", href: "/" },
  ],
};
