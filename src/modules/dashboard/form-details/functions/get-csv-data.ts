import { ElementType } from "@/types/elements/elements";
import { ElementInstance } from "@/types/elements/instances";
import { FormWithSubmissionsType, Row } from "@/types/response/form";
import { CSVColumns, CSVRows } from "./csv-data";

export function getCsvData(data: FormWithSubmissionsType) {
  const formElements = data?.form.content
    ? (JSON.parse(data.form.content) as ElementInstance[])
    : [];

  const columns: {
    id: string;
    question: string;
    required: boolean;
    type: ElementType;
  }[] = [];

  formElements.forEach((element) => {
    switch (element.type) {
      case "ShortAnswer":
      case "LongAnswer":
      case "NumberAnswer":
      case "DateAnswer":
      case "SelectAnswer":
      case "CheckboxAnswer":
      case "RadioAnswer":
      case "MultipleAnswer":
        columns.push({
          id: element.id,
          question: element.attributes?.question,
          required: element.attributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  const rows: Row[] = [];
  data.submissions.forEach((submission) => {
    const content = JSON.parse(submission.content!);

    rows.push({
      ...content,
      submittedAt: submission.createdAt,
    });
  });

  const submittedAt = {
    id: "submittedAt",
    question: "Submitted at",
    required: false,
    type: "" as ElementType,
  };

  const finalColumns = [...columns, submittedAt];

  const CSVColumn = CSVColumns(finalColumns);
  const CSVRow = CSVRows(rows);

  return { columns, rows, CSVColumn, CSVRow };
}
