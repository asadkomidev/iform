"use client";

import { IoCheckbox } from "react-icons/io5";

import { ElementInstance } from "@/types/elements/instances";
import { ElementType, FormElementType } from "@/types/elements/elements";

import { CustomInstance, attributes } from "./common";
import Field from "./element";
import Form from "./form";
import Props from "./props";

const type: ElementType = "CheckboxAnswer";

export const CheckboxAnswerElement: FormElementType = {
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
    icon: IoCheckbox,
    label: "Checkbox",
  },

  validate: (element: ElementInstance, currentValue: string): boolean => {
    const item = element as CustomInstance;
    if (item.attributes.required) {
      return currentValue === "true";
    }

    return true;
  },
};
