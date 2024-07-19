"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, options, instructions } = items.attributes;
  return (
    <div className="flex flex-col w-full py-4">
      <Label className="pb-2 text-lg">
        {question || "Single choice question"}
        {required && "*"}
      </Label>

      {options.length === 0 ? (
        <div className="">
          <p className="text-xs text-muted-foreground">
            This is a choose one answer question.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 text-muted-foreground">
          {options.map((option, i) => (
            <RadioGroup
              disabled
              key={`option-${i}`}
              className="flex items-start text-muted-foreground">
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
      )}

      {instructions && (
        <p className=" text-muted-foreground/50 text-[0.8rem]">
          {instructions}
        </p>
      )}
    </div>
  );
};

export default Element;
