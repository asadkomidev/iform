"use client";

import { Card } from "@/components/ui/card";

type Props = {
  value: string;
  label: string;
};
export default function KpiRate({ value, label }: Props) {
  return (
    <Card className="px-4 shadow-none ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="space-y-1">
              <div className="text-xl font-bold">{value}</div>
            </div>
          </div>
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray="251.2"
              strokeDashoffset={value}
            />
          </svg>
        </div>
        <div className="text-xs py-2 text-muted-foreground">{label}</div>
      </div>
    </Card>
  );
}
