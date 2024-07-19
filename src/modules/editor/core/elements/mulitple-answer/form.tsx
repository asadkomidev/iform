"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { SubmitFunction } from "@/types/elements/functions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
  submitFunction?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
};

const Form = ({ element, submitFunction, isInvalid, defaultValue }: Props) => {
  const [value, setValue] = useState<string[]>(
    defaultValue ? [defaultValue] : []
  );
  const [error, setError] = useState(false);

  const items = element as CustomInstance;
  const { question, required, instructions, options } = items.attributes;

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const onCheckedChange = (item: string) => {
    const updatedValue = value.includes(item)
      ? value.filter((v) => v !== item)
      : [...value, item];

    setValue(updatedValue);

    if (!submitFunction) return;

    submitFunction(element.id, updatedValue.join(", "));
  };
  return (
    <div className="flex flex-col w-full ">
      <Label className={cn("text-lg", error && "text-red-500")}>
        {question}
        {required && "*"}
      </Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-muted-foreground">
        {options.map((option, i) => (
          <div
            key={`unique-id-${i}` + option}
            className="flex items-start gap-2">
            <Checkbox
              checked={value.includes(option)}
              onCheckedChange={() => onCheckedChange(option)}
            />
            <Label className="ml-2">{option}</Label>
          </div>
        ))}
      </div>

      {instructions && (
        <p
          className={cn(
            "text-muted-foreground text-xs",
            error && "text-red-500"
          )}>
          {instructions}
        </p>
      )}
    </div>
  );
};

export default Form;
