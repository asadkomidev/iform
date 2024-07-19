"use client";

import { useGetStats } from "../../hooks/use-get-stats";
import KpiCard from "./kpi-card";

type Props = {};

const KpiDisplay = (props: Props) => {
  const data = useGetStats();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <KpiCard
        title="Total visits"
        value={data.data?.visits.toLocaleString() || ""}
        description="All time visits"
        loading={data.isLoading}
      />
      <KpiCard
        title="Total submissions"
        value={data.data?.submissions.toLocaleString() || ""}
        description="All time submissions"
        loading={data.isLoading}
      />

      <KpiCard
        title="Submission rate"
        value={data.data?.submissionRate.toLocaleString() + "%" || ""}
        description="Percentage of submissions"
        loading={data.isLoading}
      />
      <KpiCard
        title="Bounce rate"
        value={data.data?.bounceRate.toLocaleString() + "%" || ""}
        description="Percentage of bounces"
        loading={data.isLoading}
      />
    </div>
  );
};

export default KpiDisplay;
