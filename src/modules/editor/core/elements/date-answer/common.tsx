import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  question: "",
  instructions: "",
  required: false,
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
