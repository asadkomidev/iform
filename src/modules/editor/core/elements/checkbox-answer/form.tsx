"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { SubmitFunction } from "@/types/elements/functions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { CustomInstance } from "./common";
import { CheckboxAnswerElement } from ".";

type Props = {
  element: ElementInstance;
  submitFunction?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
};

const Form = ({ element, submitFunction, isInvalid, defaultValue }: Props) => {
  const [value, setValue] = useState<boolean>(
    defaultValue === "true" ? true : false
  );
  const [error, setError] = useState(false);

  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;

  const id = `checkbox-${element.id}`;

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id={id}
          checked={value}
          className={cn(error && "border-red-500")}
          onCheckedChange={(checked) => {
            let value = false;
            if (checked === true) value = true;

            setValue(value);
            if (!submitFunction) return;
            const stringValue = value ? "true" : "false";
            const valid = CheckboxAnswerElement.validate(element, stringValue);
            setError(!valid);
            submitFunction(element.id, stringValue);
          }}
        />

        <Label className={cn(error && "text-red-500")}>
          {question}
          {required && "*"}
        </Label>
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
