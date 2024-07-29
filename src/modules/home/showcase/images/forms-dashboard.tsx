import Image from "next/image";
import React from "react";

import DashboardImage2 from "@/public/dash-light.svg";
import DashboardImage3 from "@/public/main.svg";

type Props = {};

export default function FormsDashboard({}: Props) {
  return (
    <div>
      <div className="">
        <div data-hide-on-theme="dark" className="">
          <Image
            src={DashboardImage2}
            alt="dashboard"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div data-hide-on-theme="light" className="">
          <Image
            src={DashboardImage3}
            alt="dashboard"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
      {/* <div className=""></div> */}
    </div>
  );
}
