import {
  getKpisAction,
  getOverviewStatsAction,
} from "@/actions/overview-actions";
import Overview from "@/modules/dashboard/overview/overview";

type Props = {
  searchParams: { from: string; to: string; slug: string };
};

const Page = async ({ searchParams }: Props) => {
  const from = searchParams.from || "";
  const to = searchParams.to || "";

  const overview = await getOverviewStatsAction(from, to);
  const stats = await getKpisAction();

  return <Overview data={overview} kpis={stats} />;
};

export default Page;
