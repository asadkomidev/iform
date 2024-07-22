"use client";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChartDataType, QuestionResponseDataType } from "@/types/response/form";
import MultipleAnswerChartCard from "./multiple-answer/char-card";
import SingleAnswerChartCard from "./single-answer/char-card";
import SelectAnswerChartCard from "./select-answer/char-card";

import AllAnswers from "./all-answers/all-answers";

type Props = {
  multiAnswer: ChartDataType[];
  radioAnswer: ChartDataType[];
  selectAnswer: ChartDataType[];
  shortAnswer: QuestionResponseDataType[];
  longAnswer: QuestionResponseDataType[];
  dateAnswer: QuestionResponseDataType[];
  numberAnswer: QuestionResponseDataType[];
};

export default function DetailsSheet({
  multiAnswer,
  radioAnswer,
  selectAnswer,
  shortAnswer,
  longAnswer,
  dateAnswer,
  numberAnswer,
}: Props) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const downloadPDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Form details",
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"sm"} variant={"outline"} className="shadow-none">
          More Details
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll ">
        <SheetHeader>
          <div className="flex items-center justify-between pt-8">
            <div className="">
              <SheetTitle>Form Details</SheetTitle>
              <SheetDescription>
                The number of responses for each question
              </SheetDescription>
            </div>
            <div className="">
              <Button size={"sm"} onClick={downloadPDF}>
                Download PDF
              </Button>
            </div>
          </div>
        </SheetHeader>

        <div ref={componentRef} className="flex flex-col gap-4 pt-6">
          {shortAnswer.length > 0 && <AllAnswers data={shortAnswer} />}

          {longAnswer.length > 0 && <AllAnswers data={longAnswer} />}
          {dateAnswer.length > 0 && <AllAnswers data={dateAnswer} />}
          {numberAnswer.length > 0 && <AllAnswers data={numberAnswer} />}

          {multiAnswer && <MultipleAnswerChartCard data={multiAnswer} />}

          {radioAnswer && <SingleAnswerChartCard data={radioAnswer} />}

          {selectAnswer && <SelectAnswerChartCard data={selectAnswer} />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
