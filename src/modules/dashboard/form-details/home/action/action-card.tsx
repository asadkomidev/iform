"use client";

import {
  ChartDataType,
  FormWithSubmissionsType,
  QuestionResponseDataType,
} from "@/types/response/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DetailsSheet from "../../details/details-sheet";
import CSVDownload from "../utils/csv-download";
import { getCsvData } from "../../details/functions/get-csv-data";

type Props = {
  multiAnswer: ChartDataType[];
  radioAnswer: ChartDataType[];
  selectAnswer: ChartDataType[];
  shortAnswer: QuestionResponseDataType[];
  longAnswer: QuestionResponseDataType[];
  dateAnswer: QuestionResponseDataType[];
  numberAnswer: QuestionResponseDataType[];
  data: FormWithSubmissionsType;
};

import React from "react";

export default function ActionCard({
  multiAnswer,
  radioAnswer,
  selectAnswer,
  shortAnswer,
  longAnswer,
  dateAnswer,
  numberAnswer,
  data,
}: Props) {
  const { CSVColumn, CSVRow } = getCsvData(data);
  return (
    <div className="mt-6">
      <Card className="sm:col-span-2 shadow-none">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <CardTitle>Responses Overview</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Get a full overview of the responses to this form and how they
                are distributed. This will help you understand the data better.
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <DetailsSheet
                multiAnswer={multiAnswer}
                radioAnswer={radioAnswer}
                selectAnswer={selectAnswer}
                shortAnswer={shortAnswer}
                longAnswer={longAnswer}
                dateAnswer={dateAnswer}
                numberAnswer={numberAnswer}
              />
              <CSVDownload datas={CSVRow} columns={CSVColumn} />
            </div>
          </div>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
