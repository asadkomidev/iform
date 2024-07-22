"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDataType } from "@/types/response/form";
import { SingleAnswerChart } from "./chart";

type Props = {
  data: ChartDataType[];
};

const SingleAnswerChartCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(data).map(([questionTitle, responses], index) => (
        <Card
          key={index}
          className=" shadow-none"
          style={{ breakAfter: "page" }}>
          <CardHeader>
            <CardTitle>{questionTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <SingleAnswerChart data={responses as unknown as ChartDataType[]} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SingleAnswerChartCard;
