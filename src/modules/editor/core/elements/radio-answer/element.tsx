"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";
import { RiRadioButtonLine } from "react-icons/ri";

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
          <RiRadioButtonLine className="size-3" /> Single Choice
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
          {options.map((option, i) => (
            <RadioGroup
              disabled
              key={`option-${i}`}
              className="flex items-start text-muted-foreground pl-5">
              <RadioGroupItem
                disabled
                value={option}
                id={`option-${i}`}
                className="text-muted-foreground"
              />
              <Label htmlFor={`option-${i}`} className="text-neutral-400">
                {option}
              </Label>
            </RadioGroup>
          ))}
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
