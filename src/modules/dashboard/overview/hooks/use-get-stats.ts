"use client";

import { getStatsAction } from "@/actions/form-actions";
import { useQuery } from "@tanstack/react-query";

export const useGetStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });
};
