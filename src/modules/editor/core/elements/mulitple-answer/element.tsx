"use client";

import { ListTodo } from "lucide-react";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, instructions, options } = items.attributes;
  return (
    <div className="flex flex-col  w-full">
      <div className="">
        <span className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <ListTodo className="size-3" /> Multiple Choice
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  text-muted-foreground">
          {options.map((option, i) => (
            <div key={`option-${i}`} className="flex items-center gap-2 pl-5">
              <Checkbox disabled id={`option-${i}`} />
              <Label htmlFor={`option-${i}`} className="font-normal">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
