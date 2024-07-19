"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, options, instructions } = items.attributes;
  return (
    <div className="flex flex-col w-full py-4 ">
      <Label className="pb-2 text-lg">
        {question || "Question"}
        {required && "*"}
      </Label>
      <div className="">
        {options.length > 0 ? (
          <div className="pb-4 flex flex-col gap-2 text-muted-foreground">
            {options.map((option, index) => (
              <div key={index} className="flex items-center">
                <span className="text-sm">{option}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-4">
            <span className="text-muted-foreground text-sm">
              Click to add options
            </span>
          </div>
        )}
      </div>
      {instructions && (
        <p className=" text-muted-foreground/50 text-[0.8rem]">
          {instructions}
        </p>
      )}
    </div>
  );
};

export default Element;
