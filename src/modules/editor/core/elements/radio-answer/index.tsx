"use client";

import { RiRadioButtonLine } from "react-icons/ri";

import { ElementInstance } from "@/types/elements/instances";

import { CustomInstance, attributes } from "./common";
import Field from "./element";
import Form from "./form";
import Props from "./props";
import { ElementType, FormElementType } from "@/types/elements/elements";

const type: ElementType = "RadioAnswer";

export const RadioAnswerElement: FormElementType = {
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
    icon: RiRadioButtonLine,
    label: "Single Choice",
  },

  validate: (element: ElementInstance, currentValue: string): boolean => {
    const item = element as CustomInstance;
    if (item.attributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
