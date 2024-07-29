"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", visits: 186, submissions: 80 },
  { month: "February", visits: 305, submissions: 200 },
  { month: "March", visits: 237, submissions: 120 },
  { month: "April", visits: 73, submissions: 190 },
  { month: "May", visits: 209, submissions: 130 },
  { month: "June", visits: 214, submissions: 140 },
];

const chartConfig = {
  visits: {
    label: "Visits",
    color: "hsl(210, 100%, 80%)",
  },
  submissions: {
    label: "Submissions",
    color: "hsl(210, 100%, 50%)",
  },
} satisfies ChartConfig;

export function LineChartDisplay() {
  const show = true;
  return (
    <Card className="shadow-none rounded-lg border-none bg-transparent ">
      <CardContent className="w-full px-0 md:px-4 pt-12">
        <ChartContainer
          config={chartConfig}
          className="bg-transparent h-[200px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            {!show && <CartesianGrid strokeDasharray="3 3" />}
            {!show && (
              <YAxis
                type="number"
                dataKey="visits"
                axisLine={false}
                tickLine={false}
                tickCount={6}
                tick={{ fill: "var(--color-text)" }}
                style={{
                  marginLeft: -12,
                }}
              />
            )}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="visits"
              type="monotone"
              stroke="var(--color-visits)"
              strokeWidth={1}
              dot={false}
            />
            <Line
              dataKey="submissions"
              type="monotone"
              stroke="var(--color-submissions)"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
