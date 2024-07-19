"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, placeHolder, instructions } = items.attributes;
  return (
    <div className="flex flex-col w-full">
      <Label className="pb-2">
        {question || "Question"}
        {required && "*"}
      </Label>
      <Input
        readOnly
        disabled
        placeholder={placeHolder}
        className="shadow-none"
      />
      {instructions && (
        <p className=" text-muted-foreground/50 text-[0.8rem]">
          {instructions}
        </p>
      )}
    </div>
  );
};

export default Element;
