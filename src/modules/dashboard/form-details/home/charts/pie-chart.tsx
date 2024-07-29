"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Label } from "recharts";

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
import { QuestionsChartData } from "@/types/response/chart";
import { reshapeChartData } from "../../details/functions/reshape-chart-data";

type Props = {
  questionsChartData: QuestionsChartData[];
  visits: number;
};

const chartConfig: ChartConfig = {
  responses: {
    label: "Responses",
    color: "hsl(var(--chart-1))",
  },
  question: {
    label: "Question",
    color: "hsl(var(--chart-2))",
  },
  label: {
    label: "Label",
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function QuestionsResponsesPieChart({
  questionsChartData,
  visits,
}: Props) {
  const data = reshapeChartData(questionsChartData);

  return (
    <Card className="shadow-none">
      <CardHeader className="items-start pb-0">
        <CardTitle>Questions responses</CardTitle>
        <CardDescription>
          The number of responses for each question
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Pie
              data={data}
              dataKey="responses"
              nameKey="question"
              innerRadius={60}
              strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold">
                          {data.length}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground">
                          Questions
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm items-start">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
