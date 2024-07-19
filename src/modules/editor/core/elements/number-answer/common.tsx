import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  question: "Enter a number question",
  instructions: "",
  required: false,
  placeHolder: "0",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
