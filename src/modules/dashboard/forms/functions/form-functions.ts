import { getFormWithSubmissionsAction } from "@/actions/form-actions";
import { ElementType } from "@/types/elements/elements";
import { ElementInstance } from "@/types/elements/instances";

type Row = { [key: string]: string } & {
  submittedAt: Date;
};

type Column = {
  id: string;
  question: string;
  required: boolean;
  type: ElementType;
};

async function getFormWithSubmissions(formId: number) {
  return await getFormWithSubmissionsAction(formId);
}

function parseFormContent(content: string | null): ElementInstance[] {
  return content ? (JSON.parse(content) as ElementInstance[]) : [];
}

function createColumns(questionsTitles: ElementInstance[]): Column[] {
  const validTypes = [
    "ShortAnswer",
    "LongAnswer",
    "NumberAnswer",
    "DateAnswer",
    "SelectAnswer",
    "CheckboxAnswer",
    "RadioAnswer",
    "MultipleAnswer",
  ];

  return questionsTitles
    .filter((element) => validTypes.includes(element.type))
    .map((element) => ({
      id: element.id,
      question: element.attributes?.question,
      required: element.attributes?.required,
      type: element.type,
    }));
}

function createRows(submissions: any[]): Row[] {
  return submissions.map((submission) => ({
    ...JSON.parse(submission.content!),
    submittedAt: submission.createdAt,
  }));
}

function countResponses(
  rows: Row[],
  columns: Column[]
): { [key: string]: number } {
  const responseCount: { [key: string]: number } = {};

  columns.forEach((col) => {
    responseCount[col.question] = 0;
  });

  rows.forEach((row) => {
    columns.forEach((col) => {
      if (row[col.id]) {
        responseCount[col.question]++;
      }
    });
  });

  return responseCount;
}

function formatResponseCount(responseCount: { [key: string]: number }) {
  return Object.entries(responseCount).map(([question, responses]) => ({
    question,
    responses,
  }));
}

export async function getQuestionResponses(
  formId: number
): Promise<{ question: string; responses: number }[]> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const columns = createColumns(questionsTitles);
  const rows = createRows(form.submissions);
  const responseCount = countResponses(rows, columns);
  return formatResponseCount(responseCount);
}

export const generateRandomBlueVariantChartColors = () => {
  // define a blue color palette and return a random color from the palette use the hsl color format
  const colors = [
    "hsl(210, 100%, 90%)",
    "hsl(210, 100%, 80%)",
    "hsl(210, 100%, 70%)",
    "hsl(210, 100%, 60%)",
    "hsl(210, 100%, 50%)",
    "hsl(210, 100%, 40%)",
    "hsl(210, 100%, 30%)",
    "hsl(210, 100%, 20%)",
    "hsl(210, 100%, 10%)",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const generateRandomChartColors = () => {
  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--chart-6))",
    "hsl(var(--chart-7))",
    "hsl(var(--chart-8))",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const reshapeChartData = (data: any[]) => {
  const chartData = data.map((question) => {
    return {
      ...question,
      fill: generateRandomChartColors(),
    };
  });

  return chartData;
};

export async function getLatestSubmissions(formId: number) {
  const form = await getFormWithSubmissions(formId);
  const submissions = form.submissions;
  const latestSubmissions = submissions
    .sort((a, b) => {
      return (
        new Date(b.createdAt || "").getTime() -
        new Date(a.createdAt || "").getTime()
      );
    })
    .slice(0, 7)
    .map((submission) => {
      return {
        id: submission.id,
        submittedAt: submission.createdAt,
      };
    });
  return latestSubmissions;
}

export async function convertToChartData(data: {
  [questionTitle: string]: { option: string; responseCount: number }[];
}): Promise<{ option: string; responseCount: number }[][]> {
  return Object.entries(data).map(([option, responses], index) =>
    responses.map((response) => ({
      question: option,
      option: response.option,
      responseCount: response.responseCount,
    }))
  );
}

export async function getMultiAnswerChartData(formId: number): Promise<{
  [questionTitle: string]: { option: string; responseCount: number }[];
}> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const multiAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "MultipleAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: {
    [questionTitle: string]: { [option: string]: number };
  } = {};

  multiAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;
    const options = question.attributes?.options || [];

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = {};
    }

    options.forEach((option: string) => {
      if (!(option in responseCounts[questionTitle])) {
        responseCounts[questionTitle][option] = 0;
      }
    });

    rows.forEach((row) => {
      options.forEach((option: string) => {
        if (row[question.id]?.includes(option)) {
          responseCounts[questionTitle][option]++;
        }
      });
    });
  });

  const result: {
    [questionTitle: string]: { option: string; responseCount: number }[];
  } = {};

  Object.keys(responseCounts).forEach((questionTitle) => {
    result[questionTitle] = Object.entries(responseCounts[questionTitle]).map(
      ([option, responseCount]) => ({
        option,
        responseCount,
      })
    );
  });

  return result;
}

