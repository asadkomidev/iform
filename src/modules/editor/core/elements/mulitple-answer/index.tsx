"use client";

import { ListTodo } from "lucide-react";

import { ElementInstance } from "@/types/elements/instances";
import { ElementType, FormElementType } from "@/types/elements/elements";

import { CustomInstance, attributes } from "./common";
import Field from "./element";
import Form from "./form";
import Props from "./props";

const type: ElementType = "MultipleAnswer";

export const MultipleAnswerElement: FormElementType = {
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
    icon: ListTodo,
    label: "Multiple Choice",
  },

  validate: (element: ElementInstance, currentValue: string): boolean => {
    const item = element as CustomInstance;
    if (item.attributes.required) {
      return currentValue.length > 0;
    }
    return true;
  },
};
