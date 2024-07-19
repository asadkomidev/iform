"use client";

import { SeparatorHorizontal } from "lucide-react";

import { attributes } from "./common";

import Props from "./props";
import Form from "./form";
import { ElementType, FormElementType } from "@/types/elements/elements";
import Element from "./element";

const type: ElementType = "Separator";

export const SeparatorElement: FormElementType = {
  construct: (id: string) => ({
    id,
    type,
    attributes,
  }),
  type,
  element: Element,
  form: Form,
  props: Props,
  elementButton: {
    icon: SeparatorHorizontal,
    label: "Separator",
  },

  validate: () => true,
};
