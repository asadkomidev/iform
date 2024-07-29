export type ChartOverviewDataType = {
  visitsChange: number;
  visits: number;
  submissions: number;
  submissionsChange: number;
  topForms: {
    id: number;
    title: string;
    visits: number;
    submissions: number;
  }[];
  days: {
    date: Date;
    submissions: number;
    visits: number;
  }[];
  rate: {
    date: Date;
    submissions: number;
    visits: number;
    submissionRate: number;
    bounceRate: number;
  }[];
};

export type KpisOverviewDataType = {
  totalVisits: number;
  totalSubmissions: number;
  totalForms: number;
  submissionRate: number;
  bounceRate: number;
};
