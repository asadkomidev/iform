"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;
  return (
    <div className="flex flex-col w-full h-full py-2">
      <Label className=" text-lg">
        {question || "Question"}
        {required && "*"}
      </Label>
      <p className="py-2 text-xs text-muted-foreground">
        Click to edit properties
      </p>

      {instructions && (
        <p className=" text-muted-foreground/50 text-[0.8rem]">
          {instructions}
        </p>
      )}
    </div>
  );
};

export default Element;
