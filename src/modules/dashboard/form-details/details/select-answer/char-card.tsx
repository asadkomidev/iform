"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDataType } from "@/types/response/form";
import { SelectAnswerChart } from "./chart";
import { Separator } from "@/components/ui/separator";

type Props = {
  data: ChartDataType[];
};

const SelectAnswerChartCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(data).map(([questionTitle, responses], index) => (
        <Card
          key={index}
          className=" shadow-none border-none"
          style={{ breakAfter: "page" }}>
          <CardHeader>
            <CardTitle>{questionTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <SelectAnswerChart data={responses as unknown as ChartDataType[]} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SelectAnswerChartCard;
