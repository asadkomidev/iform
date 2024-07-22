"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import KpiBarChart from "./kpi-bar-chart";

type Props = {
  value: string;
  title: string;
  description?: string;
  label: string;
};

export default function KpiCard({ value, title, label, description }: Props) {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>
          You are average more steps a day this year than last year.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4 pt-4">
        <div className="grid auto-rows-min gap-2">
          <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
            {value}
            <span className="text-sm font-normal text-muted-foreground">
              {label}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <KpiBarChart />
      </CardFooter>
    </Card>
  );
}
