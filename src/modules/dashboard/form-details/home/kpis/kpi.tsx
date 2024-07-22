import React from "react";
import KpiCard from "./kpi-card";
import KpiRate from "./kpi-rate";

type Props = {
  visits: number | null;
  submissions: number | null;
  submissionRate: number | null;
  bounceRate: number | null;
};

export default function Kpi({
  visits,
  submissions,
  submissionRate,
  bounceRate,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <KpiCard
        value={visits?.toLocaleString() || ""}
        title="Form Visits"
        label="Visitors"
      />
      <KpiCard
        value={submissions?.toLocaleString() || ""}
        title="Form Submissions"
        label="Submissions"
      />

      <KpiRate value={submissionRate || 0} title="Submission rate" />
      <KpiRate value={bounceRate || 0} title="Bounce rate" />
    </div>
  );
}
