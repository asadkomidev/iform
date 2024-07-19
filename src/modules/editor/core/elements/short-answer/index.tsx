"use client";

import { MdShortText } from "react-icons/md";
import { ElementInstance } from "@/types/elements/instances";

import { CustomInstance, attributes } from "./common";
import Field from "./element";
import Form from "./form";
import Props from "./props";
import { ElementType, FormElementType } from "@/types/elements/elements";

const type: ElementType = "ShortAnswer";

export const ShortAnswerElement: FormElementType = {
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
    icon: MdShortText,
    label: "Short answer",
  },

  validate: (element: ElementInstance, currentValue: string): boolean => {
    const item = element as CustomInstance;
    if (item.attributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
