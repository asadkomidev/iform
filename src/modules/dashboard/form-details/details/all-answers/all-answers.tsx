"use client";

import { QuestionResponseDataType } from "@/types/response/form";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Props = {
  data: QuestionResponseDataType[];
};

export default function AllAnswers({ data }: Props) {
  return (
    <>
      {data.map((response, index) => (
        <Card className="shadow-none border-none" key={index}>
          <CardHeader>
            <CardTitle>{response.question}</CardTitle>
            <div className="py-2">
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">Total Responses</div>
                <div className="text-sm text-gray-500">
                  {response.responseCount}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
