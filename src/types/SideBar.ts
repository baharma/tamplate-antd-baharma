import { ReactNode } from "react";

export type MenuItemType = {
  label: string;
  link: string;
  icon: ReactNode;
  children?: MenuItemType[]; // Adding the optional children property
};

export type SideBarType = {
  menu: MenuItemType[];
};
