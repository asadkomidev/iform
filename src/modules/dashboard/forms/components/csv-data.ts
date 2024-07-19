import { format } from "date-fns";
import { ElementType } from "@/types/elements/elements";

type ColumnsType = {
  id: string;
  question: string;
  required: boolean;
  type: ElementType;
};

type Row = { [key: string]: string };

export const CSVColumns = (data: ColumnsType[]) => {
  return data.map((column) => {
    return {
      id: column.id,
      displayName: column.question,
    };
  });
};

export const CSVData = (data: Row[]) => {
  return data.map((item) => {
    // const x = Object.keys(item).forEach((key) => {
    //   if (typeof item[key] === "string" && item[key].includes(",")) {
    //     item[key] = item[key].replace(/,/g, "\n");
    //   }
    // });

    // console.log("X", x);

    return {
      ...item,
      submittedAt: format(item.submittedAt, "MMM dd yyyy - HH:mm a"),
    };
  });
};
