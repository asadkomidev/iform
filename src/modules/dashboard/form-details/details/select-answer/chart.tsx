"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
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
    label: "Responses",
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

export function SelectAnswerChart({ data }: Props) {
  const dataFill = reshapeChartData(data);
  return (
    <ChartContainer config={chartConfig} className="max-h-[200px]">
      <BarChart
        accessibilityLayer
        data={dataFill}
        layout="vertical"
        barSize={40}
        margin={{
          right: 16,
        }}>
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="responseCount" type="number" hide />
        <YAxis
          dataKey="option"
          type="category"
          allowDecimals={false}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          hide
        />

        <ChartTooltip
          content={<ChartTooltipContent cursor={false} indicator="line" />}
        />

        <Bar
          dataKey="responseCount"
          layout="vertical"
          fill="var(--color-responseCount)"
          className="h-24"
          radius={4}>
          <LabelList
            dataKey="responseCount"
            position="right"
            offset={8}
            className="fill-foreground"
            fontSize={12}
          />
          <LabelList
            dataKey="option"
            position="insideLeft"
            offset={8}
            className="fill-[--color-label] truncate"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
