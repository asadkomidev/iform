"use client";

import { LucideHeading2, SquareSplitVertical, Text } from "lucide-react";

import { attributes } from "./common";

import Props from "./props";
import Form from "./form";
import { ElementType, FormElementType } from "@/types/elements/elements";
import Element from "./element";
import { BsParagraph } from "react-icons/bs";

const type: ElementType = "Space";

export const SpaceElement: FormElementType = {
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
    icon: SquareSplitVertical,
    label: "Space",
  },

  validate: () => true,
};
