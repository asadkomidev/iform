"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";
import { Input } from "@/components/ui/input";
import { Bs123 } from "react-icons/bs";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;
  return (
    <div className="flex flex-col  w-full">
      <div className="">
        <span className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <Bs123 className="size-3 text-primary" /> Number
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="pl-5">
          <Input
            type="number"
            disabled
            placeholder="0"
            className="w-full md:w-64 shadow-none"
          />
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
