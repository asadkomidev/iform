"use client";

import {
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Label,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

type Props = {
  value: number;
  title: string;
};

export default function KpiRate({ value, title }: Props) {
  return (
    <Card className=" h-full shadow-none">
      <CardContent className="flex gap-4 p-4">
        <ChartContainer
          config={{
            stand: {
              label: "Stand",
              color: "hsl(210, 100%, 70%)",
            },
          }}
          className="mx-auto aspect-square w-full ">
          <RadialBarChart
            margin={{
              left: -10,
              right: -10,
              top: -10,
              bottom: -10,
            }}
            data={[
              {
                activity: "stand",
                value: value,
                fill: "var(--color-stand)",
              },
            ]}
            innerRadius="70%"
            barSize={24}
            startAngle={90}
            endAngle={450}>
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey="value"
              tick={false}
            />
            <RadialBar dataKey="value" background cornerRadius={5} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                          className="fill-foreground text-4xl font-bold">
                          {parseFloat(
                            value?.toFixed(0) || "0"
                          ).toLocaleString() + "%"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground">
                          {title}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
