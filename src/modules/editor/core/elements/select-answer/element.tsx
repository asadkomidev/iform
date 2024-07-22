"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";
import { CircleChevronDown } from "lucide-react";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, options, instructions } = items.attributes;
  return (
    <div className="flex flex-col  w-full">
      <div className="">
        <span className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <CircleChevronDown className="size-3" /> Dropdown
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="flex flex-col gap-2 text-muted-foreground">
          {options.map((option, index) => (
            <div key={index} className="flex items-center pl-5">
              <span className="text-sm">{option}</span>
            </div>
          ))}
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
