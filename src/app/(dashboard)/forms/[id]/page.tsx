import {
  getFormAction,
  getFormWithSubmissionsAction,
} from "@/actions/form-actions";
import FormDetails from "@/modules/dashboard/form-details/form-details";

import {
  getDateAnswerChartData,
  getLatestSubmissions,
  getLongAnswerChartData,
  getMultiAnswerChartData,
  getQuestionResponses,
  getRadioAnswerChartData,
  getSelectAnswerChartData,
  getShortAnswerChartData,
  getNumberAnswerChartData,
} from "@/modules/dashboard/forms/functions/form-functions";
import { ChartDataType, QuestionResponseDataType } from "@/types/response/form";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params: { id } }: Props) => {
  const questionsResponseData = await getQuestionResponses(Number(id));

  const latestSubmission = await getLatestSubmissions(Number(id));

  const MultiAnswer = await getMultiAnswerChartData(Number(id));
  const SelectAnswer = await getSelectAnswerChartData(Number(id));
  const radioAnswer = await getRadioAnswerChartData(Number(id));

  const shortAnswer = await getShortAnswerChartData(Number(id));
  const longAnswer = await getLongAnswerChartData(Number(id));
  const dateAnswer = await getDateAnswerChartData(Number(id));
  const numberAnswer = await getNumberAnswerChartData(Number(id));

  const form = await getFormAction(id);

  const data = await getFormWithSubmissionsAction(Number(id));

  if (!form) {
    throw new Error("form not found");
  }
  const { visits, submissions } = form;

  let submissionRate = 0;

  if (visits !== null && visits > 0 && submissions !== null) {
    submissionRate = (submissions / visits) * 100;
  }

  let bounceRate = 0;
  if (visits !== null && visits > 0) {
    bounceRate = 100 - submissionRate;
  }

  return (
    <div className="">
      <FormDetails
        form={form}
        data={data}
        visits={visits}
        submissions={submissions}
        submissionRate={submissionRate}
        bounceRate={bounceRate}
        questionsResponseData={questionsResponseData}
        latestSubmission={latestSubmission}
        multiAnswer={MultiAnswer as unknown as ChartDataType[]}
        radioAnswer={radioAnswer as unknown as ChartDataType[]}
        selectAnswer={SelectAnswer as unknown as ChartDataType[]}
        shortAnswer={shortAnswer as unknown as QuestionResponseDataType[]}
        longAnswer={longAnswer as unknown as QuestionResponseDataType[]}
        dateAnswer={dateAnswer as unknown as QuestionResponseDataType[]}
        numberAnswer={numberAnswer as unknown as QuestionResponseDataType[]}
      />
    </div>
  );
};

export default Page;
