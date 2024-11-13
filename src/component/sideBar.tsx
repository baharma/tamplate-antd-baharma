import { Menu } from 'antd';
import {SideBarType} from '../types/SideBar'
import { CalendarOutlined, DashboardOutlined, FileOutlined, MailOutlined, ProfileOutlined } from '@ant-design/icons';



const SideBar = ({ menu }: { menu: SideBarType['menu'] }) => {
    return (
        <div className="h-full w-full bg-gray-800 text-white">
        <div className="p-5 font-bold text-lg border-b border-gray-700">
          TailAdmin
        </div>
        <Menu mode="inline" theme="dark" className="bg-gray-800">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.SubMenu key="sub1" title="eCommerce" icon={<FileOutlined />}>
            <Menu.Item key="2">Analytics</Menu.Item>
            <Menu.Item key="3">Marketing</Menu.Item>
            <Menu.Item key="4">CRM</Menu.Item>
            <Menu.Item key="5">Stocks</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="6" icon={<CalendarOutlined />}>
            Calendar
          </Menu.Item>
          <Menu.Item key="7" icon={<ProfileOutlined />}>
            Profile
          </Menu.Item>
          <Menu.SubMenu key="sub2" title="Tasks" icon={<FileOutlined />}>
            <Menu.Item key="8">Today</Menu.Item>
            <Menu.Item key="9">Upcoming</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub3" title="Support" icon={<MailOutlined />}>
            <Menu.Item key="10">Messages</Menu.Item>
            <Menu.Item key="11">Inbox</Menu.Item>
            <Menu.Item key="12">Invoice</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
};


export default SideBar;
