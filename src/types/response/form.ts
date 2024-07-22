import {
  getFormWithSubmissionsAction,
  getStatsAction,
} from "@/actions/form-actions";
import { ElementType } from "../elements/elements";

export type GetStatsResponse = Awaited<ReturnType<typeof getStatsAction>>;

export type RecentSubmissionsType = {
  id: number;
  submittedAt: Date | null;
};

export type ResponseType = {
  question: string;
  option: string;
  responseCount: number;
};

export type MultiAnswerChartDataType = ResponseType[][];

export type MultiAnswerResponsesType = {
  option: string;
  responseCount: number;
};

export type MultiAnswerType = {
  [questionTitle: string]: MultiAnswerResponsesType[];
};

export type QuestionResponseDataType = {
  question: string;
  responseCount: number;
};
export type ChartDataType = {
  option: string;
  responseCount: number;
};

export type GeneralChartDataType = {
  [questionTitle: string]: ChartDataType[];
};

export type FormWithSubmissionsType = Awaited<
  ReturnType<typeof getFormWithSubmissionsAction>
>;

export type Row = { [key: string]: string } & {
  submittedAt: Date;
};

export type Column = {
  id: string;
  question: string;
  required: boolean;
  type: ElementType;
};
