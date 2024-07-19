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
  const { question, required, instructions } = items.attributes;
  const id = `checkbox-${element.id}`;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Checkbox disabled id={id} />
        <Label htmlFor={id}>
          {question || "Checkbox question"}
          {required && "*"}
        </Label>
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
