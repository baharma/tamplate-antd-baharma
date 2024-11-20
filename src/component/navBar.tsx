import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Input, Space, Menu } from "antd";
const { Search } = Input;

const Navbar = () => {
  const onSearch = (value: string) => {
    console.log("Search value:", value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/settings">Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="p-2 bg-black w-full flex justify-between items-center">
      <div className="flex-grow pr-2">
        <Search
          className="w-full"
          placeholder="Type to search..."
          onSearch={onSearch}
        />
      </div>

      <div className="flex-none w-auto">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a
            onClick={(e) => e.preventDefault()}
            className="flex items-center space-x-2"
          >
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
              <span className="text-sm text-white">baharma</span>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
