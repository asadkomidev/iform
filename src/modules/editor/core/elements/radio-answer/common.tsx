import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  question: "",
  instructions: "",
  required: false,
  placeHolder: "",
  options: ["Option 1"],
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
