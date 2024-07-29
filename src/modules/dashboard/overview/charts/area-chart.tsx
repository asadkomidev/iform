"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Props = {
  data: {
    date: Date;
    submissions: number;
    visits: number;
    submissionRate: number;
    bounceRate: number;
  }[];
};

const chartConfig = {
  submissionRate: {
    label: "Submission Rate",
    color: "hsl(210, 100%, 70%)",
  },
  bounceRate: {
    label: "Bounce Rate",
    color: "hsl(210, 100%, 40%)",
  },
} satisfies ChartConfig;

export function OverviewAreaChart({ data }: Props) {
  const dataFill = data.map((item) => {
    return {
      ...item,
      submissionRate: Number(item.submissionRate.toFixed(0)),
      bounceRate: Number(item.bounceRate.toFixed(0)),
    };
  });

  return (
    <Card className="shadow-none mb-24">
      <CardHeader>
        <CardTitle>Rate</CardTitle>
        <CardDescription>
          Showing submission rate and bounce rate over <br /> the specified
          period.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-56 w-full">
          <LineChart
            accessibilityLayer
            data={dataFill}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
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
                        {value}%
                      </div>
                    </div>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <Line
              dataKey="submissionRate"
              type="monotone"
              stroke="var(--color-submissionRate)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="bounceRate"
              type="monotone"
              stroke="var(--color-bounceRate)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
