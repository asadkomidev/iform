"use client";

import { ElementInstance } from "@/types/elements/instances";

import { CustomInstance, attributes } from "./common";
import Field from "./element";
import Form from "./form";
import Props from "./props";
import { ElementType, FormElementType } from "@/types/elements/elements";
import { Bs123 } from "react-icons/bs";

const type: ElementType = "NumberAnswer";

export const NumberAnswerElement: FormElementType = {
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
    icon: Bs123,
    label: "Number",
  },

  validate: (element: ElementInstance, currentValue: string): boolean => {
    const item = element as CustomInstance;
    if (item.attributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
