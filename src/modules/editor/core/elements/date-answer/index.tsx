"use client";

import { ElementInstance } from "@/types/elements/instances";

import { CustomInstance, attributes } from "./common";
import Field from "./element";
import Form from "./form";
import Props from "./props";
import { ElementType, FormElementType } from "@/types/elements/elements";
import { Calendar } from "lucide-react";

const type: ElementType = "DateAnswer";

export const DateAnswerElement: FormElementType = {
  construct: (id: string) => ({
    id,
    type,
    attributes,
  }),
  type,
  element: Field,
  form: Form,
  props: Props,
  elementButton: {
    icon: Calendar,
    label: "Date",
  },

  validate: (element: ElementInstance, currentValue: string): boolean => {
    const item = element as CustomInstance;
    if (item.attributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
