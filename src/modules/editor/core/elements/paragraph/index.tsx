"use client";

import { TextQuote } from "lucide-react";

import { attributes } from "./common";

import Props from "./props";
import Form from "./form";
import { ElementType, FormElementType } from "@/types/elements/elements";
import Element from "./element";

const type: ElementType = "Paragraph";

export const ParagraphElement: FormElementType = {
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
    icon: TextQuote,
    label: "Paragraph",
  },

  validate: () => true,
};
