"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;
  return (
    <div className="flex flex-col w-full h-full py-4">
      <Label className="pb-2 text-lg">
        {question || "Question"}
        {required && "*"}
      </Label>
      <div className="pt-2 pb-4">
        <Button
          disabled
          variant={"outline"}
          className="w-full md:w-64 flex items-center justify-start gap-2 font-normal shadow-none">
          <CalendarIcon className="size-4" />
          <span>Pick a date</span>
        </Button>
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
