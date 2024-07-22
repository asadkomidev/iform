"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";

import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";
import { Input } from "@/components/ui/input";
import { MdShortText } from "react-icons/md";

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
          <MdShortText className="size-3" /> Short Answer
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="pl-5">
          <Input
            disabled
            placeholder="Short Answer"
            className="w-full shadow-none"
          />
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
