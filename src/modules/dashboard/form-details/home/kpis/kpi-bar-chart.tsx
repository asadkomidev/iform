"use client";

import { Bar, BarChart, Rectangle, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

type Props = {};

export default function KpiBarChart({}: Props) {
  return (
    <ChartContainer config={chartConfig} className="h-16 w-full">
      <BarChart
        accessibilityLayer
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        data={chartData}>
        <Bar
          dataKey="calories"
          fill="var(--color-calories)"
          radius={2}
          fillOpacity={0.2}
          activeIndex={3}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          hide
        />
      </BarChart>
    </ChartContainer>
  );
}

const chartConfig = {
  calories: {
    label: "Calories",
    color: "hsl(210, 100%, 70%)",
  },
} as ChartConfig;

const chartData = [
  {
    date: "2024-01-01",
    calories: 354,
  },
  {
    date: "2024-01-02",
    calories: 514,
  },
  {
    date: "2024-01-03",
    calories: 345,
  },
  {
    date: "2024-01-04",
    calories: 734,
  },
  {
    date: "2024-01-05",
    calories: 645,
  },
  {
    date: "2024-01-06",
    calories: 456,
  },
  {
    date: "2024-01-07",
    calories: 345,
  },
];
