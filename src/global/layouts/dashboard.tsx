import React from "react";

import Header from "../navigation/header";
import Sidebar from "../navigation/sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[50] md:w-48 bg-muted">
        <div className="">
          <Sidebar className="mb-14" />
        </div>
      </div>
      <div className="md:pl-48">
        <Header />
      </div>
      <main className="md:pl-48 py-24 max-w-7xl">{children}</main>
    </div>
  );
};

export default DashboardLayout;
