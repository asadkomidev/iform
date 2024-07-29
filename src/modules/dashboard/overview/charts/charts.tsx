import { OverviewBarChart } from "./bar-chart";
import { ChartOverviewDataType } from "@/types/response/overview";
import { OverviewPieChart } from "./pie-chart";
import { OverviewAreaChart } from "./area-chart";

type Props = {
  data: ChartOverviewDataType;
};

export default function Charts({ data }: Props) {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <OverviewBarChart days={data.days} />
        <OverviewPieChart topForms={data.topForms} />
      </div>
      <OverviewAreaChart data={data.rate} />
    </div>
  );
}
