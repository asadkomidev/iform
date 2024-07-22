"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { ElementInstance } from "@/types/elements/instances";
import { SubmitFunction } from "@/types/elements/functions";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CustomInstance } from "./common";
import { DateAnswerElement } from ".";
import ElementContentWrapper from "../../components/element-content-wrapper";

type Props = {
  element: ElementInstance;
  submitFunction?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
};

const Form = ({ element, submitFunction, isInvalid, defaultValue }: Props) => {
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined
  );

  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  return (
    <ElementContentWrapper
      isForm
      question={question}
      instructions={instructions}
      required={required}>
      <Popover>
        <PopoverTrigger asChild className="shadow-none">
          <Button
            variant={"outline"}
            className={cn(
              "w-full  md:w-1/2 justify-start text-left font-normal",
              !date && "text-muted-foreground",
              error && "border-red-500"
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="md:w-auto w-full p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);

              if (!submitFunction) return;
              const value = date?.toUTCString() || "";
              const valid = DateAnswerElement.validate(element, value);
              setError(!valid);
              submitFunction(element.id, value);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </ElementContentWrapper>
  );
};

export default Form;
