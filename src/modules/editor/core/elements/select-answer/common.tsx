import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  question: "Dropdown question",
  instructions: "",
  required: false,
  placeHolder: "Answer",
  options: ["Option 1"],
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
