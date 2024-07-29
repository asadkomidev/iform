"use client";

import { SiFormspree } from "react-icons/si";
import { MdVisibility, MdAdsClick } from "react-icons/md";
import { FcMultipleInputs } from "react-icons/fc";
import { TbArrowBounce } from "react-icons/tb";

import { Card } from "@/components/ui/card";
import React from "react";
import KpiCard from "./kpi-card";
import { KpisOverviewDataType } from "@/types/response/overview";
import { Eye } from "lucide-react";
import KpiRate from "./kpi-rate";
import KpiRateCircle from "./kpi-rate-circle";

type Props = {
  kpis: KpisOverviewDataType;
};

export default function Kpis({ kpis }: Props) {
  const {
    totalForms,
    totalVisits,
    totalSubmissions,
    submissionRate,
    bounceRate,
  } = kpis;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <KpiCard
        title="Forms"
        value={totalForms.toLocaleString()}
        icon={SiFormspree}
        label="Shows total forms"
      />
      <KpiCard
        title="Visits"
        value={totalVisits.toLocaleString()}
        icon={MdVisibility}
        label="Shows total visits"
      />
      <KpiCard
        title="Submissions"
        value={totalSubmissions.toLocaleString()}
        icon={MdAdsClick}
        label="Shows total submissions"
      />

      {/* <KpiRate
        label="Submissions Rate"
        value={
          parseFloat(submissionRate?.toFixed(0) || "0").toLocaleString() + "%"
        }
      /> */}
      <KpiRateCircle title="Submissions Rate" value={submissionRate} />
      <KpiRateCircle title="Bounce Rate" value={bounceRate} />
    </div>
  );
}
