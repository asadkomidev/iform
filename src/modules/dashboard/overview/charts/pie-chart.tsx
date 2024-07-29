"use client";

import { TrendingUp } from "lucide-react";
import { Legend, Pie, PieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  hslToHex,
  reshapeChartData,
} from "../../forms/functions/form-functions";
import { Progress } from "@/components/ui/progress";
import { cn, formatPercentage } from "@/lib/utils";

type Props = {
  topForms: {
    id: number;
    title: string;
    visits: number;
    submissions: number;
  }[];
};

const chartConfig = {
  submissions: {
    label: "Submissions",
  },
  visits: {
    label: "Visits",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function OverviewPieChart({ topForms }: Props) {
  const data = reshapeChartData(topForms);
  return (
    <Card className="flex flex-col items-center justify-center shadow-none md:w-1/3">
      <CardHeader className="mr-auto pb-0">
        <CardTitle>Top Forms</CardTitle>
        <CardDescription>
          Showing the top forms with submissions
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="aspect-square h-full  ">
          <PieChart className="w-full">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={data} dataKey="submissions" nameKey="title" />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              content={({ payload }: any) => {
                const colors = payload.map((entry: any) => entry.color);

                return (
                  <ul className="flex justify-center flex-col space-y-2 p-4 mx-12">
                    {payload.map((entry: any, index: number) => {
                      return (
                        <li
                          key={`item-${index}`}
                          className="flex items-center ">
                          <span
                            className="size-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                          />
                          <div className="space-x-1 flex items-center gap-2 w-full">
                            <span className="text-xs text-muted-foreground">
                              {entry.id}
                            </span>
                            <span className="text-xs flex items-center gap-2 w-full">
                              <div className="w-full bg-muted rounded-lg h-2.5 ">
                                <div
                                  className="h-2.5 rounded-lg"
                                  style={{
                                    width: `${entry.payload.percent * 100}%`,
                                    backgroundColor: entry.color,
                                  }}></div>
                              </div>
                              {formatPercentage(entry.payload.percent * 100)}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                );
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
