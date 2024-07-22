"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { Label } from "@/components/ui/label";
import { SubmitFunction } from "@/types/elements/functions";
import { cn } from "@/lib/utils";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioAnswerElement } from ".";
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

  const items = element as CustomInstance;
  const { question, required, instructions, options } = items.attributes;

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  return (
    <ElementContentWrapper
      isForm
      question={question}
      instructions={instructions}
      required={required}>
      <RadioGroup
        className=""
        defaultValue={value}
        onValueChange={(value) => {
          setValue(value);
          if (!submitFunction) return;
          const valid = RadioAnswerElement.validate(element, value);
          setError(!valid);
          submitFunction(element.id, value);
        }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
          {options.map((option, i) => (
            <div key={i} className="flex items-center gap-2">
              <RadioGroupItem value={option} />
              <Label>{option}</Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </ElementContentWrapper>
  );
};

export default Form;
