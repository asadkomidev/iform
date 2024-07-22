"use client";

import { RecentSubmissionsType } from "@/types/response/form";
import { formatDistance } from "date-fns";
import React from "react";

type Props = {
  data: RecentSubmissionsType;
};

export default function RecentCard({ data }: Props) {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center justify-between w-full gap-4 py-1">
        <div className="w-full">
          <span className="text-sm text-muted-foreground">{data.id}</span>
        </div>
        <div className="w-full text-end text-sm text-muted-foreground">
          {data.submittedAt &&
            formatDistance(data.submittedAt, new Date(), {
              addSuffix: true,
            })}
        </div>
      </div>
    </div>
  );
}
