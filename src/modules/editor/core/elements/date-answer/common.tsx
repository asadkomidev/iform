import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  question: "Pick a date question",
  instructions: "",
  required: false,
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
