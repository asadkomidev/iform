"use client";

import { Legend, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartDataType } from "@/types/response/form";
import { reshapeChartData } from "../functions/reshape-chart-data";

type Props = {
  data: ChartDataType[];
};

const chartConfig = {
  responseCount: {
    label: "Response Count",
    color: "hsl(var(--chart-1))",
  },
  option: {
    label: "Option",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} as ChartConfig;

export function SingleAnswerChart({ data }: Props) {
  const dataFill = reshapeChartData(data);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <Legend verticalAlign="top" height={36} className="" />
        <Pie data={dataFill} dataKey="responseCount" label nameKey="option" />
      </PieChart>
    </ChartContainer>
  );
}
