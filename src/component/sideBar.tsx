import { Menu } from "antd";
import { MenuItemType, SideBarType } from "../types/SideBar";
import { DashboardOutlined } from "@ant-design/icons";

const SideBar = ({ menu }: { menu: SideBarType["menu"] }) => {
  const renderMenuItems = (items : MenuItemType[]) => items.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <Menu.SubMenu key={item.link} title={item.label} icon={item.icon || <DashboardOutlined />}>
          {renderMenuItems(item.children)} 
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.link} icon={item.icon || <DashboardOutlined />}>
          {item.label}
        </Menu.Item>
      );
    }
  });

  return (
    <div className="h-full w-full bg-gray-800 text-white">
      <div className="p-5 font-bold text-lg border-b border-gray-700">
        Baharma Admin
      </div>
      <Menu mode="inline" theme="dark" className="bg-gray-800">
        {renderMenuItems(menu)}
      </Menu>
    </div>
  );
};

export default SideBar;
