import { FormType } from "@/backend/database/types";

import { QuestionsChartData } from "@/types/response/chart";

import {
  ChartDataType,
  FormWithSubmissionsType,
  QuestionResponseDataType,
  RecentSubmissionsType,
} from "@/types/response/form";

import Recent from "./home/recent/recent";
import Kpi from "./home/kpis/kpi";
import FormHeader from "./home/header/form-header";
import ActionCard from "./home/action/action-card";
import { QuestionsResponsesPieChart } from "./home/charts/pie-chart";

type Props = {
  data: FormWithSubmissionsType;
  visits: number | null;
  submissions: number | null;
  submissionRate: number | null;
  bounceRate: number | null;
  form: FormType;
  questionsResponseData: QuestionsChartData[];
  latestSubmission: RecentSubmissionsType[];
  multiAnswer: ChartDataType[];
  radioAnswer: ChartDataType[];
  selectAnswer: ChartDataType[];
  shortAnswer: QuestionResponseDataType[];
  longAnswer: QuestionResponseDataType[];
  dateAnswer: QuestionResponseDataType[];
  numberAnswer: QuestionResponseDataType[];
};

export default function FormDetails({
  data,
  visits,
  submissions,
  submissionRate,
  bounceRate,
  form,
  questionsResponseData,
  latestSubmission,
  multiAnswer,
  radioAnswer,
  selectAnswer,
  shortAnswer,
  longAnswer,
  dateAnswer,
  numberAnswer,
}: Props) {
  return (
    <div className="px-4 ">
      <FormHeader form={form} />

      <Kpi
        visits={visits}
        submissions={submissions}
        submissionRate={submissionRate}
        bounceRate={bounceRate}
      />
      <ActionCard
        multiAnswer={multiAnswer}
        radioAnswer={radioAnswer}
        selectAnswer={selectAnswer}
        shortAnswer={shortAnswer}
        longAnswer={longAnswer}
        dateAnswer={dateAnswer}
        numberAnswer={numberAnswer}
        data={data}
      />
      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full h-full">
          <QuestionsResponsesPieChart
            questionsChartData={questionsResponseData}
            visits={visits || 0}
          />
        </div>
        <div className="w-full h-full">
          <Recent data={latestSubmission} />
        </div>
      </div>
      {/* <div className="pt-6 pb-12 bg-background border p-4 mt-6 rounded-lg mb-24">
        <SubmissionTable data={data} />
      </div> */}
    </div>
  );
}
