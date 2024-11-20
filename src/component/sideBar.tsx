import { Menu } from "antd";
import { MenuItemType, SideBarType } from "../types/SideBar";
import { DashboardOutlined } from "@ant-design/icons";

const SideBar = ({ menu }: { menu: SideBarType["menu"] }) => {
  const renderMenuItems = (items: MenuItemType[]): any[] =>
    items.map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          key: item.link,
          label: item.label,
          icon: item.icon || <DashboardOutlined />,
          children: renderMenuItems(item.children),
        };
      } else {
        return {
          key: item.link,
          label: item.label,
          icon: item.icon || <DashboardOutlined />,
        };
      }
    });

  return (
    <div className="h-full w-full bg-gray-800 text-white">
      <div className="p-5 font-bold text-lg border-b border-gray-700">
        Baharma Admin
      </div>
      <Menu
        items={renderMenuItems(menu)}
        mode="inline"
        theme="dark"
        className="bg-gray-800"
      />
    </div>
  );
};

export default SideBar;
