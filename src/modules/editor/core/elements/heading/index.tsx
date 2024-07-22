"use client";

import { LucideHeading1 } from "lucide-react";

import { ElementType, FormElementType } from "@/types/elements/elements";

import { attributes } from "./common";
import Props from "./props";
import Form from "./form";
import Element from "./element";

const type: ElementType = "Heading";

export const HeadingElement: FormElementType = {
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
    icon: LucideHeading1,
    label: "Title",
  },

  validate: () => true,
};
