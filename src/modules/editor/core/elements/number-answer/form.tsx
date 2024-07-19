"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { SubmitFunction } from "@/types/elements/functions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { CustomInstance } from "./common";
import { NumberAnswerElement } from ".";

type Props = {
  element: ElementInstance;
  submitFunction?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
};

const Form = ({ element, submitFunction, isInvalid, defaultValue }: Props) => {
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState(false);

  const items = element as CustomInstance;
  const { question, required, placeHolder, instructions } = items.attributes;

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  return (
    <div className="flex flex-col gap-2 w-full my-4">
      <Label className={cn("text-lg", error && "text-red-500")}>
        {question}
        {required && "*"}
      </Label>
      <div className="w-1/2 py-2">
        <Input
          type="number"
          className={cn("shadow-none", error && "border-red-500")}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            if (!submitFunction) return;
            const valid = NumberAnswerElement.validate(element, e.target.value);
            setError(!valid);
            if (!valid) return;
            submitFunction(element.id, e.target.value);
          }}
          value={value}
        />
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