export async function getSelectAnswerChartData(formId: number): Promise<{
  [questionTitle: string]: { option: string; responseCount: number }[];
}> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const selectAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "SelectAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: {
    [questionTitle: string]: { [option: string]: number };
  } = {};

  selectAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;
    const options = question.attributes?.options || [];

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = {};
    }

    options.forEach((option: string) => {
      if (!(option in responseCounts[questionTitle])) {
        responseCounts[questionTitle][option] = 0;
      }
    });

    rows.forEach((row) => {
      options.forEach((option: string) => {
        if (row[question.id] === option) {
          responseCounts[questionTitle][option]++;
        }
      });
    });
  });

  const result: {
    [questionTitle: string]: { option: string; responseCount: number }[];
  } = {};

  Object.keys(responseCounts).forEach((questionTitle) => {
    result[questionTitle] = Object.entries(responseCounts[questionTitle]).map(
      ([option, responseCount]) => ({
        option,
        responseCount,
      })
    );
  });

  return result;
}

export async function getRadioAnswerChartData(formId: number): Promise<{
  [questionTitle: string]: { option: string; responseCount: number }[];
}> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const radioAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "RadioAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: {
    [questionTitle: string]: { [option: string]: number };
  } = {};

  radioAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;
    const options = question.attributes?.options || [];

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = {};
    }

    options.forEach((option: string) => {
      if (!(option in responseCounts[questionTitle])) {
        responseCounts[questionTitle][option] = 0;
      }
    });

    rows.forEach((row) => {
      options.forEach((option: string) => {
        if (row[question.id] === option) {
          responseCounts[questionTitle][option]++;
        }
      });
    });
  });

  const result: {
    [questionTitle: string]: { option: string; responseCount: number }[];
  } = {};

  Object.keys(responseCounts).forEach((questionTitle) => {
    result[questionTitle] = Object.entries(responseCounts[questionTitle]).map(
      ([option, responseCount]) => ({
        option,
        responseCount,
      })
    );
  });

  return result;
}

export async function getShortAnswerChartData(formId: number): Promise<
  {
    question: string;
    responseCount: number;
  }[]
> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const shortAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "ShortAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: { [question: string]: number } = {};

  shortAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = 0;
    }

    rows.forEach((row) => {
      if (row[question.id]) {
        responseCounts[questionTitle]++;
      }
    });
  });

  return Object.entries(responseCounts).map(([question, responseCount]) => ({
    question,
    responseCount,
  }));
}

export async function getLongAnswerChartData(formId: number): Promise<
  {
    question: string;
    responseCount: number;
  }[]
> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const longAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "LongAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: { [question: string]: number } = {};

  longAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = 0;
    }

    rows.forEach((row) => {
      if (row[question.id]) {
        responseCounts[questionTitle]++;
      }
    });
  });

  return Object.entries(responseCounts).map(([question, responseCount]) => ({
    question,
    responseCount,
  }));
}

export async function getNumberAnswerChartData(formId: number): Promise<
  {
    question: string;
    responseCount: number;
  }[]
> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const numberAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "NumberAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: { [question: string]: number } = {};

  numberAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = 0;
    }

    rows.forEach((row) => {
      if (row[question.id]) {
        responseCounts[questionTitle]++;
      }
    });
  });

  return Object.entries(responseCounts).map(([question, responseCount]) => ({
    question,
    responseCount,
  }));
}

export async function getDateAnswerChartData(formId: number): Promise<
  {
    question: string;
    responseCount: number;
  }[]
> {
  const form = await getFormWithSubmissions(formId);
  const questionsTitles = parseFormContent(form.form.content);
  const dateAnswerQuestions = questionsTitles.filter(
    (element) => element.type === "DateAnswer"
  );

  const rows = createRows(form.submissions);

  const responseCounts: { [question: string]: number } = {};

  dateAnswerQuestions.forEach((question) => {
    const questionTitle = questionsTitles.find(
      (element) => element.id === question.id
    )?.attributes?.question;

    if (!responseCounts[questionTitle]) {
      responseCounts[questionTitle] = 0;
    }

    rows.forEach((row) => {
      if (row[question.id]) {
        responseCounts[questionTitle]++;
      }
    });
  });

  return Object.entries(responseCounts).map(([question, responseCount]) => ({
    question,
    responseCount,
  }));
}
