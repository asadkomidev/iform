"use client";

import { QuestionResponseDataType } from "@/types/response/form";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  data: QuestionResponseDataType[];
};

const ShortAnswerCard = ({ data }: Props) => {
  return (
    <>
      {data.map((response, index) => (
        <Card className="shadow-none" key={index}>
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
};

export default ShortAnswerCard;
