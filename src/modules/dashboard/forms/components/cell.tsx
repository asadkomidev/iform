import { ReactNode } from "react";
import { format } from "date-fns";

import { TableCell } from "@/components/ui/table";
import { ElementType } from "@/types/elements/elements";
import { Badge } from "@/components/ui/badge";

type Props = {
  type: ElementType;
  value: string;
};

const Cell = ({ type, value }: Props) => {
  let node: ReactNode = value;

  switch (type) {
    case "DateAnswer":
      if (!value) break;
      const date = new Date(value);
      node = <Badge variant={"outline"}>{format(date, "MMM dd, yyyy")}</Badge>;
      break;
    case "CheckboxAnswer":
      // const checked = value === "true";
      // node = (
      //   <div className="flex items-center gap-2">
      //     <Checkbox checked={checked} disabled />
      //     <span className="">{checked ? "Yes" : "No"}</span>
      //   </div>
      // );
      break;
    case "MultipleAnswer":
      console.log("Value", value);
      const values = value.split(",");

      node = (
        <div className="flex flex-col gap-1">
          {values.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      );
      break;
  }

  return <TableCell className="whitespace-nowrap">{node}</TableCell>;
};

export default Cell;
