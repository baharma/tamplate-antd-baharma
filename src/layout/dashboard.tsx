import React, { ReactNode, useEffect, useState } from "react";
import SideBar from "../component/sideBar";
import { dataSidebar } from "../data/sidebar";
import Navbar from "../component/navBar";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type PageProps = {
  children: ReactNode;
};

const Dashboard: React.FC<PageProps> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setIsSidebarVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div
        className={`fixed md:relative transform transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } w-4/5 md:w-1/6 h-screen bg-gray-800 z-20`}
      >
        <SideBar menu={dataSidebar} />

        {/* Toggle Button */}
        <div className="absolute top-12 right-[-15px] sm:block md:hidden">
          <Button
            onClick={toggleSidebar}
            icon={isSidebarVisible ? <LeftOutlined /> : <RightOutlined />}
          />
        </div>
      </div>
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarVisible ? "ml-4/5 md:ml-1/6" : "ml-0"
        }`}
      >
        <Navbar />
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
