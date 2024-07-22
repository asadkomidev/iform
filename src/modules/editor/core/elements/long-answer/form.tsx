"use client";

import { useEffect, useState } from "react";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { Label } from "@/components/ui/label";
import { SubmitFunction } from "@/types/elements/functions";
import { cn } from "@/lib/utils";
import { LongAnswerElement } from ".";
import { Textarea } from "@/components/ui/textarea";
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
  const { question, required, placeHolder, instructions } = items.attributes;

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
        <Textarea
          className={cn("shadow-none", error && "border-red-500")}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            if (!submitFunction) return;
            const valid = LongAnswerElement.validate(element, e.target.value);
            setError(!valid);
            if (!valid) return;
            submitFunction(element.id, e.target.value);
          }}
          value={value}
        />
      </div>
    </ElementContentWrapper>
  );
};

export default Form;
