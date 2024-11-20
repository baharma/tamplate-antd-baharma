import {
  DashboardOutlined,
  FileOutlined,
  CalendarOutlined,
  ProfileOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { MenuItemType } from "../types/SideBar";

export const dataSidebar: MenuItemType[] = [
  {
    label: "Dashboard",
    link: "/",
    icon: <DashboardOutlined />,
  },
  {
    label: "eCommerce",
    link: "/ecommerce",
    icon: <FileOutlined />,
    children: [
      {
        label: "Analytics",
        link: "/ecommerce/analytics",
        icon: <DashboardOutlined />,
      },
      {
        label: "Marketing",
        link: "/ecommerce/marketing",
        icon: <DashboardOutlined />,
      },
      { label: "CRM", link: "/ecommerce/crm", icon: <DashboardOutlined /> },
      {
        label: "Stocks",
        link: "/ecommerce/stocks",
        icon: <DashboardOutlined />,
      },
    ],
  },
  {
    label: "Calendar",
    link: "/calendar",
    icon: <CalendarOutlined />,
  },
  {
    label: "Profile",
    link: "/profile",
    icon: <ProfileOutlined />,
  },
  {
    label: "Tasks",
    link: "/tasks",
    icon: <FileOutlined />,
    children: [
      { label: "Today", link: "/tasks/today", icon: <CalendarOutlined /> },
      {
        label: "Upcoming",
        link: "/tasks/upcoming",
        icon: <CalendarOutlined />,
      },
    ],
  },
  {
    label: "Support",
    link: "/support",
    icon: <MailOutlined />,
    children: [
      { label: "Messages", link: "/support/messages", icon: <MailOutlined /> },
      { label: "Inbox", link: "/support/inbox", icon: <MailOutlined /> },
      { label: "Invoice", link: "/support/invoice", icon: <MailOutlined /> },
    ],
  },
];
