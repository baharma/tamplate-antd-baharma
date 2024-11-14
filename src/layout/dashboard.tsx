import React, { ReactNode } from "react";
import SideBar from "../component/sideBar";
import { dataSidebar } from "../data/sidebar";

type PageProps = {
  children: ReactNode;
};

const Dashboard: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="h-full  flex flex-row ">
      <div className="basis-1/6 h-screen bg-gray-800 overflow-y-auto ">
        <SideBar menu={dataSidebar} />
      </div>
      <div className="basis-1/1">{children}</div>
    </div>
  );
};

export default Dashboard;
