"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarIcon } from "lucide-react";
import ElementContentWrapper from "../../components/element-content-wrapper";

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
          <Calendar className="size-3" /> Date
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="pl-5">
          <Button
            disabled
            variant={"outline"}
            className="w-full md:w-64 flex items-center justify-start gap-2 font-normal shadow-none">
            <CalendarIcon className="size-4" />
            <span>Pick a date</span>
          </Button>
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
