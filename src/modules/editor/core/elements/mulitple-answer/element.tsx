"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, instructions, options } = items.attributes;
  return (
    <div className="flex flex-col w-full py-4">
      <Label className="pb-2 text-lg">
        {question || "Multiple choice question"}
        {required && "*"}
      </Label>
      {options.length === 0 ? (
        <div className="">
          <p className="text-xs text-muted-foreground">
            This is a select multiple answer question.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 text-muted-foreground">
          {options.map((option, i) => (
            <div key={`option-${i}`} className="flex items-center gap-2">
              <Checkbox disabled id={`option-${i}`} />
              <Label htmlFor={`option-${i}`} className="">
                {option}
              </Label>
            </div>
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
