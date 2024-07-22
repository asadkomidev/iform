"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { SubmitFunction } from "@/types/elements/functions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";

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
    <ElementContentWrapper
      isForm
      question={question}
      instructions={instructions}
      required={required}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
        {options.map((option, i) => (
          <div
            key={`unique-id-${i}` + option}
            className="flex items-center gap-2">
            <Checkbox
              checked={value.includes(option)}
              onCheckedChange={() => onCheckedChange(option)}
            />
            <Label className="font-normal">{option}</Label>
          </div>
        ))}
      </div>
    </ElementContentWrapper>
  );
};

export default Form;
