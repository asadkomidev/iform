import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  question: "Question",
  instructions: "Instructions",
  required: false,
  placeHolder: "Answer",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
