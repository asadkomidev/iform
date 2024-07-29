"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { format } from "date-fns";
import { reshapeChartData } from "../../forms/functions/form-functions";

type Props = {
  days: {
    date: Date;
    submissions: number;
    visits: number;
  }[];
};

const chartConfig = {
  submissions: {
    label: "Submissions",
    color: "hsl(210, 100%, 70%)",
  },
  visits: {
    label: "Visits",
    color: "hsl(210, 100%, 50%)",
  },
} satisfies ChartConfig;

export function OverviewBarChart({ days }: Props) {
  return (
    <Card className="md:w-2/3 shadow-none">
      <CardHeader>
        <CardTitle>Performance</CardTitle>
        <CardDescription>
          Showing the number of submissions and visits <br /> for the specified
          period
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart accessibilityLayer data={days}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <div className="flex min-w-[130px] items-center text-xs text-muted-foreground">
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                      </div>
                    </div>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <Bar
              dataKey="submissions"
              fill="var(--color-submissions)"
              stackId="a"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="visits"
              fill="var(--color-visits)"
              stackId="a"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
