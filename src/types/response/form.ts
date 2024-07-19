import { getStatsAction } from "@/actions/form-actions";

export type GetStatsResponse = Awaited<ReturnType<typeof getStatsAction>>;
