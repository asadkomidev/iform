import React from "react";

import Kpis from "./kpis/kips";
import Charts from "./charts/charts";
import Banner from "./banner/banner";
import OverviewHeader from "./header/overview-header";
import {
  ChartOverviewDataType,
  KpisOverviewDataType,
} from "@/types/response/overview";

type Props = {
  data: ChartOverviewDataType;
  kpis: KpisOverviewDataType;
};

const Overview = ({ data, kpis }: Props) => {
  return (
    <div className="p-4 w-full">
      <OverviewHeader />
      <Banner />
      <Kpis kpis={kpis} />
      <Charts data={data} />
    </div>
  );
};

export default Overview;
