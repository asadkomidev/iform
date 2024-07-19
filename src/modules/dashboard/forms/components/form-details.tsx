"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { FormType } from "@/backend/database/types";

import VisitButton from "./visit-btn";
import ShareButton from "./share-button";
import KpiCard from "../../overview/components/kpi/kpi-card";

type Props = {
  visits: number | null;
  submissions: number | null;
  submissionRate: number | null;
  bounceRate: number | null;
  form: FormType;
};

const FormDetails = ({
  visits,
  submissions,
  submissionRate,
  bounceRate,
  form,
}: Props) => {
  return (
    <>
      <div className="flex items-center justify-between h-10 py-8 mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/forms">Forms</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/forms/${form.id}`}>
                {form.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-4">
          <VisitButton shareUrl={form.url || ""} />
          <ShareButton shareUrl={form.url || ""} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <KpiCard
          title="Visits"
          value={visits?.toLocaleString() || ""}
          description="All time visits"
        />
        <KpiCard
          title="Submissions"
          value={submissions?.toLocaleString() || ""}
          description="All time submissions"
        />

        <KpiCard
          title="Submission rate"
          value={submissionRate?.toLocaleString() + "%" || ""}
          description="Percentage of submissions"
        />
        <KpiCard
          title="Bounce rate"
          value={bounceRate?.toLocaleString() + "%" || ""}
          description="Percentage of bounces"
        />
      </div>
    </>
  );
};

export default FormDetails;
