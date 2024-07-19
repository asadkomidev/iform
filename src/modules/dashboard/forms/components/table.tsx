import { getFormWithSubmissionsAction } from "@/actions/form-actions";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistance } from "date-fns";

import { ElementInstance } from "@/types/elements/instances";
import Cell from "./cell";
import { ElementType } from "@/types/elements/elements";
import CSVDownload from "./csv-download";
import { CSVColumns, CSVData } from "./csv-data";

type Props = {
  id: number;
};

type Row = { [key: string]: string } & {
  submittedAt: Date;
};

const SubmissionTable = async ({ id }: Props) => {
  const form = await getFormWithSubmissionsAction(id);
  const formElements = form?.form.content
    ? (JSON.parse(form.form.content) as ElementInstance[])
    : [];

  console.log("TABLE FORM", formElements[0].attributes);

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
  form.submissions.forEach((submission) => {
    const content = JSON.parse(submission.content!);
    // const options = content.options ? content.options.join(", ") : "";

    rows.push({
      ...content,
      submittedAt: submission.createdAt,
    });
  });

  const submittedAt = {
    id: "submittedAt",
    question: "Submitted at",
    required: false,
    type: "",
  };

  const col = [...columns, submittedAt];

  const c = CSVColumns(col as any);
  const r = CSVData(rows);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Submissions</h1>
        <CSVDownload datas={r} columns={c} />
      </div>
      <div className="rounded-md border overflow-x-scroll no-scrollbar">
        <Table className="overflow-x-scroll">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="">
                  {column.question}
                </TableHead>
              ))}
              <TableHead className="text-muted-foreground text-right">
                Submitted at
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <Cell
                    key={column.id}
                    type={column.type}
                    value={row[column.id]}
                  />
                ))}
                <TableCell className="text-muted-foreground text-right whitespace-nowrap">
                  {formatDistance(row.submittedAt, new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SubmissionTable;
