import React from "react";
import KpiDisplay from "./components/kpi/kpi-display";

type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="p-4">
      <KpiDisplay />
    </div>
  );
};

export default Overview;
