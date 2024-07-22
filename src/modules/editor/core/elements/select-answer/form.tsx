"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { SubmitFunction } from "@/types/elements/functions";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CustomInstance } from "./common";
import { SelectAnswerElement } from ".";
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
      <div className="">
        <Select
          defaultValue={value}
          onValueChange={(value) => {
            setValue(value);
            if (!submitFunction) return;
            const valid = SelectAnswerElement.validate(element, value);
            setError(!valid);
            submitFunction(element.id, value);
          }}>
          <SelectTrigger
            className={cn("md:w-1/2 shadow-none", error && "border-red-500")}>
            <SelectValue placeholder={options[0]} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </ElementContentWrapper>
  );
};

export default Form;
