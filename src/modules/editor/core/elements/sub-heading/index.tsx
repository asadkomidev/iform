"use client";

import { LucideHeading2 } from "lucide-react";

import { attributes } from "./common";

import Props from "./props";
import Form from "./form";
import { ElementType, FormElementType } from "@/types/elements/elements";
import Element from "./element";

const type: ElementType = "SubHeading";

export const SubHeadingElement: FormElementType = {
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
    icon: LucideHeading2,
    label: "Sub Heading",
  },

  validate: () => true,
};
